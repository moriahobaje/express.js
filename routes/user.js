const {Router} = require('express'); 
const db = require('../database');
const {check, validationResult} = require('express-validator');  

const router = Router(); 

router.use((req,res, next) =>{
    console.log('Request Made to user_demo'); 
    next(); 
})

router.get('/', async (req,res)=>{
    const results =  await db.promise().query(`SELECT * FROM users`); 
    console.log(results[0]); 
    res.send(200); 
});

router.get('/post', (req,res)=>{
    res.json({location: 'Posts'});
});

router.get('/postTitle/:title', (req,res)=>{
    res.json({title: 'a title is displayed'}); 
});


router.post('/', [check('username').notEmpty(),
check('password').notEmpty() ],
(req,res) => {

    const errors = validationResult(req);
    console.log('errors');
    if (!errors.isEmpty()){

    } 
    const { username, password } = req.body; 
    if(username && password) {
        console.log(username, password);
        try{
            db.promise().query(`INSERT INTO users VALUES('${username}','${password}')`); 
            res.status(201).send({msg: 'User Created!'});
            console.log('success');
        }
       
    catch(err){
        console.log('Error!'); 
    }
    }
    else{
        res.status(403).send('error!'); 
    }
})
module.exports = router; 