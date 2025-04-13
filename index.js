const express = require('express')
const app = express()
const port = 1111
const multer=require("multer")

// const upload=multer({dest:"uploads/"})
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload=multer({storage})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")

app.get('/', (req, res) => {

    res.render('home')
})

//getting the file
app.post("/upload",upload.array('profileImage',10),(req,res)=>{

    console.log(req.file)
    return res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})