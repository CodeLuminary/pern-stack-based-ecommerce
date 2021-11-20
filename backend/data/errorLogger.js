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
    
    static constructDetailedError = async (filename, method, errorText) =>{
        const txt = `
*********************************************************************************************
ERROR DATE/TIME: ${data.getCurrentDateTime(data.getTimeZone())}; ${new Date().getTimezoneOffset()   }
FILE NAME: ${filename};
METHOD: ${method};
ERROR: ${errorText}
*********************************************************************************************
        `;
        return errorLogger.writeError(txt);
    }
    
}

module.exports = errorLogger;