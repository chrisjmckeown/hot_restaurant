var reserveTable = require('../data/reserveData');
var waitingOnTable = require('../data/waitData');

module.exports = function (app) {
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
        if (reserveTable.length < 10) {
            reserveTable.push(newCharacter);
        }
        else{
            waitingOnTable.push(newCharacter);
        }

        res.json({ success: true });
    })
    
    // delete route

    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        reserveTable.length = 0;
        waitingOnTable.length = 0;
    
        res.json({ success: true });
      });

}