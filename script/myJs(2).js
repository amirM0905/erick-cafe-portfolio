$(document).ready(function () {

    //_______________________ Dark mode and save to local storage
    $("#modeToggle").click(function () {
        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {
            localStorage.setItem("them", "dark");
        } else {
            localStorage.setItem("them", "light");
        }
    });

    let localStorageThem = localStorage.getItem("them");
    let inputDarkMode = $("#input")

    if (localStorageThem === "dark") {
        $("body").addClass("dark");
        $(inputDarkMode).attr("checked", "");
    }

    // ___________________________ACTIVE HEADER
    $("[data-hamber]").click(function (e) {
        e.stopPropagation();

        $("[data-navbarActive]").removeClass("show").addClass("show");
        $("[data-overlay]").removeClass("hidden");
    });

    $("[data-navbarActive]").click(function (e) {
        e.stopPropagation();
    });

    $("[data-overlay], body").click(function () {
        $("[data-navbarActive]").removeClass("show").addClass("sidebar");
        $("[data-overlay]").addClass("hidden");
    });

    $("[data-item-active]").click(function () {
        $("[data-navbarActive]").removeClass("show").addClass("sidebar");
        $("[data-overlay]").addClass("hidden");
    });


    // ___________________________click img header
    $(".thumb").click(function () {
        let imgSrc = $(this).attr("data-src");

        $(".imgTopDiv").fadeOut(200, function () {
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });



    // ___________________________mines and plus 
    const basePrice = 240000;

    function updatePriceDisplay(quantity) {
        let total = quantity * basePrice;
        $("#priceElem").html(`<span class="text-[1.1rem]">تومان</span> ${total.toLocaleString("fa-IR")}`);
    }

    function plusTheNum() {
        let currentNum = parseInt($("#numDiv").text());
        if (currentNum < 4) {
            let newNum = currentNum + 1;
            $("#numDiv").text(newNum);
            updatePriceDisplay(newNum);
        }
    }

    function minusTheNum() {
        let currentNum = parseInt($("#numDiv").text());
        if (currentNum > 0) {
            let newNum = currentNum - 1;
            $("#numDiv").text(newNum);
            updatePriceDisplay(newNum);
        }
    }

    updatePriceDisplay(parseInt($("#numDiv").text()));

    $("#plusDiv").on("click", plusTheNum);
    $("#minesDiv").on("click", minusTheNum);



    // _____________________________768px_______________navBarFixed
    let navBarFixed = $("#navBarFixed")

    $(document).scroll(function () {

        if ($(document).scrollTop() > 170) {
            $(navBarFixed).addClass("top-[-3.3rem] fixed left-[3.7%]");
        } else {
            $(navBarFixed).removeClass("top-[-3.3rem] fixed left-[3.7%]");
        }

        if ($(document).scrollTop() > 171) {
            $(navBarFixed).addClass("translate-y-[6rem] shadow-[0px_5px_20px_-2px_gray] fixed transition-all duration-500 ease-in-out");
        } else {
            $(navBarFixed).removeClass("translate-y-[6rem] shadow-[0px_5px_20px_-2px_gray] fixed transition-all duration-500 ease-in-out");
        }

    });



    // ______dropdownMenu_________
    const $dropdownButton = $('#dropdownButton');
    const $dropdownMenu = $('#dropdownMenu');

    $dropdownButton.on('click', function (event) {
        event.stopPropagation();
        $dropdownMenu.slideToggle('fast');
        const isExpanded = $dropdownMenu.is(':visible');
        $dropdownButton.attr('aria-expanded', isExpanded);
    });

    $(document).on('click', function (event) {
        if (!$dropdownButton.is(event.target) && $dropdownMenu.has(event.target).length === 0 &&
            $dropdownMenu.is(':visible')) {
            $dropdownMenu.slideUp('fast');
            $dropdownButton.attr('aria-expanded', 'false');
        }
    });


    // <!-- _______loading animation______ -->
    // $(document).ready(function () {
        $(".dadLoader").addClass("hidden");
    // });


});