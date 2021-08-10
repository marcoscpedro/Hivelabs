const User = require("../model/user")

const create = async (req, res) => {
    const user = await User.create(req.body)
    if (user.error) {
        return res.status(203).send(user)
    } 
    return res.send(user)
}

const show = async (req, res) => {
    const user = await User.show(req.params.id)
    if (user === null) {
        return res.sendStatus(400)   
    }
    return res.send(user)
}

const update = async (req, res) => {
    const user = await User.update(req.body, req.params.id)
    if (user == null) {
        return res.sendStatus(400)   
    }
    return res.send(user)
}

const destroy = async (req, res) => {
    const user = await User.destroy(req.params.id)
    if (user === false) {
        return res.sendStatus(400)
    }
    return res.sendStatus(200)
}

const updateNickName = async (req, res) => {
    const user = await User.updateNickName(req.body, req.params.id)
    if (user == null) {
        return res.sendStatus(400)   
    }
    return res.send(user)
}
const filter = async (req, res) => {
    const users = await User.filter(req.query)
    if (users.error){
        return res.status(400).send(users)
    }
    return res.send(users)
}




module.exports = {
    create,
    show,
    update,
    destroy,
    updateNickName,
    filter
}