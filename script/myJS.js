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


    // _____________________________________ activate navbar
    $("[data-hamber]").click(function (e) {
        e.stopPropagation();

        $("[data-navbarActive]").removeClass("show").addClass("show");
        $("body").addClass("overflow-hidden");
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



    // _____________________________________<!-- تخفیفات ویژه -->
    $(".cardOffer").hide();
    $(".cardOffer1").fadeIn(500);

    $(".itemOffer").click(function () {
        let box = $(this).data("box");

        $(".cardOffer").hide();

        $("." + box).fadeToggle()

    });

    // __________<!-- تخفیفات ویژه -768 -->
    $(".offerDiv").hide();
    $(".offerDiv1").fadeIn(500);

    $(".itemBtn").click(function () {
        let divOff = $(this).data("divOff");
        // console.log(divOff);

        $(".offerDiv").hide()
        $("." + divOff).fadeIn(700).css("display", "flex");

    });



    //______________________________________ <!-- اسلاید پرفروش ترین ها -->
    // اول همه دسته‌ها مخفی، بعد فقط cardAll رو نشون بده
    $(".cardTabNogation").hide();
    $(".cardAll").show();

    $(".tabButton").click(function () {
        const target = $(this).data("target");

        $(".cardTabNogation").hide();

        $("." + target).slideDown(500);
    });



    // _____________________________768px_______________navBarFixed
    let navBarFixed = $("#navBarFixed")

    $(document).scroll(function () {

        if ($(document).scrollTop() > 170) {
            $(navBarFixed).addClass("top-[-3.3rem] fixed left-[4%]");
        } else {
            $(navBarFixed).removeClass("top-[-3.3rem] fixed left-[4%]");
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


// اسلایدر آموزش هاــــــــــــــــــــــــ
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.tutorial-swiper-container', {
        effect: 'coverflow', // افکت زیبای کاورفلو
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto', // تعداد اسلایدها بر اساس عرضشان تنظیم می‌شود
        loop: true, // چرخش بی‌نهایت
        coverflowEffect: {
            rotate: 30, // زاویه چرخش اسلایدهای کناری
            stretch: 0,
            depth: 100, // عمق افکت سه‌بعدی
            modifier: 1, // ضریب افکت
            slideShadows: false, // نمایش سایه برای اسلایدها
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: { // پخش خودکار (اختیاری)
            delay: 4000, // تاخیر بین اسلایدها به میلی‌ثانیه
            disableOnInteraction: false, // ادامه پخش بعد از تعامل کاربر
        },
        // Breakpoints برای تنظیمات مختلف در سایزهای مختلف صفحه
        breakpoints: {
            // وقتی عرض صفحه >= 320px
            320: {
                slidesPerView: 1.2, // نمایش ۱ اسلاید و کمی از بعدی
                spaceBetween: 15,
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                },
            },
            // وقتی عرض صفحه >= 768px (تبلت)
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                coverflowEffect: {
                    rotate: 25,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                },
            },
            // وقتی عرض صفحه >= 1024px (دسکتاپ)
            1024: {
                slidesPerView: 'auto', // یا 3
                spaceBetween: 30,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                },
            }
        }
    });
});