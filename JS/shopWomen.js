




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


// $(".triangle").click(function () { 

//     $(this).toggle(".triangle-up")
// });
$(".genderSelections").click(function () {
    $("#genderSelections").slideToggle(200);
    $("#genderCollections").hide();

    
 $("#slipperSelections").hide();
 $("#soleColour").hide();
 $("#upperColour").hide();
})


$(".genderShop").click(function () {
    $("#genderShop").slideToggle(500);
    $("#genderCollections").hide();
   
    $("#genderSelections").hide(200);
 $("#slipperSelections").hide();
 $("#soleColour").hide();
 $("#upperColour").hide();
 
})

$(".genderCollections").click(function () {
    $("#genderCollections").slideToggle(500);
    $("#genderShop").hide();
   
    $("#genderSelectionss").hide();
 $("#slipperSelections").hide();
 $("#upperColour").hide();
 $("#soleColour").hide();
})



$(".upperColour").click(function () {
    $("#upperColour").slideToggle(500);

    $("#genderShop").hide();
    $("#slipperSelections").hide();
   
 $("#genderCollections").hide();
 $("#soleColour").hide();
 $("#soleColour").hide();

})

$(".soleColour").click(function () {
    $("#soleColour").slideToggle(500);

    $("#genderShop").hide();
    $("#slipperSelections").hide();
   
 $("#genderCollections").hide();
 $("#upperColour").hide();
})



