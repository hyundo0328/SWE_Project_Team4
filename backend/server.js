const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();

const SECRET_KEY = 'swe_project_team4';

// JSON 요청 본문 크기 제한을 50MB로 설정
app.use(express.json({ limit: '50mb' }));
// URL 인코딩된 데이터 요청 본문 크기 제한을 50MB로 설정
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

/* DB 연결 */
const dbPath = path.join(__dirname, 'db', 'database.db');
const db = new sqlite3.Database(dbPath);

/* 테이블 생성 */
function createDB(){
    db.serialize(() => {
        // user DB
        db.run(`CREATE TABLE IF NOT EXISTS users (
                n INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                ID TEXT UNIQUE,
                PW TEXT,
                request TEXT
              )`);
        
        // posts DB
        db.run(`CREATE TABLE IF NOT EXISTS posts (
                n INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                imageSrc TEXT,
                hash1 TEXT,
                hash2 TEXT,
                hash3 TEXT
              )`);
      });
}
createDB();

/* ------------------------------------------------------------------------------------------------------ */
// 로그인 관련 Endpointg
/* 회원가입 Endpoint */
app.post('/signup', (req, res) => {
    const { name, ID, PW } = req.body;
    const hashedPassword = bcrypt.hashSync(PW, 10);

    db.run(`INSERT INTO users (name, ID, PW) VALUES (?, ?, ?)`, [name, ID, hashedPassword], function(err) {
        if (err) {
            return res.status(500).json({ message: 'User registration failed' });
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
});

/* 로그인 Endpoint */
app.post('/login', (req, res) => {
    const { ID, PW } = req.body;

    db.get(`SELECT * FROM users WHERE ID = ?`, [ID], (err, row) => {
        if (err || !row) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = bcrypt.compareSync(PW, row.PW);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ n: row.n, name: row.name, ID: row.ID }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    });
});


/* ------------------------------------------------------------------------------------------------------ */
// Post 관련 Endpoint
/* 사용자 리스트 반환 Endpoint */
app.get('/api/user', (req, res) => {
    db.all(`SELECT name FROM users`, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(rows); // 사용자 이름 목록 반환
    });
});

/* 서버의 모든 Post 반환 Endpoint */
app.get('/allposts', (req, res) => {
    db.all(`SELECT * FROM posts`, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(rows); // 사용자 이름 목록 반환
    });
});

/* 업로드 Endpoint */
app.post('/upload', (req, res) => {
    const { name, imageSrc, hash1, hash2, hash3 } = req.body;

    if (!name || !imageSrc || !hash1 || !hash2 || !hash3) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(`INSERT INTO posts (name, imageSrc, hash1, hash2, hash3) VALUES (?, ?, ?, ?, ?)`, [name, imageSrc, hash1, hash2, hash3], function(err) {
        if (err) {
            return res.status(500).json({ message: 'Post upload failed' });
        }
        res.status(200).json({ message: 'Post upload successfully' });
    });
});

/* 사용자가 업로드한 Post 반환 Endpoint */
app.post('/api/myposts', (req, res) => {
    const name = req.body.userName;
    // console.log(name);

    // 데이터베이스에서 name과 일치하는 데이터를 조회합니다.
    db.all('SELECT * FROM posts WHERE name = ?', [name], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }
        
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
    
        // 조회한 데이터를 JSON 형태로 프론트엔드로 응답합니다.
        res.json(rows);
    });
    
});

// 해쉬태그가 포함된 Post 반환 엔드포인트
app.post('/searchposts', (req, res) => {
    const hashtag = req.body.searchHashtag;
    const query = `
    SELECT * FROM posts 
    WHERE hash1 LIKE '%' || ? || '%' 
       OR hash2 LIKE '%' || ? || '%' 
       OR hash3 LIKE '%' || ? || '%'
`;

    // 데이터베이스에서 hash1, hash2, hash3 중 하나라도 hashtag와 일치하는 데이터를 조회합니다.
    db.all(query, [hashtag, hashtag, hashtag], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }
        
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
    
        // 조회한 데이터를 JSON 형태로 프론트엔드로 응답합니다.
        res.json(rows);
    }); 
});

// Post DB Index를 이용한 Post 반환 엔드포인트
app.post('/get/post', (req, res) => {
    const { postNum } = req.body;
    console.log(postNum);

    db.get(`SELECT * FROM posts WHERE n = ?`, [postNum], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }
        
        if (!row || row.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
    
        // 조회한 데이터를 JSON 형태로 프론트엔드로 응답합니다.
        res.json(row);
        console.log(row)
    });
});

// Post 수정 엔드포인트
app.post('/revise', (req, res) => {
    const { n, name, imageSrc, hash1, hash2, hash3 } = req.body;

    if (!name || !imageSrc || !hash1 || !hash2 || !hash3) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `
        UPDATE posts
        SET name = ?, imageSrc = ?, hash1 = ?, hash2 = ?, hash3 = ?
        WHERE n = ?
    `;

    db.run(query, [name, imageSrc, hash1, hash2, hash3, n], function(err) {
        if (err) {
            return res.status(500).json({ message: 'Post update failed' });
        }
        res.status(200).json({ message: 'Post updated successfully' });
    });
});


/* ------------------------------------------------------------------------------------------------------ */
// Message 관련 Endpoint

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
