const {Router}=require("express")
const rh = require("./requestHandler.js")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix  + '-' + file.fieldname)
    }
  })
  
  const upload = multer({ storage })
  const router=Router();
  router.route("/adduser").post(upload.single("file"),rh.addUser);