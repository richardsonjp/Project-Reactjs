var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors')

var bodyParser = require('body-parser')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sakuragi',
    database: 'kikipipi_user'
})

var session = require('express-session');
var sess = {
    secret: 'workhard',
    cookie: {}
}
app.use(session(sess))

// var morgan = require('morgan');
// app.use(morgan('combined'))


db.connect()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extender : false}));

//------------------------------------------------------------- LOGIN -------------------------------------------------------------//

app.post('/loginpage', function(req,res){
      db.query("select * from datauser where ? and ?",
    [
        {
            username: req.body.username,
        },
        {
            password: req.body.password,
        }
    ],
        (err, result)=>{
        if(err) throw err;

        let loginstatus
        let username
        let IDuser
        let namaUser
        let telpon

        if (result.length > 0){
            username = req.body.username
            loginstatus = true;
            // IDuser = result[0].id
            // nameUser = result[0].nama
            // telpon = result[0].telp
        }
        else{
            loginstatus = false;
            username = null
            IDuser = null
            nameUser = null
            telpon = null
        }
        res.send({loginstatus,result})
        console.log(IDuser,namaUser,telpon,result)
    })
})

//------------------------------------------------------------- REGISTER -------------------------------------------------------------//


app.post('/register', function(req,res){
    db.query("select username from datauser where ?",
    {
        username: req.body.username,
    },
    (err,result)=>{
        if (err) throw err;

        let statusregister

        if(result.length === 1){

            statusregister = false
        }
        else{
            db.query("insert datauser set ?",
            {
                id: null,
                nama_panjang: req.body.name,
                username: req.body.username,
                password: req.body.password,
                telp: req.body.telp
            }
        )
            statusregister = true
        }

        res.send({statusregister})
        console.log(statusregister,result)
  })
})


//------------------------------------------------------------- PRODUCT -------------------------------------------------------------//

app.get('/product/:id',(req,res)=>{
    db.query("select * from product where ?",
    {
        id: req.params.id
    },
    (err,result)=>{
        if (err) throw err;
        
        res.json({result})
        console.log(result)
    })
})


app.listen(3210,()=>{
    console.log('Connect to @3210')
})
