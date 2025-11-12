// a variable for storing names

// when the button is clicked (event)

$("#add-creature").click(

    function(){


       let crName = $("#crName").val();

       //check for the field value do not add empty ones
       if( (crName=="") || (crName.length>15)) { }
        else{


    $("#creature-list").append(crName + ", ");
    }
    // remove the name after its added

    $("#crName").val("done!");

});


// the magic move 
// 





