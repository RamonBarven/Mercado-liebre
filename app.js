const express = require ('express');
const path = require('path');
const PORT = process.env.PORT || 3030;

const app=express();
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log('escuchando en ' + PORT);
});

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(htmlPath);
} )
