const {Client} = require('pg');

class dbConnect{
    constructor(dbConnectionObject){
        this.client = Client = new Client({
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

            return "Database created successfully";
        }
        catch(e){
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

    getAllData = (table)=>{
        return await this.client.query(`SELECT * FROM ${table}`);
    }

    closeConnection = async ()=>{
        this.client.end;
    }
}

module.exports = dbConnect;