$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 60) {
            $(".headers").addClass("headeractive");
        } else if ($(window).scrollTop() === 0){
            $(".headers").removeClass("headeractive");
        }else{
             //remove the background property so it comes transparent again (defined in your css)
           $(".headers").removeClass("headeractive");
        }
    });
});