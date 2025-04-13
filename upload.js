const multer = require('multer')

// //for destination and the filename
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

//storage using memoryStorage to store the files in the buffer
const storage=multer.memoryStorage()

//instance of the multer for files uploading
const upload = multer({
    storage,
    limits: {
        files: 2,
        fileSize: 20 * 1024 * 1024,
        fields: 2,
        fieldNameSize: 100
    }
})

module.exports = upload