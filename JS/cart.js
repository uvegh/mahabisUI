let count =1;
// cart.on("click",".plus",function () {  
//     counterPlus()



// })
// cart.on("click",".minus",function () {  
//     counterminus()



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