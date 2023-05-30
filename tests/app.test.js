import request from 'supertest';
import app from '../src/server/index';

describe('Test root path', () => {
    process.env.NODE_ENV = 'test';
    test('It should response the GET method', async() => {
        const response = await request(app).get('/').send('./dist/index.html');
        expect(response.statusCode).toBe(200);
    });
});