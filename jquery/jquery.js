$(document).ready(function () {
    $(".div").hover(function () {
            $(this).css({
                position: "absolute",
                left: "+=100px"
            })
            let position = $(this).css("left");
            let po = parseInt(position.substring(0,position.length-2));
            
            if (po >= window.innerWidth - 100) {
                $(this).css({
                    left: "0px",
                    top: "+=100px"
                });
            }
            let hieght = $(this).css("top");
            let h = parseInt(hieght.substring(0,hieght.length-2));
            
            if (h >= window.innerHeight - 200) {
                $(this).css({
                    left: "0px",
                    top: "0px"
                });
            }        
    });
});

