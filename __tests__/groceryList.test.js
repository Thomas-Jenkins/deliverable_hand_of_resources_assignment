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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "first_name": "Annabel",
          "id": "1",
          "last_name": "Wands",
          "product": "Sage Ground Wiberg",
        },
        Object {
          "first_name": "Sigfried",
          "id": "2",
          "last_name": "Gammell",
          "product": "Veal - Insides Provini",
        },
        Object {
          "first_name": "Werner",
          "id": "3",
          "last_name": "Guilloux",
          "product": "Peas Snow",
        },
        Object {
          "first_name": "Nettle",
          "id": "4",
          "last_name": "Antley",
          "product": "Salmon Steak - Cohoe 6 Oz",
        },
        Object {
          "first_name": "Constantino",
          "id": "5",
          "last_name": "Jeanes",
          "product": "Pesto - Primerba Paste",
        },
        Object {
          "first_name": "Maribel",
          "id": "6",
          "last_name": "Jansky",
          "product": "Nut - Chestnuts Whole",
        },
        Object {
          "first_name": "Alisha",
          "id": "7",
          "last_name": "Leith-Harvey",
          "product": "Coffee - Ristretto Coffee Capsule",
        },
        Object {
          "first_name": "Johnathan",
          "id": "8",
          "last_name": "Endley",
          "product": "Rabbit - Saddles",
        },
        Object {
          "first_name": "Den",
          "id": "9",
          "last_name": "Croom",
          "product": "Sprouts - Pea",
        },
        Object {
          "first_name": "Gerrilee",
          "id": "10",
          "last_name": "Sugar",
          "product": "Muffin Orange Individual",
        },
        Object {
          "first_name": "Karee",
          "id": "11",
          "last_name": "Beardsall",
          "product": "Chocolate - Milk Callets",
        },
        Object {
          "first_name": "Nobie",
          "id": "12",
          "last_name": "Pawelski",
          "product": "Juice - Happy Planet",
        },
        Object {
          "first_name": "Whitman",
          "id": "13",
          "last_name": "Mebs",
          "product": "Cake Paprus",
        },
        Object {
          "first_name": "Janith",
          "id": "14",
          "last_name": "Sponer",
          "product": "Sardines",
        },
        Object {
          "first_name": "Avigdor",
          "id": "15",
          "last_name": "Anselmi",
          "product": "Tart - Pecan Butter Squares",
        },
        Object {
          "first_name": "Teodora",
          "id": "16",
          "last_name": "Forward",
          "product": "Juice - Lime",
        },
        Object {
          "first_name": "Phedra",
          "id": "17",
          "last_name": "Kilmurry",
          "product": "Sauce Bbq Smokey",
        },
        Object {
          "first_name": "Amery",
          "id": "18",
          "last_name": "Kaysor",
          "product": "Cookies - Assorted",
        },
        Object {
          "first_name": "Brita",
          "id": "19",
          "last_name": "Clay",
          "product": "Rice - Long Grain",
        },
        Object {
          "first_name": "Bethany",
          "id": "20",
          "last_name": "Albrooke",
          "product": "Wine - Vineland Estate Semi - Dry",
        },
      ]
    `);
  });

  it('GET /groceryList/1 should return a single row matching the id', async () => {
    const res = await request(app).get('/groceryList/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Annabel",
        "id": "1",
        "last_name": "Wands",
        "product": "Sage Ground Wiberg",
      }
    `);
  });

  it('POST /groceryList should create a new row in the groceryList database', async () => {
    const newGroceryList = {
      first_name: 'Thomas',
      last_name: 'Jenkins',
      product: 'Tacos',
    };
    const res = await request(app).post('/groceryList').send(newGroceryList);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Thomas",
        "id": "21",
        "last_name": "Jenkins",
        "product": "Tacos",
      }
    `);
  });

  it('PUT /groceryList/1 should update the row in the groceryList database', async () => {
    const res = await request(app).put('/groceryList/1').send({
      first_name: 'Tommy',
      last_name: 'Bahama',
      product: 'Crown Royal',
    });
    expect(res.status).toBe(200);
    expect(res.body.first_name).toEqual('Tommy');
    expect(res.body.last_name).toEqual('Bahama');
    expect(res.body.product).toEqual('Crown Royal');
  });

  it('DELETE /groceryList/1 should delete the first entry in the database', async () => {
    const res = await request(app).delete('/groceryList/1');
    expect(res.status).toBe(204);
    const getRes = await request(app).get('/groceryList/1');
    expect(getRes.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
