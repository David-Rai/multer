const multer =require('multer')

//for destination and the filename
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

//instance of the multer for files uploading
const upload=multer({storage})

module.exports=upload