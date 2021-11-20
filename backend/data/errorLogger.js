const fs = require('fs');
const data = require('./data')

class errorLogger{
    static writeError = async (errorText) =>{
        return new Promise((resolve,reject)=>{
            fs.appendFile('./backend/data/errors.txt', errorText,(err)=>{
                if(err){
                    reject(err)
                }
                resolve("Write successful");
            })
        })
    } 
    
    static constructDetailedError = async (filename, method, errorObject) =>{
        const txt = `
*********************************************************************************************
ERROR DATE/TIME: ${data.getCurrentDateTime(data.getTimeZone())}; 
TIME OFFSET: GMT ${(new Date().getTimezoneOffset())/60}
FILE NAME: ${filename};
METHOD: ${method};
ERROR MESSAGE: ${errorObject.message}
ERROR TARGET: ${errorObject.target}
*********************************************************************************************
        `;
        return errorLogger.writeError(txt);
    }
    
}

module.exports = errorLogger;