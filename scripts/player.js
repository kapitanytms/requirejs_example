define(function (require){
    // module loading
    var team = require("./team");
    return {
        shoot: function () {
            console.log(team.player +  " Shoot!!!");
        }
    };
});
