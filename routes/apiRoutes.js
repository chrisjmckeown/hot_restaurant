var reserveTable = require('./data/reserveArray');
var waitingOnTable = require('./data/waitArray');

// Displays all reserve data
app.get("/api/reserve", function (req, res) {
    res.json(reserveTable);
});

// Displays all waiting data
app.get("/api/waiting", function (req, res) {
    res.json(waitingOnTable);
});

// add route

// delete route