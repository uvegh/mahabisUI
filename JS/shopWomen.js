




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


$("#productsDisplay").on("click",".pushProduct", function () {
    productIndex= $(this).attr("index")
    let pushToProductViewObj={
       "image":   productArr[productIndex].image,
      "name": productArr[productIndex].name,
      "description": productArr[productIndex].description,
      "price": productArr[productIndex].price

    }
    toProductView.push(pushToProductViewObj)
    console.log(toProductView);
    localStorage.setItem("pushToProductView",JSON.stringify(toProductView))
    
});

function loadProducts() {

$.ajax({
   type: "get",
   url: "http://159.65.21.42:9000/Products",
   data: "response",

   success: function (response) {
       if (response.error) {
           alert(response.error)
           console.log(error);
       }
       
       else{
           let productview=""
           productArr=response;
           console.log(productArr);
           for (let i = 0; i < productArr.length; i++) {

               if (productArr[i].category=="vincent") {
                   
               
               productview+=`
               
               <div class="col   ">
             <a href="productView.html" class="pushProduct" index=${i}> 
               <div class="imgholder bg-light overflow-hidden">
             
                   <img src="" alt="" srcset="http://159.65.21.42:9000${productArr[i].image}" class="img-fluid">
                   </a>
               </div>
               <div>
                   <b>${productArr[i].name}"</b>
                   <p>${productArr[i].description}</p>
                   
               </div>
             
             </div>
               
               
               
               `
             
             
             
             } 
             $("#productsDisplay").html(productview)


       }
   }
}
});


}

let getCartItems = localStorage.getItem("cartStorage")
if (getCartItems!=null) {
   showCartItems= JSON.parse(getCartItems)
   $("#cartItemNo").html(showCartItems.length)
}
