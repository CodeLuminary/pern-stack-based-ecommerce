const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());




if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
}