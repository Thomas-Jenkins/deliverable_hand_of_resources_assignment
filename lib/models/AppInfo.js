const pool = require('../utils/pool');

class AppInfo {
  constructor(row) {
    this.id = row.id;
    this.app_name = row.app_name;
    this.app_version = row.app_version;
    this.app_url = row.app_url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM appInfo');
    return rows.map((appRow) => new AppInfo(appRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM appInfo WHERE appInfo.id = $1', [id]);
    if (!rows[0]) return null;
    return new AppInfo(rows[0]);
  }
}

module.exports = AppInfo;
