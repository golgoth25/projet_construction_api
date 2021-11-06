exports.up = async (knex) => {
    await knex.schema.createTable("materiau", (table) => {
        table.increments("id").primary()
        table.string("type_materiau", 120).notNullable().unique()        
      })
    await knex.schema.createTable("article", (table) => {
      table.increments("id").primary()
      table.string("nom_article", 120).notNullable().unique()
      table.integer("prix").unsigned().notNullable()
      table.integer("id_materiau").unsigned().notNullable()
      table.foreign("id_materiau").references("id").inTable("materiau")
    })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTable("materiau")
    await knex.schema.dropTable("article")
  }
