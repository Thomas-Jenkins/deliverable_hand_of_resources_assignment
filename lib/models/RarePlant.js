const pool = require('../utils/pool');

class RarePlant {
  constructor(row) {
    this.id = row.id;
    this.plant_common_name = row.plant_common_name;
    this.discovered_by = row.discovered_by;
  }
  
  static async getAll() {
    const { rows } = await pool.query('SELECT * from rarePlants');
    return rows.map((plantRow) => new RarePlant(plantRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM rarePlants
    WHERE rarePlants.id = $1
    `, [id]);
    return new RarePlant(rows[0]);
  }

}

module.exports = RarePlant;
