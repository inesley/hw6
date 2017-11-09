// // PSEUDOCODE:
// User clicks on "Select a City"
// A dropdown menu pops up with 5 cities to choose from.
// User clicks NYC, then the background picture changes to New York City picture
// User clicks SF, then the background picture changes to San Francisco picture
// User clicks LA, then the background picture changes to Los Angeles picture
// User clicks ATX, then the background picture changes to Austin Texas picture
// User clicks SYD, then the background picture changes to Sydney picture
// -->Background pictures changes with whatever city the user selects

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function() {

  for (i=0; i< cities.lenght; i++){
  	$("#city-type").append("<option value=" +cities[i] +">" +cities[i] +"</option>");
  }


$("form").change(function(){
	var city= $("city-type").val();
	
	if(city=="NYC") {
      $("body").attr("class","nyc");
    }

	else if(city=="SF"){
      $("body").attr("class","sf");
    }

    else if(city=="LA"){
      $("body").attr("class","la");
    }

    else if(city=="ATX"){
      $("body").attr("class","austin");
    }

    else if(city=="SYD") {
      $("body").attr("class","sydney");
    }

  });
});

// Code is not working.
// does it matter if I use " or '  ?

