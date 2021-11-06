const Materiau = require("../models/Materiau")

const materiauRoute = ({ app, db }) => {
  app.get("/materiau", async (req, res) => {
    res.send(await Materiau.query())
  })
}

module.exports = materiauRoute