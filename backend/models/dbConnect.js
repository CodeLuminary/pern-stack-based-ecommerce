const {Client} = require('pg');
const errorLogger = require('../data/errorLogger');

const filename = 'dbConnect.js'

class dbConnect{
    constructor(dbConnectionObject){
        this.client = new Client({
            host: dbConnectionObject.host,
            user: dbConnectionObject.user,
            port: dbConnectionObject.port,
            password: dbConnectionObject.password,
            database: dbConnectionObject.database
        });
    }

    connectToDb = ()=>{
        try{
            this.client.connect();

            return "Database connection successfully";
        }
        catch(e){
            errorLogger.constructDetailedError(filename, 'connectToDb', e);
            return {
                message: 'Error connecting to database',
                data: e.message
            }
        }
    }

    queryDb = async (sql)=>{
        return new Promise((resolve, reject)=>{
            this.client.query(sql,(err,res)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(res);
                }
            })
        })
    }

    getAllData = async (table)=>{
        return await this.client.query(`SELECT * FROM ${table}`);
    }

    closeConnection = async ()=>{
        this.client.end;
    }
}

module.exports = dbConnect;