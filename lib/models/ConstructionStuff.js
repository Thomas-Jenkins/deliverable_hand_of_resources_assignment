const pool = require('../utils/pool');

class ConstructionStuff {
  constructor(row) {
    this.id = row.id;
    this.construction_equipment = row.construction_equipment;
    this.construction_role = row.construction_role;
  }
  
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM constructionStuff');
    return rows.map((constructionRow) => new ConstructionStuff(constructionRow));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM constructionStuff WHERE constructionStuff.id = $1', [id]);
    if(!rows[0]) return null;
    return new ConstructionStuff(rows[0]);
  }

}

module.exports = ConstructionStuff;
