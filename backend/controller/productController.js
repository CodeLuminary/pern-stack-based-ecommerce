const dbConnect = require('../models/dbConnect');
const data = require('../data/data');
const multer = require('multer')

const filename = "productController.js";

class productController{
    static getUserDb = async ()=>{
        const db = new dbConnect(data.getDbData());
        await db.connectToDb();
        return db;
    }

    static addProduct = async (req,res)=>{
        let db = await this.getUserDb();

        try{
            /*const fileStorageEngine = multer.diskStorage({
                destination: (req,file,cb)=>{
                    cb(null,"./upload");
                },
                filename: (req,file,cb) =>{
                    const newFileName = new Date().getTime().toString() + "_" + file.originalname;
                    cb(null, newFileName);
                    req.body.image = newFileName;
                    //imgName.push(newFileName);
                },
            });*/

            let imgName = [];
            
            const fileStorageEngine = multer.diskStorage({
                destination: (req,file,cb)=>{
                    cb(null,"./upload");
                },
                filename: (req,file,cb) =>{
                    if(file.fieldname==='files'){
                        const newFileName = new Date().getTime().toString() + "_" + file.originalname;
                        cb(null, newFileName);
                        req.body.giftcardImg = newFileName;
                        imgName.push(newFileName);
                    }
                    else if(file.fieldname ==='file'){
                        const newFileName = new Date().getTime().toString() + "_" + file.originalname;
                        cb(null, newFileName);
                        req.body.image = newFileName;
                    }
                },
            });

            const upload = multer({storage: fileStorageEngine}).fields([
                {
                    name: 'file',maxCount:1
                },
                {
                    name:'files',maxCount:10
                }
            ]);
            // upload2()
            upload(req,res, async function(err){
                if(err){
                    res.send({
                        isSuccessful: false,
                        message: err
                    })
                }

                let prod = await db.insertData('products',{
                    title: req.body.title,
                    price: req.body.price,
                    previous_price: req.body.previous_price,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    image: req.body.image
                });
                let prodRes = await db.getAllData('products');

                for(let k = 0; k < imgName.length; k++){
                    let imgObj = {
                        product_id: prod.insertId,
                        image: imgName[k]
                    }
                    sql = `INSERT INTO products_images SET ?`;
                    await db.queryDb(sql,imgObj);
                    db.closeConnection();

                    res.send({
                        isSuccessful: true,
                        message: "Product added successfully",
                        data: prodRes
                    })
                }
            })    
        
                    
            /*const upload = multer({storage: fileStorageEngine}).single('file');
            const upload2 = multer({storage: fileStorageEngine}).array('files');
            upload(req,res, async function(err){
                if(err){
                    res.send({
                        isSuccessful: false,
                        message: err
                    })
                }
                
                let prod = await db.insertData('products',{
                    title: req.body.title,
                    price: req.body.price,
                    previous_price: req.body.previous_price,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    image: req.body.image
                });
                let prodRes = await db.getAllData('products');

                upload2(req,res,async function(err){
                    for(let k = 0; k < imgName.length; k++){
                        let imgObj = {
                            product_id: prod.insertId,
                            image: imgName[k]
                        }
                        sql = `INSERT INTO products_images SET ?`;
                        await db.queryDb(sql,imgObj);
                        db.closeConnection();

                        res.send({
                            isSuccessful: true,
                            message: "Product added successfully",
                            data: prodRes
                        })
                    }
                })
                //db.closeConnection();
                
            }) */
        }
        catch(e){
            res.send({
                isSuccessful: false,
                message: e
            })
        }
    }
    static getProducts = async (req,res)=>{
        let db = await this.getUserDb();
        let result = await db.getAllData('products');
        db.closeConnection();
        res.send({
            isSuccessful: true,
            data: result
        })
    }
    static deleteProduct = async(req,res)=>{
        let db = await this.getUserDb();
        let sql = `DELETE FROM product where id=${req.params.id}`;
        await db.queryDb(sql);
        let result = await db.getAllData('products');
        db.closeConnection();
        res.send({
            isSuccessful: true,
            message: "Product deleted successfully",
            data: result
        })
    }
    static sendMsg = async(req,res)=>{
        try{
            let db = await this.getUserDb();

            await db.insertData('contact',{
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            });

            res.send({
                isSuccessful: true,
                message: 'Message sent successfully'
            })
        }
        catch(e){
            res.send({
                isSuccessful:false,
                message: 'Action failed. Message could not be sent'
            })
        }
    }
    static getMsg = async(req,res)=>{
        let db = await this.getUserDb();
        let result = await db.getAllData('contact');
        db.closeConnection();
        res.send({
            isSuccessful: true,
            data: result
        })
    }
    static deleteContact = async(req,res)=>{
        let db = await productController.getUserDb();
        let sql = `DELETE FROM contact where id=${req.params.id}`;
        await db.queryDb(sql);
        let result = await db.getAllData('contact');
        db.closeConnection();
        res.send({
            isSuccessful: true,
            message: "Contact deleted successfully",
            data: result
        })
    }
}

module.exports = productController;