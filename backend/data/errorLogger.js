const fs = require('fs');

const writeError = async (errorText) =>{
    return new Promise((resolve,reject)=>{
        fs.appendFile('./backend/data/errors.txt', errorText,(err)=>{
        if(err){
            reject(err)
        }
        resolve("Write successful");
    })
})
} 



module.exports = writeError;