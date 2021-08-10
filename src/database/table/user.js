const database = require("../db")

const userTable = async () => {
    const connection = await database
    await connection.execute(
        `CREATE TABLE IF NOT EXISTS users(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(254) NOT NULL,
            lastname VARCHAR(254) NOT NULL,
            nickname VARCHAR(30) UNIQUE NOT NULL,
            address VARCHAR(600) NOT NULL,
            bio VARCHAR(100),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`
    )
}

userTable()