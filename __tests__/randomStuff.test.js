const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('rarePlants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /randomStuff will return a list of items in the database', async () => {
    const res = await request(app).get('/randomStuff');
    expect(res.status).toBe(200);
  });

  it('GET /randomStuff/1 should return a single line from the database matching the id', async () => {
    const res = await request(app).get('/randomStuff/1');
    expect(res.status).toBe(200);
  });


  afterAll(() => {
    pool.end();
  });
});
