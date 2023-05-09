
const cfg = require("../config.js");
const express = require("express");
const app = express();

// statics
app.use("/", express.static(cfg.SRC));

// run server
app.listen(cfg.PORT, () => {
    console.log("Server running on " + cfg.PORT);
});

module.exports = app;