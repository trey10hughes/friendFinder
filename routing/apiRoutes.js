var friends = require("../data/friends");


module.exports = function (app) {

    //gets full friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log("post route hit");

        var match = {
            name: "",
            photo: "",
            difference: 999999
        };

        // save relevant info to variables
        var surveyData = req.body;
        var surveyScores = surveyData.scores;

        //will be used to store the total difference between the user's scores w/ each user in friends.js
        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i]; //saving current friend for this iteration of the loop to a variable
            totalDifference = 0; //setting a default value for total difference 

            console.log("checking scores for " + currentFriend.name); //log so we know which friend we're about to loop through

            //loop to check each score
            for (var j = 0; j < currentFriend.scores.length; j++) {
                //setting scores for the friend that's being checked and the user to variables to be compared w/ each iteration
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = surveyScores[j];

                //taking the absolute value of the difference between the 2 scores on a given iteration and adding that value to totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            //check to see if the total difference for a given iteration is less than the current match difference
            //on the first iteration, the match will be set to the first person checked, because no matter what the difference cannot be greater than the hard coded value of 999999
            //the loop will continue to update the best match each time it finds one with a lower difference, until the loop is complete
            if (totalDifference <= match.difference) {
                console.log("new match found: " + currentFriend.name);
                console.log("total survey score difference: " + totalDifference);
                
                match.name = currentFriend.name;
                match.photo = currentFriend.photo;
                match.difference = totalDifference;
            }
        }

        res.json(match);
    });
};
