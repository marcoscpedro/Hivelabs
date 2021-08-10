const database = require("../database/db")


class User {
    static async create(obj) {
        const connection = await database
        const sql = `INSERT INTO users(name,lastname,nickname,address,bio) VALUES(?,?,?,?,?)`
        const values = [obj.name, obj.lastname, obj.nickname, obj.address, obj.bio]
        try {
            const user = await connection.execute(sql,values)
            return {
                id:user[0].insertId,
                name:obj.name,
                lastname:obj.lastname,
                nickname:obj.nickname,
                address:obj.address,
                bio:obj.bio
            }
        } catch (err) {
            return {
                error:true,
                message:err
            }
        }
    }

    static async show(id){
        const connection = await database
        const sql = `SELECT * FROM users WHERE id=?`
        const user = await connection.execute(sql,[id])    
        if (user[0][0]) {
            return user[0][0]
        }
        return null             
    }
    static async update(obj,id){
        const connection = await database
        const sql = `UPDATE users SET lastname=?, address=? WHERE id=?`
        const values = [obj.lastname, obj.address, id]
        try {
            const updatedUser = await connection.execute(sql,values)
            const user = await this.show(id)
            return user    
        } catch (err) {
            return {
                error:true,
                message:err
            }
        }
    }

    static async destroy(id){
        const connection = await database
        const sql = `DELETE FROM users WHERE id=?`
        try {
            const deletedUser = await connection.execute(sql,[id])  
            if (deletedUser[0].affectedRows !== 0){
                return true
            }
            return false
        } catch (err) {
            return {
                error:true,
                message:err
            }
        }
    }

    static async updateNickName(obj, id) {
        const connection = await database
        const sql = `UPDATE users SET nickname=? WHERE id=?`
        const values = [obj.nickname,  id]
        try {
            const updatedUser = await connection.execute(sql,values)
            const user = await this.show(id)
            return user    
        } catch (err) {
            return {
                error:true,
                message:err
            }
        }
    }

    static async filter(obj){
        const { name, lastname} = obj
        const connection = await database
        const sql = `SELECT * from users WHERE ${this.makeSql(name, lastname)}`
            console.log(sql)
        try {
            const users = await connection.execute(sql)
            return users[0]    
        } catch (err) {
            return{
                error:true,
                message:err
            }
        }        
    }

    static makeSql(name, lastname){
        var endSql
        if (name !== undefined && lastname !== undefined){
            return endSql = `name="${name}" AND lastname="${lastname}"`
        } else if (name !== undefined) {
            return endSql = `name="${name}"`
        } else{
            return endSql = `lastname="${lastname}"`
        }
    }    
    
}

module.exports = User