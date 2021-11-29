const express = require("express")
const cors = require("cors")
const knex = require("knex")
const { Model } = require("objection")

const config = require("./config")
const articleRoutes = require("./routes/articleRoutes")
const materiauRoutes = require("./routes/materiauRoutes")
const saisieRoutes = require("./routes/saisieRoutes")
const q_carrelageRoutes = require("./routes/q_carrelageRoutes")
const q_carrelage2Routes = require("./routes/q_carrelage2Routes")
const d_betonRoutes = require("./routes/d_betonRoutes")
const q_carrelage3Routes = require("./routes/q_carrelage3Routes")


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
saisieRoutes({app})
q_carrelageRoutes({app})
q_carrelage2Routes({app})
d_betonRoutes({app})
q_carrelage3Routes({app})

app.listen(config.app.port, () =>
  console.log(`Listening on :${config.app.port}`),
)