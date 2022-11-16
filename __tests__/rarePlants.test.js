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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "discovered_by": "Adam Clemmensen",
          "id": "1",
          "plant_common_name": "Fleshy Lupine",
        },
        Object {
          "discovered_by": "Thibaud Hutcheson",
          "id": "2",
          "plant_common_name": "Browntop",
        },
        Object {
          "discovered_by": "Ulrika Whipp",
          "id": "3",
          "plant_common_name": "Grays Cinquefoil",
        },
        Object {
          "discovered_by": "Ladonna Blandamore",
          "id": "4",
          "plant_common_name": "Tibig",
        },
        Object {
          "discovered_by": "Ailis Shepherdson",
          "id": "5",
          "plant_common_name": "Atlantic Camas",
        },
        Object {
          "discovered_by": "Idette Doret",
          "id": "6",
          "plant_common_name": "Fivebract Chinchweed",
        },
        Object {
          "discovered_by": "Christos Chittenden",
          "id": "7",
          "plant_common_name": "Colorado Wildrye",
        },
        Object {
          "discovered_by": "Nerta Bignell",
          "id": "8",
          "plant_common_name": "Florida Toadwood",
        },
        Object {
          "discovered_by": "Dory OMullaney",
          "id": "9",
          "plant_common_name": "Balbis Maiden Fern",
        },
        Object {
          "discovered_by": "Clotilda Pountney",
          "id": "10",
          "plant_common_name": "Kidney Lichen",
        },
        Object {
          "discovered_by": " Quintana O Dowd",
          "id": "11",
          "plant_common_name": "Hydrastis",
        },
        Object {
          "discovered_by": "Forrester McCroft",
          "id": "12",
          "plant_common_name": "Stiffbranch Birds Beak",
        },
        Object {
          "discovered_by": "Alfons Town",
          "id": "13",
          "plant_common_name": "Bolanders Quillwort",
        },
        Object {
          "discovered_by": "Marylin Seddon",
          "id": "14",
          "plant_common_name": "Wickes Loeskypnum Moss",
        },
        Object {
          "discovered_by": "Galvan Langtry",
          "id": "15",
          "plant_common_name": "Jamaican Crabgrass",
        },
        Object {
          "discovered_by": "Bryn Adamec",
          "id": "16",
          "plant_common_name": "Acaulon Moss",
        },
        Object {
          "discovered_by": "Krystalle Landrieu",
          "id": "17",
          "plant_common_name": "Zahlbrucknerella Lichen",
        },
        Object {
          "discovered_by": "Ingaberg Divill",
          "id": "18",
          "plant_common_name": "Porters Melicgrass",
        },
        Object {
          "discovered_by": "Jeana Romanski",
          "id": "19",
          "plant_common_name": "Pumpellys Brome",
        },
        Object {
          "discovered_by": "Cecil McQuilliam",
          "id": "20",
          "plant_common_name": "Melanelia Lichen",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
