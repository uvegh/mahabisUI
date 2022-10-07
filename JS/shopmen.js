


$("#navTestimonial1").click(function () { 
   $("#testimonial1").show()
   $("#testimonial2").hide()
   $("#testimonial2").hide()
});
$("#navTestimonial2").click(function () { 
    $("#testimonial1").hide()
    $("#testimonial2").show()
    $("#testimonial3").hide()
 });

 $("#navTestimonial3").click(function () { 
    $("#testimonial1").hide()
    $("#testimonial2").hide()
    $("#testimonial3").show()
 });

$("#menNav").click(function () {
    $("#dropdownNavMen").slideToggle(500);
})


$("#womenNav").click(function () {
    $("#dropdownNavWomen").slideToggle(500);
})

$("#aboutNav").click(function () {
    $("#dropdownNavAbout").slideToggle(500);
})

// $(".triangle").click(function () { 

//     $(this).toggle(".triangle-up")
// });

$(".genderShop").click(function () {
    $("#genderShop").slideToggle(500);
    $("#genderCollections").hide();
    $("#slipperSelections").hide();
    $("#genderSelections").hide();
 $("#slipperSelections").hide();
 $("#soleColour").hide();
 $("#upperColour").hide();
})

$(".genderCollections").click(function () {
    $("#genderCollections").slideToggle(500);
    $("#genderShop").hide();
    $("#slipperSelections").hide();
    $("#genderSelections").hide();
 $("#slipperSelections").hide();
 $("#upperColour").hide();
 $("#soleColour").hide();
})

$(".slipperSelections").click(function () {
    $("#slipperSelections").slideToggle(500);
    $("#genderShop").hide();
    $("#slipperSelections").hide();
    $("#genderSelections").hide();
 $("#genderCollections").hide();
 $("#soleColour").hide();
 $("#upperColour").hide();
})

$(".genderSelections").click(function () {
    $("#genderSelections").slideToggle(500);
    $("#genderShop").hide();
    $("#slipperSelections").hide();
   
 $("#genderCollections").hide();
 $("#soleColour").hide();
 $("#upperColour").hide();
})

$(".upperColour").click(function () {
    $("#slipperSelections").slideToggle(500);

    $("#genderShop").hide();
    $("#slipperSelections").hide();
   
 $("#genderCollections").hide();
 $("#soleColour").hide();
 $("#soleColour").hide();

})

$(".soleColour").click(function () {
    $("#genderSelections").slideToggle(500);

    $("#genderShop").hide();
    $("#slipperSelections").hide();
   
 $("#genderCollections").hide();
 $("#upperColour").hide();
})



