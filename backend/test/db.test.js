const db = require('../models/dbConnect')

test('Connect to db', ()=>{
    const dbcon = new db({
        host: 'localhost',
        user: 'postgres',
        port: '5432',
        database: 'ecommerce',
        password: 'Richesbrainz1'
    })
    expect(dbcon.connectToDb()).toBe('Database connection successfully');
})