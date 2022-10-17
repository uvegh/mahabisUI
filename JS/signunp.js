(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

let nameTxt = $("#nameTxt")
emailTxt = $("#emailTxt")
phoneTxt = $("#phoneTxt")

passwordTxt = $("#passwordTxt")
btnSave = $("#btnSave")

btnSave.click(function () {
   addUser()
    // clearTxtFields()

})





function addUser() {
    let userObj = {

        "name": nameTxt.val(),
        "email": emailTxt.val(),

        "phone": phoneTxt.val(),
        "password": passwordTxt.val(),


    }
    console.log(userObj);
    $.ajax({
        type: "post",
        url: "http://159.65.21.42:9000/register ",
        data: userObj,

        success: function (res) {
            if (res["error"]) {
                alert(res["error"])
                console.log(res["error"]);
                window.location.href = "404.html"
            }
            else {


                alert(`${res["name"]} was added successfully`)
            }
           

        },

        error: function (err) {
            console.log(err)
            window.location.href = "404.html"
        }
    });

}

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

let showCartItems=[]
let getCartItems = localStorage.getItem("cartStorage")
if (getCartItems!=null) {
    showCartItems= JSON.parse(getCartItems)
    $("#cartItemNo").html(showCartItems.length)
}

