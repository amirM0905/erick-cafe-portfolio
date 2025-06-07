$(document).ready(function () {

    // ___________________save dark/light mode to local storage
    let localGet = localStorage.getItem("them")

    if (localGet === "dark") {
        $("body").addClass("dark");
    }

    // ______________________________validation form
    let formCall = $("#formCall")
    let alertEror = $("#alertEror")
    let fildCall = $("#fildCall")
    
    $(formCall).on("input", function () {

        let formCallValue = $(formCall).val();
        let falsVal = /^(09)[0-9۰-۹]{9}$/;

        if (formCallValue.length < 11 || !falsVal.test(formCallValue)) {

            $(alertEror).html(' شماره صحیح رو وارد نکردی ): ')
            .removeClass('text-green-800')
            .addClass('text-red-500')
            .fadeIn(500);

            $("#btnSms").addClass("opacity-50 pointer-events-none select-none");
            $(fildCall).addClass("border-red-500");

        }else {

            $(alertEror).html(' حالا درست شددد (: ')
            .removeClass("text-red-500")
            .addClass('text-green-800 font-bold')
            .fadeIn(500);
            
            $(fildCall).removeClass('border-red-500');

            $("#btnSms").removeClass("opacity-50 pointer-events-none select-none");

            setTimeout(function () {
                $(alertEror).hide(400);
            }, 3000);

        }
        

    });


    // <!-- _______loading animation______ -->
    // $(document).ready(function () {
        $(".dadLoader").addClass("hidden");
    // });

});