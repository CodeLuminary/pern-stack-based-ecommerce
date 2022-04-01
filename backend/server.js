const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.static(__dirname));
//app.use(cors());

app.use(cors(
    {origin: '*'}
 ));


if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
}