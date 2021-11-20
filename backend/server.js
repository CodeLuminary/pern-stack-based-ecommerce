const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());
const errorLogger = require('./data/errorLogger')
errorLogger.constructDetailedError('errLogger.test.js','test','Testing error logging\nVery Good');

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
}