
 



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
         $(this).css({p,
            "border-color": "black",
           " border-width": "2px",
         },500)
            
        });


        
      