console.clear();
$(".js-num").each(countUp);
function countUp() {
  var num = $(this).text();
  var decimal = 0;
  if (num.indexOf(".") > 0) { // if number is Decimal
    decimal = num.toString().split(".")[1].length;
  }
  $(this)
    .prop("Counter", 0.0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(parseFloat(now).toFixed(decimal));
        }
      }
    );
}
$(window).scroll(function () {
  var pageTop = $(window).scrollTop();
  $(".js-num").each(function(){
    if ($(this).offset().top < pageTop + $(window).height()) {
      $(this).each(countUp);
      console.log(1);
      $(window).off("scroll");
    }
  })
});


// console.clear();
// $(".js-nums").each(countUp);
// function countUp() {
//   var num = $(this).text();
//   var decimal = 0;
//   if (num.indexOf(".") > 0) { // if number is Decimal
//     decimal = num.toString().split(".")[1].length;
//   }
//   $(this)
//     .prop("Counter", 0.0)
//     .animate(
//       {
//         Counter: $(this).text()
//       },
//       {
//         duration: 2000,
//         easing: "swing",
//         step: function (now) {
//           $(this).text(parseFloat(now).toFixed(decimal));
//         }
//       }
//     );
// }
// $(window).scroll(function () {
//   var pageTop = $(window).scrollTop();
  // $(".js-num").each(function(){
  //   if ($(this).offset().top < pageTop + $(window).height()) {
  //     $(this).each(countUp1);
  //     console.log(1);
  //     $(window).off("scroll");
  //   }
  // })
  // $(".js-num,.js-nums").each(function(){
  //   if ($(this).offset().top < pageTop + $(window).height()) {
  //     $(this).each(countUp);
  //     console.log(1);
  //     // $(window).off("scroll");
  //   }
  // })
//   var lastScrollTop = 0;
// $(window).scroll(function(event){
//   // var pageTop = $(window).scrollTop();
//    var st = $(window).scrollTop();
//    if (st > lastScrollTop){

//        $(".js-num, .js-nums").each(function(){
//      if ($(this).offset().top > st + $(window).height()) {
//        $(this).each(countUp);
//        console.log(1);
//        // $(window).off("scroll");
//      }
//    })
//    } else {
//        $(".js-num, .js-nums").each(function(){
//      if ($(this).offset().top < st - $(window).height()) {
//        $(this).each(countUp);
//        console.log(1);
//        // $(window).off("scroll");
//      }
//    })
//    }
//    lastScrollTop = st;
// });
// });