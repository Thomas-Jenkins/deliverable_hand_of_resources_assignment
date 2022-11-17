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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "app_name": "Bytecard",
          "app_url": "Nunc.xls",
          "app_version": "7.3.7",
          "id": "1",
        },
        Object {
          "app_name": "Yoloswarm",
          "app_url": "Justo.mov",
          "app_version": "0.7.7",
          "id": "2",
        },
        Object {
          "app_name": "Prodder",
          "app_url": "IpsumDolor.ppt",
          "app_version": "8.1.8",
          "id": "3",
        },
        Object {
          "app_name": "Transcof",
          "app_url": "UltricesPosuereCubilia.avi",
          "app_version": "0.4.4",
          "id": "4",
        },
        Object {
          "app_name": "It",
          "app_url": "NullamVariusNulla.xls",
          "app_version": "9.1.2",
          "id": "5",
        },
        Object {
          "app_name": "Tampflex",
          "app_url": "Convallis.pdf",
          "app_version": "0.83",
          "id": "6",
        },
        Object {
          "app_name": "Quo Lux",
          "app_url": "HacHabitassePlatea.mp3",
          "app_version": "0.4.4",
          "id": "7",
        },
        Object {
          "app_name": "Cookley",
          "app_url": "Eget.mov",
          "app_version": "3.1.0",
          "id": "8",
        },
        Object {
          "app_name": "Lotlux",
          "app_url": "MiIntegerAc.png",
          "app_version": "1.6.9",
          "id": "9",
        },
        Object {
          "app_name": "Zontrax",
          "app_url": "PellentesqueAt.ppt",
          "app_version": "8.91",
          "id": "10",
        },
        Object {
          "app_name": "Bitchip",
          "app_url": "Ultrices.ppt",
          "app_version": "0.95",
          "id": "11",
        },
        Object {
          "app_name": "Transcof",
          "app_url": "SuspendissePotentiNullam.avi",
          "app_version": "9.4.9",
          "id": "12",
        },
        Object {
          "app_name": "Keylex",
          "app_url": "Eget.xls",
          "app_version": "7.7",
          "id": "13",
        },
        Object {
          "app_name": "Andalax",
          "app_url": "NibhLigulaNec.ppt",
          "app_version": "0.76",
          "id": "14",
        },
        Object {
          "app_name": "Zathin",
          "app_url": "MolestieHendrerit.avi",
          "app_version": "0.4.7",
          "id": "15",
        },
        Object {
          "app_name": "Stim",
          "app_url": "Semper.ppt",
          "app_version": "1.24",
          "id": "16",
        },
        Object {
          "app_name": "Tres-Zap",
          "app_url": "LigulaSuspendisse.gif",
          "app_version": "3.4",
          "id": "17",
        },
        Object {
          "app_name": "Daltfresh",
          "app_url": "NislNunc.mp3",
          "app_version": "2.32",
          "id": "18",
        },
        Object {
          "app_name": "Vagram",
          "app_url": "ImperdietSapienUrna.xls",
          "app_version": "0.21",
          "id": "19",
        },
        Object {
          "app_name": "Holdlmabere",
          "app_url": "ConvallisNuncProin.mpeg",
          "app_version": "0.21",
          "id": "20",
        },
      ]
    `);
  });

  it('GET /appInfo/1 should return a single row from the database matching id 1', async () => {
    const res = await request(app).get('/appInfo/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "app_name": "Bytecard",
        "app_url": "Nunc.xls",
        "app_version": "7.3.7",
        "id": "1",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
