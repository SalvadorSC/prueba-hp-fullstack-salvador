const express = require("express");
var cors = require("cors");

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Members API routes
app.use("/api/albums", require("./routes/api/albums"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
