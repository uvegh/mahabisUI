
 
let productViewArr=[]
let cartItems=[]

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
loadProdcutViewImg()
  
function loadProdcutViewImg() {
  

 let getProductViewStorage =localStorage.getItem("pushToProductView")
 if(getProductViewStorage!=null){

  productViewArr= JSON.parse(getProductViewStorage)
let lastProductIndex  = productViewArr.length-1
console.log(productViewArr[lastProductIndex]);
console.log(lastProductIndex);
let productViewDisplay=`

<div class="col-8">
<div class="row row-cols-2 ">

    <div class="col ">

        <div class="imgholder bg-light">

            <img src="${productViewArr[lastProductIndex].image}" alt="" srcset="" class="img-fluid">

        </div>
       

    </div>

    <div class="col">

        <div class="imgholder bg-light">

            <img src="${productViewArr[lastProductIndex].image}" alt="" srcset="" class="img-fluid">

        </div>
       

    </div>

    <div class="col   ">

        <!-- <div class="imgholder bg-light ">
<video src="${productViewArr[lastProductIndex].image}"" autoplay playsinline style="pointer-events: none;"></video>
          

        </div> -->
      
        <div class="product-video-wrapper js-product-spinvideo js-product-videowrapper position-relative container-fluid">
         
  <div class="ontopImgVid position-absolute bg-black opacity-75 container-fluid ">   <img src="${productViewArr[lastProductIndex].image}" class="position-absolute playVid " alt="" width="80">


</div>

                 <img src="${productViewArr[lastProductIndex].image}" alt="" srcset="" class="ontopImg position-absolute"> 
                <video   src="${productViewArr[lastProductIndex].image}" playsinline="" loop=""   muted="muted"    class="position-relative ratio ratio-1x1 viewVid" loop=""> </video>
        
        </div>
    </div>

   


   




</div>
</div>

<div class="col-4">

<div class="">
 <p class="text-black fw-bold"> ${productViewArr[lastProductIndex].name}
   </p>
 <p class="fw-bold"> $ ${productViewArr[lastProductIndex].price}</p>
 <p>choose your color <span class="fw-bold" id="shoeColorType">| larvik light grey</span></p>
 <div class="d-flex justify-content-around m-auto" >
    <img src="./productViewimgs/cream.jpg" alt="" width="40">
    <img src="./productViewimgs/darkColor.jpg" alt="" width="40">
    <img src="./productViewimgs/pink.jpg" alt="" width="40">
    <img src="./productViewimgs/grey.jpg" alt="" width="40">
    <img src="./productViewimgs/white.jpg" alt=""width="40">
 </div>
 <p>choose your color <span class="fw-bold" id="shoeColorType">| larvik light grey</span></p>
 <div class="d-flex justify-content-around   mt-2">
    <img src="./productViewimgs/cream.jpg" alt="" width="40">
    <img src="./productViewimgs/darkColor.jpg" alt="" width="40">
    <img src="./productViewimgs/pink.jpg" alt="" width="40">

 </div>

 <p class="validateTocart"></p>
<div class="row row-cols-6 sizes text-black mt-2 g-2"> 
<p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> <p class="text-black"> EU 36</p> 
</div>

 
</div>
<div class="container-fluid">

<a href="#" class="addToCart text-decoration-none container rounded-1   text-light" index=${lastProductIndex}> ADD TO CART</a>

<p class=mt-5>  ${productViewArr[lastProductIndex].description}</p>
</div>

</div>
`


$("#productView").html(productViewDisplay)
 }


     
}



$("#productView").on("click",".addToCart", function () {
  let cartGetStorage=localStorage.getItem("pushToProductView")
  listOfProducts=JSON.parse(cartGetStorage)
  cartIndex=$(this).attr("index");
  let cartObj = { "name": listOfProducts[cartIndex].name, 
  "quantity": listOfProducts[cartIndex].quantity,
   "price":listOfProducts[cartIndex].price, 
   "description": listOfProducts[cartIndex].description,
 "img":listOfProducts[cartIndex].img

}

cartItems.push(cartObj)
console.log(cartItems)
localStorage.setItem("shoppingCartStorage",JSON.stringify(cartItems))

});


   
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


        
        let showCartItems=[]
        let getCartItems = localStorage.getItem("shoppingCartStorage")
        if (getCartItems!=null) {
            showCartItems= JSON.parse(getCartItems)
            $("#cartItemNo").html(showCartItems.length)
        }