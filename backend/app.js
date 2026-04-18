const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const cors = require("cors");
//import
const jobRoutes = require("./routes/jobRoutes.js");
const auth = require("./routes/auth.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", jobRoutes);
app.use("/api/v1", auth);

module.exports = app;
