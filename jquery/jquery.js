$(document).ready(function () {
    $(".div").hover(function () {
            $(this).css({
                position: "absolute",
                left: "+=100px"
            })
            let position = $(this).css("left");
            let po = parseInt(position.substring(0,position.length-2));
            
            if (po >= window.innerWidth - 50) {
                $(this).css({
                    left: "0px",
                    top: "+=100px"
                });
            }
                    
    });
});

