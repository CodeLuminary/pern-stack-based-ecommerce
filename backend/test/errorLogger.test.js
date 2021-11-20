const errorLogger = require('../data/errorLogger')

  test('Test error logging to file.', async () => {
    const data = await errorLogger('Testing error logging\nVery Good');
    expect(data).toBe('Write successful');
  });
