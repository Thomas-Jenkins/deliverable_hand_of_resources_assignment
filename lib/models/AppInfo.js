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

  static async insert(appInfo) {
    const { rows } = await pool.query('INSERT INTO appInfo (app_name, app_url, app_version) VALUES ($1, $2, $3) RETURNING *', [appInfo.app_name, appInfo.app_url, appInfo.app_version]);
    return new AppInfo(rows[0]);
  }
}

module.exports = AppInfo;
