const fs = require('fs');

const writeError = async (errorText) =>{
    fs.writeFile('errors.txt', errorText,(err)=>{
        if(err){
            return err;
        }
        return "Write successfully";
    })
} 

module.exports = writeError;