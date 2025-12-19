import express from "express"
import Router from "./Routes/Allrutes.routes.js";
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()


dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: ["", "http://localhost:5173"],   // your React app URL
  methods: ["GET", "POST"],
  credentials: true
}))

app.use('/api', Router);


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
