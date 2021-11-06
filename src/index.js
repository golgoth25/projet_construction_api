const express = require("express")
const cors = require("cors")
const knex = require("knex")
const { Model } = require("objection")

const config = require("./config")
const articleRoutes = require("./routes/articleRoutes")
const materiauRoutes = require("./routes/materiauRoutes")

const db = knex(config.db)
const app = express()

Model.knex(db)

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
)

app.use(express.json())

articleRoutes({ app, db })
materiauRoutes({ app, db })

app.listen(config.app.port, () =>
  console.log(`Listening on :${config.app.port}`),
)