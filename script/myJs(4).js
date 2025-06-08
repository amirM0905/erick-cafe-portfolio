$(document).ready(function () {

    // ___________________save dark/light mode to local storage
    let localGet = localStorage.getItem("them")

    if (localGet === "dark") {
        $("body").addClass("dark");
    }

    // _________________________timer sms
    let timerElem = $("#timer");
    let timerNum = parseInt($(timerElem).text());
    let contentforward = $("#contentforward");

    let timer = setInterval(function () {

        if (timerNum === 1) {
            clearInterval(timer)
            $(contentforward).removeClass("select-none");
            $(contentforward).addClass("text-gray-900");
            $(contentforward).addClass("select-auto");
            $(contentforward).addClass("cursor-pointer");

        }

        timerNum--
        $(timerElem).text(timerNum);

    }, 1000);


    //________________________alert validation
    // تبدیل اعداد فارسی به انگلیسی
    function toEnglishDigits(str) {
        return str.replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0) - 0x06F0))
            .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660));
    }

    let formCode = $(".formCode");
    let alertOk = $("#alertOk");
    let alertEror = $("#alertEror");

    $("#btnLogin").click(function () {
        let allValid = true;

        formCode.each(function () {
            let val = $(this).val().trim();
            val = toEnglishDigits(val);

            if (!val || isNaN(val)) {
                allValid = false;
                return false; // شکستن loop
            }
        });

        if (allValid) {
            alertOk.removeClass("top-[-5rem]").addClass("top-[11%]");

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            alertEror.removeClass("top-[-5rem]").addClass("top-[11%]");

            setTimeout(() => {
                alertEror.removeClass("top-[11%]").addClass("top-[-5rem]");
            }, 2000);
        }
    });

    // ____________ux بهتر
    $(formCode).on("input", function () {
        if (this.value.length === 1) {
            $(this).next(formCode).focus()
        }
    }).on("keydown" , function (eve) {
        if (eve.key === "Backspace" && !$(this).val()) {
            $(this).prev(formCode).focus()
        }
    })



   // <!-- _______loading animation______ -->
    // $(document).ready(function () {
        $(".dadLoader").addClass("hidden");
    // });

});