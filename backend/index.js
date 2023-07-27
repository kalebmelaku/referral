import express from "express";
import mysql from 'mysql';
import cors from 'cors'
import multer from "multer";
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url'
import { log } from "console";
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'referral'
});
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use("/uploads",express.static("./uploads"))
app.get('/', (req, res) => {
    const q = 'SELECT * FROM users'
    db.query(q, (err, rows) => {
        res.json(rows)
    })
})
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`file-${Date.now()}.${file.originalname}`)
    }
});
const upload = multer({storage: imgconfig})


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
            res.status(401).json({message: "Invalid Username or Password"})
        }
    })
})

app.post('/uploadBid', upload.single("photo"), (req, res) => {
    const {fname} = req.body;
    const {filename} = req.file;

    db.query("INSERT INTO bids SET ?", {name: fname, file:filename}, (err, result) => {
        if(err) console.log(err);
        else console.log('data added');
    })
})

app.get('/bids', (req, res) => {
    db.query("SELECT * FROM bids",(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data get")
            res.status(201).json({status:201,data:result})
        }
    })
})

app.get('/download:id', (req, res) =>
{
    const query = url.parse(req.url, true).query;
    const id = req.params.id
    
    db.query(`SELECT * FROM bids WHERE id = ${id}`, (err, result) =>
    {
        const file_name = result[0].file;
        res.download(`./uploads/${file_name}`)
        // console.log(`./uploads/${file_name}`)
        // if (err) {
        //     console.log(err)
        // } else {
        //     // console.log(result[0].file)
        //     const file_data = result[0].file
        //     res.setHeader('Content-Type', 'application/pdf')
        //     res.setHeader('Content-Disposition', `attachment; filename=${file_name}`);
        //     res.send(file_data)
        // }
    })
})

app.listen(5000, ()=>{
    console.log('Connected to Backend');
})