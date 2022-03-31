const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.POST || 5000;
const mongoose = require("mongoose");
require("dotenv").config();

// Router Imports
const propertyRouter = require("./routes/estates");
const userRouter = require("./routes/users");

// App Use
app.use(cors());
app.use(express.json());
app.use("/properties", propertyRouter);
app.use("/users", userRouter);

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

// Mongoose Setup
mongoose.connect(uri, { useNewUrlParser: true });
connection.once("open", () => {
	console.log("MongoDB database connection established");
});

app.listen(port, () => {
	console.log(`Listing on port: ${port}`);
});
