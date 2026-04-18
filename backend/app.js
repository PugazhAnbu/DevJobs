const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const cors = require("cors");
const cookieParser = require("cookie-parser");
//import
const jobRoutes = require("./routes/jobRoutes.js");
const auth = require("./routes/auth.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", jobRoutes);
app.use("/api/v1", auth);

module.exports = app;
