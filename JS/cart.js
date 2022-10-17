let cart=$("#cart")
let dateStamp = new Date()

dateStamp.getTime()

let showCartItems=[];

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


cart.on("click",".plusBtn",function () {  
    counterPlus()



})

cart.on("click",".minusBtn",function () {  
    counterminus()



})





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

cart.on("click",".removeItem", function () {

    let removeIndex = $(this).attr("index");
    showCartItems.splice(removeIndex,1)
 
    localStorage.setItem("shoppingCartStorage",JSON.stringify(showCartItems))
    console.log(showCartItems);
    loadCart()
 });
 
loadCart()
function loadCart() {
   
    let getCartItems = localStorage.getItem("shoppingCartStorage")
    if (getCartItems!=null) {
        showCartItems= JSON.parse(getCartItems)
        console.log(showCartItems);
    }
    let cartShow=""
    for (let i = 0; i < showCartItems.length; i++) {


       let  priceTotal = showCartItems[i].price;
       priceTotal+=priceTotal
        cartShow+=`
        
    
           
        
        
            <div class="col border-top ">
                <div class="d-flex">
                <div>
                    
                    <img src="${showCartItems[i].image}" alt="" width="140" height="=140">
                </div>
                <div class="d-block ps-4 pe-4">
                <p class="fw-bold"> ${showCartItems[i].name}</p>
              <p class=""> ${showCartItems[i].description}</</p> 
                <div class="d-flex ">
                    <p class="border p-2 plusBtn" >+</p>   <p class="p-2 border"  id="quantityTxt">1</p>      <p class="border p-2 minusBtn" >-</p> 
                </div>
               
                </div>
            
                <span class="text-end  ms-5 ps-5 removeItem" index=${i}> x</span>
            <span class="mt-5 pt-3">$${showCartItems[i].price}</span>
            </div>
                
                
                
                
                
                    </div>
        
                   
                
                        
        
    
    
   
    

`
$("#subTotalCartPrice").html(priceTotal)
$("#cartItemNo").html(showCartItems.length)
    }     
cart.html(cartShow)
}
