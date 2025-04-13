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
app.post("/upload", upload.single('profileImage'), (req, res) => {

    console.log(req.file.path)
    return res.redirect('/')
})

//listening the server at port 1111
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})