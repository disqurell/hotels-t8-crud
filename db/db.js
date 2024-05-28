const database = require("./database");
const { uuidv4 } = require("uuid");

let db = {
  users: {},

  async createUser(email, password) {
    uuid = uuidv4();
    const res = await database.query(
      "INSERT INTO users (uuid, email, password) VALUES ($1, $2, $3)",
      [uuid, email, password]
    );

    return uuid;
  },
  async getUser(uuid) {
    const res = await database.query("SELECT * FROM users WHERE uuid=$1", [
      uuid,
    ]);
    return res;
  },
  async getUserByEmail(email) {
    const res = await database.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    return res;
  },
  async updateUser(uuid, data) {
    const res = await database.query(
      "UPDATE users SET email = $1, password = $2 WHERE uuid=$3",
      [uuid, data.email, data.password]
    );
    return res;
  },
  async deleteUser(uuid) {
    const res = await database.query("DELETE FROM users WHERE uuid = $1", [
      uuid,
    ]);
    return res;
  },
};

module.exports = { db };
