// declaring an array with name myCommutes
let myCommutes = ["city bus", "UCSC bus", "legs",  "cat", "car"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "forest",
    IsArticulated: true,
    stops: ["safeway", "mcdonalds", "downtown", "hell"],
};



let megaSentence;

megaSentence = "<p>My top commutes from the array are: " + 
myCommutes[0] + ", " + myCommutes[2] + ", "+ myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + 
myFavouriteCommute.type + ", route number: " + myFavouriteCommute.route + ", the best stop: " + myFavouriteCommute.stops[0] + "</p>";

$("#output").html(megaSentence);






