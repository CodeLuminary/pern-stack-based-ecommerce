const initializeDb = require('../models/initializeDb')

test('Test initialization of table', async () => {
    const data = await initializeDb.dbInitialization();
    expect(data).toBe('Table created successfully');
});