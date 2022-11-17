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
}
    
module.exports = GroceryList;
