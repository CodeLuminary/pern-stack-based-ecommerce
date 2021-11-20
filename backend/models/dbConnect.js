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

        this.client.connect();
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

    closeConnection = async ()=>{
        this.client.end;
    }
}
