const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('rarePlants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /groceryList should return a list of people and their grocery request', async () => {
    const res = await request(app).get('/groceryList');
    expect(res.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
