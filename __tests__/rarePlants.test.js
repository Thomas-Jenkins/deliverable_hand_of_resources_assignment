const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('rarePlants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/rarePlants should return a list of rare plants and the full name of the person who discovered it', async () => {
    const res = await request(app).get('/rarePlants');
    expect(res.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
