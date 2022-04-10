const express = require('express');
const cors = require('cors')
const data = require('./data/data')

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const accountController = require('./controller/userController');
const productController = require('./controller/productController')
//app.use(cors());

app.use(cors(
    {origin: '*'}
 ));


app.post('/login/submit', (req,res)=>{
    accountController.loginUser(req.body)
    .then(result=>res.send(result))
})

app.post('/register/submit', (req,res)=>{
    accountController.registerUser(req.body)
    .then(result=>res.send(result))
})

app.post('/add-product', (req,res)=>{
    productController.addProduct(req,res);
})

app.get('/delete-product/:id', (req,res)=>{
    productController.deleteProduct(req,res);
})
app.get('/products', (req,res)=>{
    productController.getProducts(req,res);
})

app.get('/login',(req,res)=>{
    res.redirect(data.getFrontendUrl);
})

app.get('/register',(req,res)=>{
    res.redirect(data.getFrontendUrl);
})

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
}