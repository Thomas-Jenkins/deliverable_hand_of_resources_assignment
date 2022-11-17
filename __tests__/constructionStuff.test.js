const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('constructionStuff routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /constructionStuff should return a list of construction stuff and the construction role associated with it', async () => {
    const res = await request(app).get('/constructionStuff');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "construction_equipment": "Grader",
          "construction_role": "Engineer",
          "id": "1",
        },
        Object {
          "construction_equipment": "Scraper",
          "construction_role": "Electrician",
          "id": "2",
        },
        Object {
          "construction_equipment": "Crawler",
          "construction_role": "Estimator",
          "id": "3",
        },
        Object {
          "construction_equipment": "Compactor",
          "construction_role": "Subcontractor",
          "id": "4",
        },
        Object {
          "construction_equipment": "Compactor",
          "construction_role": "Engineer",
          "id": "5",
        },
        Object {
          "construction_equipment": "Bulldozer",
          "construction_role": "Subcontractor",
          "id": "6",
        },
        Object {
          "construction_equipment": "Dragline",
          "construction_role": "Project Manager",
          "id": "7",
        },
        Object {
          "construction_equipment": "Dragline",
          "construction_role": "Subcontractor",
          "id": "8",
        },
        Object {
          "construction_equipment": "Trencher",
          "construction_role": "Supervisor",
          "id": "9",
        },
        Object {
          "construction_equipment": "Bulldozer",
          "construction_role": "Construction Foreman",
          "id": "10",
        },
        Object {
          "construction_equipment": "Dragline",
          "construction_role": "Construction Foreman",
          "id": "11",
        },
        Object {
          "construction_equipment": "Backhoe",
          "construction_role": "Construction Worker",
          "id": "12",
        },
        Object {
          "construction_equipment": "Backhoe",
          "construction_role": "Supervisor",
          "id": "13",
        },
        Object {
          "construction_equipment": "Dump Truck",
          "construction_role": "Project Manager",
          "id": "14",
        },
        Object {
          "construction_equipment": "Crawler",
          "construction_role": "Surveyor",
          "id": "15",
        },
        Object {
          "construction_equipment": "Bulldozer",
          "construction_role": "Construction Manager",
          "id": "16",
        },
        Object {
          "construction_equipment": "Dragline",
          "construction_role": "Construction Worker",
          "id": "17",
        },
        Object {
          "construction_equipment": "Crawler",
          "construction_role": "Surveyor",
          "id": "18",
        },
        Object {
          "construction_equipment": "Excavator",
          "construction_role": "Construction Expeditor",
          "id": "19",
        },
        Object {
          "construction_equipment": "Compactor",
          "construction_role": "Electrician",
          "id": "20",
        },
      ]
    `);
  });

  it('GET /constructionStuff/1 should return a single item from the constructionStuff db with the id of 1', async () => {
    const res = await request(app).get('/constructionStuff/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "construction_equipment": "Grader",
        "construction_role": "Engineer",
        "id": "1",
      }
    `);
  });

  it('POST /constructionStuff should insert a single row to the constructionStuff db', async () => {
    const newConstructionStuff = {
      construction_equipment: 'Shovel',
      construction_role: 'Laborer',
    };
    const res = await request(app)
      .post('/constructionStuff')
      .send(newConstructionStuff);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "construction_equipment": "Shovel",
        "construction_role": "Shovel",
        "id": "21",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
