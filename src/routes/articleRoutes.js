const Article = require("../models/Article")

const articleRoute = ({ app, db }) => {
  app.get("/article", async (req, res) => {
    res.send(await Article.query())
  })
  app.get("/requete", async (req, res) => {
    const requete1 = await Article.query()
      .select('nom_article', 'prix')
      .where('id_materiau','=','1')

    res.send(requete1)
  })
}

module.exports = articleRoute