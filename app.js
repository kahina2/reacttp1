const express=require("express")
const path=require('path')

const app = express();
app.use('/css',express.static(path.join(__dirname,'srcss/fichier.css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/jss',express.static(path.join(__dirname,'node_modules/jquery/dist')))


app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname,'public/index.html'))
});

app.listen(5000,()=>{console.log('Listening on port'+5000)});