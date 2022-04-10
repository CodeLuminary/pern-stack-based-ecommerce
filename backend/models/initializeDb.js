const db = require('./dbConnect');
const data = require('../data/data')

class initializeDb{
    static dbInitialization = async ()=>{
        const dbConnect = new db(data.getDbData());
        dbConnect.connectToDb();

        let sql = `CREATE TABLE [IF NOT EXISTS] users (id SERIAL PRIMARY KEY, firstName VARCHAR, lastName VARCHAR,phoneNumber VARCHAR, email VARCHAR, password VARCHAR, isEmailConfirmed SMALLINT, gender VARCHAR, userRole VARCHAR, isActive SMALLINT, regtime timestamp, timeslog int, lastlog timestamp);`;
        await dbConnect.queryDb(sql);

        sql = `CREATE TABLE [IF NOT EXISTS] products (id SERIAL PRIMARY KEY, title VARCHAR, description TEXT, image VARCHAR, price VARCHAR, previous_price VARCHAR, quantity INT, buying_price VARCHAR, category VARCHAR, regtime timestamp);`;
        await dbConnect.queryDb(sql);

        sql = `CREATE TABLE [IF NOT EXISTS] products_images(id SERIAL PRIMARY KEY, image VARCHAR, product_id int, create_at datetime, FOREIGN KEY (product_id) REFERENCES products (id))`;
        await dbConnect.queryDb(sql);

        dbConnect.closeConnection()
        return "Table created successfully";
    }
    static alterDb = async () =>{

    }
}

module.exports = initializeDb;