define(function (require) {
   var myTeam = require("./team");
   var myPlayer = require("./player");
   console.log("Player Name: " + myTeam.player);
   myPlayer.shoot();
});