const pool = require('../utils/pool');

class GroceryList {
  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.product = row.product;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM groceryList');
    return rows.map((groceryRow) => new GroceryList(groceryRow));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM groceryList WHERE id = $1', [id]);
    if (!rows[0]) return null;
    return new GroceryList(rows[0]);
  }
  static async insert(groceryList) {
    const { rows } = await pool.query(
      `
        INSERT INTO groceryList (first_name, last_name, product)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [groceryList.first_name, groceryList.last_name, groceryList.product]
    );
    return new GroceryList(rows[0]);
  }
}
    
module.exports = GroceryList;
