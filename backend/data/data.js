const dotenv = require('dotenv');

dotenv.config();

class data{
    static getDbData = () =>{
        return {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_PASSWORD
        }
    }

    static getSecretKey = () =>{
        return process.env.SECRET_KEY
    }

    static getEmailData = () =>{
        return {
            //Return email data here
        }
    }
}

module.exports = data;