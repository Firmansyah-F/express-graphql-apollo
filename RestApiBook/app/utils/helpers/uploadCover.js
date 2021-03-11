const multer = require('multer');
const path = require("path");

const diskStorage = multer.diskStorage({
    destination : path.join("./public/upload"),
    filename : (req, file, cb) => {
        console.log(file)
        cb(null, `cover-${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`)
    },
});


const uploadCovers = multer({
    storage : diskStorage,
    fileFilter : function(req, file, cb) {
        if(path.extname(file.originalname) !== '.jpg'){
            return cb(new Error('hanya jpg'))
        }
        cb(null, true)
    }, limits: { fileSize: 100000 }
})

module.exports = { uploadCovers };
