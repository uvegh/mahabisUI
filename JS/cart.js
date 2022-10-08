let count =1;
$("#menNav").click(function () {
    $("#dropdownNavMen").slideToggle(500);
    $("#dropdownNavWomen").hide();
    $("#dropdownNavAbout").hide();
    $("#dropdownNavHelp").hide();
})


$("#womenNav").click(function () {
    $("#dropdownNavWomen").slideToggle(500);
    $("#dropdownNavMen").hide();
    $("#dropdownNavAbout").hide();
    $("#dropdownNavHelp").hide();
})

$("#aboutNav").click(function () {
    $("#dropdownNavAbout").slideToggle(500);
    $("#dropdownNavWomen").hide();
    $("#dropdownNavMen").hide();
    $("#dropdownNavHelp").hide();
})

$("#helpNav").click(function () {
    $("#dropdownNavHelp").slideToggle(500);
    $("#dropdownNavAbout").hide();
    $("#dropdownNavWomen").hide();
    $("#dropdownNavMen").hide();
    
    
})


// })
$("#plus").click(function () { 
   
    counterPlus()
});

$("#minus").click(function () { 
   counterminus()
    
});


function counterPlus() {
   count++
   $("#quantityTxt").html(count);
   
   console.log(count);
  
}

function counterminus() {
    if (count>1) {
        count-- 
        $("#quantityTxt").html(count);
    }
   else{    
  $("#quantityTxt").html(1);
    
    

    console.log(count);
}
}