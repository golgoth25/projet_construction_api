const { Model } = require("objection")

const Materiau = require("./Materiau")

class Article extends Model {
  static tableName = "article"
  static idColumn = "id"
  static relationMappings = {
    materiau: {
      relation: Model.BelongsToOneRelation,
      modelClass: Materiau,
      join: {
        from: "article.id_materiau",
        to: "materiau.id",
      },
    },    
  }
}

module.exports = Article