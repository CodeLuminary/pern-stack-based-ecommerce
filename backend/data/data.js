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

    static getTimeZone = () =>{
        return process.env.TIME_ZONE;
    }

    //timezone should be in this format 1, -2
    static getCurrentDateTime = (timezone) =>{
        const date = new Date();
        var newDate = new Date(timezone*60 * 60000 + date.valueOf() + (date.getTimezoneOffset()*60000))
        return newDate;
    }
}

module.exports = data;