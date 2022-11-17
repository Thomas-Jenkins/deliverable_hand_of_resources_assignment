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
}

module.exports = AppInfo;
