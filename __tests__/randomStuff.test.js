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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "column_one": "Russia",
          "column_three": "Daily",
          "column_two": "Leninskiy",
          "id": "1",
        },
        Object {
          "column_one": "Philippines",
          "column_three": "Yearly",
          "column_two": "Villanueva",
          "id": "2",
        },
        Object {
          "column_one": "Russia",
          "column_three": "Yearly",
          "column_two": "Severomorsk",
          "id": "3",
        },
        Object {
          "column_one": "Guatemala",
          "column_three": "Once",
          "column_two": "Lívingston",
          "id": "4",
        },
        Object {
          "column_one": "Azerbaijan",
          "column_three": "Daily",
          "column_two": "Sheki",
          "id": "5",
        },
        Object {
          "column_one": "Philippines",
          "column_three": "Monthly",
          "column_two": "Sapol",
          "id": "6",
        },
        Object {
          "column_one": "Uganda",
          "column_three": "Weekly",
          "column_two": "Yumbe",
          "id": "7",
        },
        Object {
          "column_one": "Vietnam",
          "column_three": "Seldom",
          "column_two": "Trới",
          "id": "8",
        },
        Object {
          "column_one": "Poland",
          "column_three": "Never",
          "column_two": "Doruchów",
          "id": "9",
        },
        Object {
          "column_one": "Japan",
          "column_three": "Often",
          "column_two": "Ryūgasaki",
          "id": "10",
        },
        Object {
          "column_one": "Poland",
          "column_three": "Seldom",
          "column_two": "Subkowy",
          "id": "11",
        },
      ]
    `);
  });

  it('GET /randomStuff/1 should return a single line from the database matching the id', async () => {
    const res = await request(app).get('/randomStuff/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "column_one": "Russia",
        "column_three": "Daily",
        "column_two": "Leninskiy",
        "id": "1",
      }
    `);
  });

  it('POST /randomStuff should post a single row to the randomStuff table', async () => {
    const newRandomThing = {
      column_one: 'Mozambique',
      column_two: 'Timbuktu',
      column_three: 'Maybe Once',
    };
    const res = await request(app).post('/randomStuff').send(newRandomThing);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "column_one": "Mozambique",
        "column_three": "Maybe Once",
        "column_two": "Timbuktu",
        "id": "12",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
