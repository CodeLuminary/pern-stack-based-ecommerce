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

    static registerUser = (userObject)=>{
        try{
            const db = new dbConnect(data.getDbData());
            db.connectToDb();

            let sql = `SELECT * FROM users WHERE email='${userObject.email}';`
            const user = await db.queryDb(sql);

            if(user.length == 0){
                //Hash password
                req.body.password = await security.hashString(req.body.password); 
                req.body.userRole = "user";  
                                  
                const newUser = await db.insertData('users',req.body);

                const token = await userController.signToken({user:newUser}, data.getSecretKey, {expiresIn: '600'});
                res.send({
                    isSuccessful: true,
                    message: "User registration successful",
                    user: {
                        email: req.body.email,
                        name: req.body.fullName
                    },
                    token: token
                })
            }
            else{
                res.send({
                    isSuccessful:false,
                    message: 'Action Failed. Email Already Exist'
                });
            }
            db.closeDb();
        }
        catch(errorObject){
            errorLogger.constructDetailedError(filename, 'registerUser', errorObject);
            res.status(503).json({
                message: "server error"
            });
        }      
    }
}

module.exports = userController;