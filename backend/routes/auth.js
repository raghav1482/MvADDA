const router = require("express").Router();

const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register",async(req,res)=>{
try{
    const {email , password} = req.body;
    const user = await User.findOne({email:email});
    if(user){
        res.status(200).json({message:"User Already Exist"});
        console.log("User Already Exist");
    }
    else{
        const user = new User({email , password});
        await user.save().then(()=>{res.status(200).json({message:"Signup Successful"})});
    }
}
catch(e){
    console.log(e);
}
});

router.post("/login",async(req,res)=>{
    try{
    const {email , password} = req.body;
    const user  = await User.findOne({email:email});
    if(user){
        if(await bcrypt.compare(password , user.password)){
            res.status(200).json({message:"Login Successful",id:user.id  });
        }
        else{
            res.status(200).json({message:"Wrong Credentials"});
        }
    }
    else{
        res.status(200).json({message:"Please SignUp First"});
    }
}catch(e){
    console.log(e);
}}
)

router.post("/addfav",async(req,res)=>{
    try{
        const {id,favourite} = req.body;
        const existusr = await User.findById(id) ;
        let ob = existusr.favorites.find(o=>o.title===favourite.title);
        if(existusr){
            if(!ob){
            existusr.favorites.push(favourite);
            await existusr.save();
            res.status(200).json({message:"Added "+'"'+favourite.title+'"'+" to favourites"});
            }
            else{
                res.status(200).json({message:"Already added to favourites"});
            }
        }
    }catch(e){
        console.log(e);
    }
})
router.get("/getfavs/:id" , async (req , res)=>{
    try{
    const existusr = await User.findById(req.params.id) ;
    res.status(200).json(existusr);
    }
    catch(e){
        console.log(e);
    }

})
router.delete("/delfav/:id" , async (req , res)=>{
    try{
        const title = req.query.title;
        const existusr = await User.findById(req.params.id) ;
    if(existusr){
        const index = existusr.favorites.findIndex(obj => obj.title === title);
        if (index >-1) {
            // Use splice to remove the object at the found index
            existusr.favorites.splice(index, 1);
            console.log(`Object with  deleted.`);
            await existusr.save();
            res.status(200).json({message:"Removed "+title});
        } else {
            res.status(200).json({message:"Not in Favourites"});
        }
    }
    else{
        alert("Please Login first");
    }
    }
    catch(e){
        console.log(e);
    }

})

module.exports = router;