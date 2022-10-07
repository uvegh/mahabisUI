


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
    var ontopImg = parseInt($("#ontopImg").width());
    var belowImg = parseInt($("#belowImg").width());

 

  $(".divider").draggable({
    axis:"x",
    containment:"parent",
    scroll:false,
    drag:function () {
        
    
    let a = parseInt($(this).position().left);
    $("#ontopImg").css({width:a});
    $("#belowImg").css({width:ontopImg + belowImg -a });
    }
    });
    
})



  