const express = require("express");
const cors = require("cors");

require("./src/database");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", require("./src/routes"));

app.listen(process.env.PORT || 3333);
