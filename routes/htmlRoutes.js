var path = require("path");
function htmlRoutes(app) {
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // sets home as default if routes don't match
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
module.exports = htmlRoutes;