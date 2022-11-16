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

  static async insert(rarePlant) {
    const { rows } = await pool.query(
      `
      INSERT INTO rarePlants (plant_common_name, discovered_by)
      VALUES ($1, $2)
      RETURNING *
      `,
      [rarePlant.plant_common_name, rarePlant.discovered_by]
    );
    console.log(rows);
    return new RarePlant(rows[0]);
  }

}

module.exports = RarePlant;
