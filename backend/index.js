import express from "express";
import mysql from 'mysql';
import cors from 'cors'
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'referral'
});

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    const q = 'SELECT * FROM users'
    db.query(q, (err, rows) => {
        res.json(rows)
    })
})

app.post('/login', (req, res) => {
    const q = "SELECT * FROM users WHERE email = ? AND password = ?"
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(q, [req.body.email, req.body.password], (err, rows) => {
        if(err) res.send({err: err})
        if(rows.length > 0){
            res.send(rows)
        }else{
            res.send({message: "Invalid Username or Password"})
        }
    })
})

app.listen(5000, ()=>{
    console.log('Connected to Backend');
})