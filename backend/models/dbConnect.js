const {Client} = require('pg');
const errorLogger = require('../data/errorLogger');

const filename = 'dbConnect.js'

class dbConnect{
    constructor(dbConnectionObject){
        this.db = new Client({
            host: dbConnectionObject.host,
            user: dbConnectionObject.user,
            port: dbConnectionObject.port,
            password: dbConnectionObject.password,
            database: dbConnectionObject.database
        });
    }

    connectToDb = ()=>{
        try{
            this.db.connect();

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

    queryDb = async (sql,value=null)=>{
        if(value==null){
            return new Promise((resolve, reject)=>{
                this.db.query(sql,(err,res)=>{
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(res);
                    }
                })
            })
        }
        else{
            return new Promise((resolve, reject)=>{
                this.db.query(sql,value,(err,res)=>{
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(res);
                    }
                })
            })
        }
    }

    getAllData = async (table)=>{
        return await this.queryDb(`SELECT * FROM ${table}`);
    }

    insertData = (table, data)=>{
        let sql = "INSERT INTO " + table + " (";
        let sqlvalues = "";
        let sqlvaluesArray = [];
        let cnt = 1;
        for(tableColumn in data){
            sql += tableColumn.toString() + ", ";           
            //sqlvalues += typeof data[tableColumn] === 'string' ? "'" + data[tableColumn] + "', " : data[tableColumn];
            sqlvalues += "$" + cnt.toString() + ", ";
            sqlvaluesArray.push(data[tableColumn]);

            cnt++;
        }
        sql = sql.slice(0, -2) + ") VALUES (" + sqlvalues.slice(0,-2) + ") RETURNING *";
        return this.queryDb(sql, sqlvaluesArray);
    }

    closeConnection = async ()=>{
        this.db.end;
    }
}

module.exports = dbConnect;