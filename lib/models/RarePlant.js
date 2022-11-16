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
    console.log(rows);
    if (!rows[0]) return null;
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
    return new RarePlant(rows[0]);
  }

  static async updateById(id, newData) {
    const rarePlant01 = await RarePlant.getById(id);
    const updatedRarePlant01 = { ...rarePlant01, ...newData };
    const { rows } = await pool.query(
      `
      UPDATE rarePlants
      SET plant_common_name = $2, discovered_by = $3
      WHERE id = $1
      RETURNING *
      `,
      [
        id,
        updatedRarePlant01.plant_common_name,
        updatedRarePlant01.discovered_by,
      ]
    );
    return new RarePlant(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE from rarePlants
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );
    if (!rows[0]) return null;
    return new RarePlant(rows[0]);
  }

}

module.exports = RarePlant;
