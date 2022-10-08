
$("#navTestimonial1").show();
$("#navTestimonial1").addClass("testimonialActive");

$("#navTestimonial1").on("click",function () { 
    $("#navTestimonial1").addClass("testimonialActive");
    $("#navTestimonial2").removeClass("gqtestimonialActive");
    $("#navTestimonial2").removeClass("testimonialActive");
    $("#testimonial2").hide("slide", { direction: "left" }, 500);
    $("#testimonial1").show("slide", { direction: "right" }, 500);
 




   $
//    $("#testimonial2").hide()
//    $("#testimonial2").hide()
});

  

    $("#navTestimonial2").on('click', function() {
        $("#navTestimonial2").addClass("gqtestimonialActive");
        $("#navTestimonial1").removeClass("testimonialActive")
        $("#navTestimonial3").removeClass("testimonialActive");
        $("#testimonial1").hide("slide", { direction: "left" }, 500);
        $("#testimonial3").hide("slide", { direction: "left" }, 500);
        $("#testimonial12").show("slide", { direction: "left" }, 500);
    });
  


  




 $("#navTestimonial3").on('click',function () { 
    $("#navTestimonial3").addClass("testimonialActive");
    $("#navTestimonial1").removeClass("testimonialActive");
    $("#navTestimonial2").removeClass("gqtestimonialActive");
    $("#testimonial2").hide("slide", { direction: "left" }, 500);
    $("#testimonial1").hide("slide", { direction: "left" }, 500);
        $("#testimonial13").show("slide", { direction: "right" }, 500);
 });

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

$(function () {
    var p1 = parseInt($("#part1").width());
    var p2 = parseInt($("#part2").width());

    $(".divider").draggable({
        axis: "x",
        containment: "parent",
        scroll: false,
        drag: function () {
            var a = parseInt($(this).position().left);
            $("#part1").css({width:a});
            $("#part2").css({width:p1 + p2 -a });
        }
    });
});


    
$("#bestSellerTag").click(function () { 
    $("#bestSellerTag").addClass("active");
    $("#newInTag").removeClass("active");
    $("#seasonalPickTag").removeClass("active");
   $("#bestSellerProducts").show();
   $("#seasonalPickProducts").hide()
   $("#newInProducts").hide()
   $("#bestSellerLine").hide();
   $("#newInLine").hide();
});

$("#seasonalPickTag").click(function () { 
    $("#seasonalPickTag").addClass("active");
    $("#newInTag").removeClass("active");
    $("#bestSellerTag").removeClass("active");

    $("#seasonalPickProducts").show()
    $("#bestSellerProducts").hide()
    $("#newInProducts").hide()
    $("#bestSellerLine").hide();
    $("#newInLine").hide();
 });

 $("#newInTag").click(function () { 
   $("#newInTag").addClass("active");
   $("#seasonalPickTag").removeClass("active");
   $("#bestSellerTag").removeClass("active");
    $("#newInProducts").show()
    $("#seasonalPickProducts").hide()
    $("#bestSellerProducts").hide()
    $("#seasonalPickLine").hide();
    $("#bestSellerLine").hide();
 });

 
 



 