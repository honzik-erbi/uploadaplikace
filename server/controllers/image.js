const path = require("path");
const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img"))
    },
    filename: (req, file, cb) => {
        cb(null, )
    }
})