const express = require('express')
const app = express()
const port = 1111
const upload = require('./upload.js')

//middlewares for json parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//setting the view engine for teh server side rendering
app.set("view engine", "ejs")

//home page route
app.get('/', (req, res) => {

    res.render('home')
})

//getting the file
app.post("/upload", upload.fields([
    { name: "img1", maxCount: 1 },
]), (req, res) => {

    console.log(req.files)
    return res.redirect('/')
},(err,req,res,next)=>{
    if(err){
        return res.send(err.code)
    }
})

//listening the server at port 1111
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})