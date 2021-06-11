const express = require("express");
const connectDB = require("../config/db");
let cors = require("cors");

const books = require("../routes/apis/books.routes");

const app = express();

// Connect to MongoDB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

// use Routes
app.use("/api/books", books);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
