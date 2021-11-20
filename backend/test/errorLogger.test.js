const errorLogger = require('../data/errorLogger')
/*
test('Test error logging to file.', async () => {
    const data = await errorLogger.writeError('Testing error logging\nVery Good');
    expect(data).toBe('Write successful');
});*/

test('Test detailed error logging to file.', async () => {
    const data = await errorLogger.constructDetailedError('errLogger.test.js','test',{
        message:'Testing error logging\nVery Good',
        target: 'Line 100'
    });
    expect(data).toBe('Write successful');
});

