const express = require('express')
const router = express.Router()
const userTable = require("../database/table/user")
const userController = require("../controller/user")


router.post("/user", userController.create)
router.get("/user/:id", userController.show)
router.get("/user", userController.filter)
router.put("/user/:id", userController.update)
router.put("/user/nickName/:id", userController.updateNickName)
router.delete("/user/:id", userController.destroy)

module.exports = router