const { CreateUser, GetUserProfile, Login, UpdateProfile, UpdatePassword } = require("../controllers/userController")

const router = require("express").Router()

router.post("/",CreateUser)
router.get("/",GetUserProfile)
router.post('/login',Login)
router.patch('',UpdateProfile)
router.patch('/password',UpdatePassword)
module.exports=router
