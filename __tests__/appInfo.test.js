const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('appInfo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
   
  it('GET /appInfo should return a list of all applications in the database', async () => {
    const res = await request(app).get('/appInfo');
    expect(res.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
