const crypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')

class security{
    symbols = [';','=','"',"'",'<','>','.']
    static hashString = async (str) =>{
        return new Promise((resolve,reject)=>{
            crypt.hash(str,10, (err,hash)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    resolve(hash)
                }
            });
        }) 
    }
    static compareHash = async (str,hash) =>{
        return new Promise((resolve, reject)=>{
            crypt.compare(str, hash, (err,result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result)
                }
            });
        });
    }
    static scanText(str){
        for(let i = 0; i < str.length; i++){
            for(let k = 0; k < this.symbols.length; k++){
                if(str[i] === symbols[k]){
                    return str.split(symbols[k])[0];
                }
            }
        }
        return str;
    }
    static limitRequest(app,dur,maxNumber){
        const limiter = rateLimit({
            windowMs: dur*60*1000,
            max: maxNumber
        });
        app.use(helmet());
        app.use(limiter)
    }
}

module.exports = security;