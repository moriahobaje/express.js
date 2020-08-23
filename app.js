const express = require('express');
const session = require('express-session');


const usersRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts')

const store = new session.MemoryStore(); 
const app = express();


app.use(session({
    secret: 'my secret',
    cookie: {maxAge: 30000},
    saveUninitialized: false, 
    resave: true, 
    store, 
}));

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
 

app.use((req,res,next)=>{
    console.log(`${req.method} - ${req.url}`);
    next(); 
})


app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);

app.listen(4201, ()=>{
    console.log('Server is running on port 4201')
});
