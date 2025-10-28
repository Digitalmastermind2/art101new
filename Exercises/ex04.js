var count = 0

// let count = 0;

let count2 = 0;

var colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line to add



$("#needy-button").click( function(){

if (count < 5) { mood = "gresh and happy "; }
else if (count > 3)  {mood="keep pushing"; }

else {mood = "so tired"; }


$("#needy-button").html("Clicks: " + count
    + " Color: " + colors[count2] + " " + mood);

$("body").css("background-color", colors[count2]);

if (colors[count2] == "Orchid")


$("body").append("<img.width=50 src = 'images/orchid.jpg'>");

count = count + 1;

count2 = count2 + 1;

if (count2==4) { count2=0; } 



});


