var express = require("express");
var app = express();

app.get("/heartbeat", (req, res, next) => {
    res.sendStatus(200);
});

app.listen(6666, () => {
 console.log("Server running on port 6666");
});