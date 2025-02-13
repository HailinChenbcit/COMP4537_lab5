const { Pool } = require("pg");
const DB_URL =
  "postgresql://comp4537_user:k2T670c2QxaAKRn8VDBrAk5B1vvlRrZ1@dpg-cumfkbpopnds73clq94g-a.oregon-postgres.render.com/comp4537";

const pool = new Pool({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { pool };
