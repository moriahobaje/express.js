const {Router} = require('express'); 
const dp = require('../database')

const router = Router(); 

router.get('/',(req,res)=>{
    res.send(200); 
});

router.get('/post', (req,res)=>{
    res.json({location: 'PostTitle'});
});

router.get('/postTitle/:title', (req,res)=>{
    res.json({title: 'a title is displayed'}); 
});

module.exports = router; 