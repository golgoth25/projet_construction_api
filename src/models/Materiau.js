const { Model } = require("objection")

class Materiau extends Model {
  static tableName = "materiau"
  static idColumn = "id"
}

module.exports = Materiau