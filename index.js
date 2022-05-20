import express from "express"
import dotenv from "dotenv"
import homeroute from "./routes/homeRoutes.js"
import dashboardRoute from "./routes/dashboardRoutes.js"

dotenv.config()
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/", homeroute)
app.use("/dashboard", dashboardRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`)
})
