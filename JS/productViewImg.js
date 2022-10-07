
 


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
 
 
 
 var direction = "",
     oldx = 0,
     mousemovemethod = function (e) {
     
         if (e.pageX < oldx) {
             direction = "left";
             $(".ontopImg").width(100)
         } else if (e.pageX > oldx) {
             direction = "right"
         }
         
         document.body.innerHTML = direction;
         
         oldx = e.pageX;
     }
     
 
   
  let viewVid=  $(".viewVid");
 $(".playVid").click(function () {
    play()
    $(".playVid").hide()
    $(".ontopImg").hide()
    
});
var play =()=>{
   viewVid.trigger('play');
    
    
        }
        $(".sizes").click(function () { 
         $(this).animate({
            "border-color": "black",
           " border-width": "2px",
         },500)
            
        });


        
      