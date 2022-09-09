const express = require("express");
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send('Hello world!')
})

app.use((req,res,next)=>{
    const error = new Error('Not Found!');
    next(error);
})

app.use((error, req,res,next)=>{
    return res.status(error.status || 500).json({
        message: error.message
    })
})

app.listen(4000,()=>{
    console.log(`Server is running http://localhost:${4000}`)
})