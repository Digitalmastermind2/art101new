var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];
var audio = document.getElementById("button-audio");

function makeImage(imageName){

 if (colors[colorCount] == imageName) {
       $("body").append("<img width= 50 src= 'images/" + imageName + ".jpg'>");
   }

}

function changeBackground (newColor) {

$("body").css("background-color", colors[newColor]);
}


$(".colorbutton").click(function (){

   changeBackground(this.id);

});

function moody(moodyCount){
   let mood ="";
if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;

}



let moodMessage=moody(count);


$("#needy-button").click(function () {

   moody(count); 

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);

   $("body").css("background-color", colors[colorCount]);

   var audio = document.getElementById("button-audio");
   audio.play();
   changeBackground( colors[colorCount] );


changeBackground(colors[colorCount]);

makeImage("Orchid");
makeImage("Coral");
makeImage("Plum");



   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

