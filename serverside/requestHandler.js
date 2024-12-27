const userSchema=require("./multer.model.js")
async function addUser(req,res) {
    const file=req.file;
    const {username,email,phone}=req.body;
    const data=await userSchema.create({email,username,phone,file})

    res.status(200).send({data});
}

module.exports={
    addUser
}