const dbConnect = require('../models/dbConnect');
const data = require('../data/data');
const errorLogger = require('../data/errorLogger')
const filename = "userController.js"

class userController{

    static signToken = async (obj, secretKey, parameters) =>{
        return new Promise((resolve, reject)=>{
            jwt.sign(obj, secretKey, parameters, (err,token)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(token);
                }
            });
        });       
    }

    static getUserDb = ()=>{
        const db = new dbConnect(data.getDbData());
        db.connectToDb();
        return db;
    }

    static registerUser = async (userObject,db=userController.getUserDb())=>{
        return new Promise((resolve,reject)=>{
            try{                   
                let sql = `SELECT * FROM users WHERE email='${userObject.email}';`
                const user = await db.queryDb(sql);
    
                if(user.length == 0){
                    //Hash password
                    req.body.password = await security.hashString(userObject.password); 
                    req.body.userRole = "user";  
                                      
                    const newUser = await db.insertData('users',userObject);
    
                    const token = await userController.signToken({user:newUser}, data.getSecretKey, {expiresIn: '600'});
                    resolve({
                        isSuccessful: true,
                        message: "User registration successful",
                        user: {
                            email: userObject.email,
                            name: userObject.fullName
                        },
                        token: token
                    });
                }
                else{
                    resolve({
                        isSuccessful:false,
                        message: 'Action Failed. Email Already Exist'
                    });
                }
                db.closeDb();
            }
            catch(errorObject){
                errorLogger.constructDetailedError(filename, 'registerUser', errorObject);
                reject({
                    message: "server error"
                });
            }
        })   
              
    }

    
}

module.exports = userController;