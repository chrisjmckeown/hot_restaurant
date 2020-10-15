var reserveTable = require('../data/reserveData');
var waitingOnTable = require('../data/waitData');

// module.exports = function (app) {
function apiRoutes(app) {
    // Displays all reserve data
    app.get("/api/reserve", (req, res) => {
        res.json(reserveTable);
    });

    // Displays all waiting data
    app.get("/api/waiting", (req, res) => {
        res.json(waitingOnTable);
    });

    // add route
    app.post("/api/reserve", (req, res) => {
        if (reserveTable.length < 5) {
            reserveTable.push(req.body);

            res.json({ success: true, booked: true });
        }
        else {
            waitingOnTable.push(req.body);

            res.json({ success: true, booked: false });
        }
    })

    // delete route
    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        reserveTable.length = 0;
        waitingOnTable.length = 0;

        res.json({ success: true });
    });
}
module.exports = apiRoutes;