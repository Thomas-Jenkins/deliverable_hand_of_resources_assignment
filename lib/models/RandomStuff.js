const pool = require('../utils/pool');

class RandomStuff {
  constructor(row) {
    this.id = row.id;
    this.column_one = row.column_one;
    this.column_two = row.column_two;
    this.column_three = row.column_three;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM randomStuff');
    return rows.map((randomRow) => new RandomStuff(randomRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM randomStuff
        WHERE randomStuff.id = $1
        `, [id]
    );
    if (!rows[0]) return null;
    return new RandomStuff(rows[0]);
  }
  
  static async insert(randomStuff) {
    const { rows } = await pool.query(
      `
    INSERT INTO randomStuff (column_one, column_two, column_three)
    VALUES ($1, $2, $3)
    RETURNING * 
    `,
      [randomStuff.column_one, randomStuff.column_two, randomStuff.column_three]
    );
    return new RandomStuff(rows[0]);
  }

}



module.exports = RandomStuff;

