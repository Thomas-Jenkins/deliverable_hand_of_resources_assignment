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
  static async insert(constructionStuff) {
    const { rows } = await pool.query('INSERT INTO constructionStuff (construction_equipment, construction_role) VALUES ($1, $2) RETURNING *', [constructionStuff.construction_equipment, constructionStuff.construction_equipment]);
    return new ConstructionStuff(rows[0]);
  }
  static async updateById(id, newData) {
    const constructionStuff01 = await ConstructionStuff.getById(id);
    const updatedConstructionStuff01 = { ...constructionStuff01, ...newData };
    const { rows } = await pool.query('UPDATE constructionStuff SET construction_equipment = $2, construction_role = $3 WHERE id = $1 RETURNING *', [id, updatedConstructionStuff01.construction_equipment, updatedConstructionStuff01.construction_role]
    );
    return new ConstructionStuff(rows[0]);
  }

}

module.exports = ConstructionStuff;
