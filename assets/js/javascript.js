// start basic

let head = document.querySelector("header .head");
let end1 = document.querySelector(".end");

window.onscroll = function () {
  if (scrollY >= 250) {
    head.classList.add("header-fixed");
    end1.classList.add("d-block");
  } else {
    head.classList.remove("header-fixed");
    end1.classList.remove("d-block");
  }
}; 
const counters = document.querySelectorAll(".count");
let animated = false;

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true; // تأكد إنه يشتغل مرة واحدة فقط
        $(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1500,
                easing: "linear",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        observer.disconnect(); // وقف المراقبة بعد التشغيل
      }
    });
  },
  {
    threshold: 0.5, // يبدأ لما 50% من العنصر يكون ظاهر
  }
);

// سجل كل عنصر للمراقبة
counters.forEach((counter) => {
  observer.observe(counter);
});

// // //////load
// دالة الكتابة التلقائية
function autoType(
  element,
  text,
  typeSpeed,
  deleteSpeed,
  waitBeforeDelete,
  waitBetweenWords,
  loop
) {
  let i = 0; // مؤشر الحروف
  let deleting = false; // لتحديد إذا كنا في وضع الحذف
  let textContent = ""; // النص الذي سيتم كتابته أو حذفه

  function type() {
    if (!deleting) {
      textContent += text[i];
      element.textContent = textContent;
      i++;

      // التوقف بعد كتابة النص بالكامل
      if (i < text.length) {
        setTimeout(type, typeSpeed);
      } else {
        if (loop) {
          setTimeout(deleteText, waitBeforeDelete);
        }
      }
    }
  }

  // دالة الحذف التلقائي
  function deleteText() {
    deleting = true;
    textContent = textContent.slice(0, -1);
    element.textContent = textContent;
    if (textContent.length > 0) {
      setTimeout(deleteText, deleteSpeed);
    } else {
      deleting = false;
      i = 0;
      setTimeout(type, waitBetweenWords);
    }
  }

  // بدء الكتابة التلقائية
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const autoElements = document.querySelectorAll(".auto");

  autoElements.forEach((ele) => {
    const exampleText = ele.textContent.trim();
    ele.textContent = ""; // مسح النص الحالي داخل العنصر
    autoType(ele, exampleText, 100, 50, 2000, 500, true); // بدء الكتابة التلقائية
  });
});
document.getElementsByTagName("body")[0].classList.add("loaderlodging__body");
window.onload = function () {
  document.getElementsByClassName("loaderlodging")[0].classList.add("remove");
  document
    .getElementsByClassName("loaderlodging__body")[0]
    .classList.add("afterloading");
};


// end.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

let bars = document.querySelector(".bars");
let phone = document.querySelector(".phone");
let phone_slide = document.querySelector(".phone-slide");
let closes = document.querySelector(".closes");

bars.onclick = () => {
  phone.classList.add("flex");
  setTimeout(() => {
    phone_slide.classList.add("left-0");
  }, 100);
};
closes.onclick = () => {
  setTimeout(() => {
    phone.classList.remove("flex");
  }, 1000);
  phone_slide.classList.remove("left-0");
};
// end basic

// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });

$(".autoplay")
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    rtl: true,
  })
  .slickAnimation();
// // ////autoplay 2
(function ($) {
  "use strict";

  if (screen.width <= 350) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 768) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width >= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  }

  if (screen.width <= 350) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 768) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width <= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  } else if (screen.width >= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl: true,
    });
  }
})(jQuery);

let collapse = document.querySelectorAll(".why-us .collaps ");
let collapse_rotate = document.querySelectorAll(".why-us  .change");
let collapse_btn = document.querySelectorAll(".why-us  .blus-open-info i");
// let collapse_bg = document.querySelectorAll(".why-us .collaps");

collapse.forEach((ele, ind) => {
  ele.onclick = () => {
    collapse_btn.forEach((ele2, ind2) => {
      if (ind == ind2) {
        ele2.classList.toggle("rotate");
        ele.classList.toggle("bg-collapsed");
      } else {
      }
    });
  };
});
$(document).ready(function () {
  var progress_circle = $(".my-progress-bar")
    .gmpc({
      line_width: 6,
      color: "#1ABC9C",
      starting_position: 25,
      percent: 25,
      percentage: true,
      text: "JQuery Script Net",
    })
    .gmpc("animate", 80, 1000);
});
// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////

// // start counter
//      // count in who us slide

// // end count in who us slide

// // // ///////////////////////////////
// $(document).ready(function(){
//   // تهيئة Slick Slider
//   $('.your-slider-class').slick({
//     // أي إعدادات تحتاجها للسلايدر
//   });

//   // ضبط نفس الارتفاع لجميع البطاقات بعد التهيئة
//   adjustCardHeights();

//   // إعادة ضبط الارتفاع عند التحديث أو التغيير في السلايدر (إذا كان لديك محتوى متغير)
//   $(window).on('resize', function() {
//     adjustCardHeights();
//   });

//   function adjustCardHeights() {
//     var maxHeight = 0;

//     // العثور على أكبر ارتفاع
//     $('.slick-slide').each(function() {
//       var thisHeight = $(this).outerHeight();
//       if (thisHeight > maxHeight) {
//         maxHeight = thisHeight;
//       }
//     });

//     // تعيين نفس الارتفاع لجميع البطاقات
//     $('.slick-slide').each(function() {
//       $(this).height(maxHeight);
//     });
//   }
// });
// let table =document.querySelectorAll(".travel-table li")

// table.forEach((ele , ind)=>{
// ele.onclick = ()=>{
// ele.classList.toggle("active")
// }
// })
