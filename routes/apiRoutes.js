var reserveTable = require('./data/reserveArray');
var waitingOnTable = require('./data/waitArray');

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
    app.post("/api/reserve", () => {
        var newReservation = req.body;
        

        console.log(newReservation);
      
        reserveTable.push(newCharacter);
      
        res.json(newReservation);
    })


    // delete route



}
module.exports = apiRoutes(app);