"use strict";

function cardFaint(type){
    $(".card")
        .addClass("flipping")
        .bind("transitionend webkittransitionend", function () {
            $(".card")
                .unbind("transitionend webkittransitionend")
                .removeClass("flipping");
        });
    setTimeout(function(){
        $(".choice").remove();
        if (type === 'edit'){
            location.replace('https://jtrippy.github.io/screenshoteditor/');
        }
        else {
            location.replace('https://jtrippy.github.io/chatparser/');
        }
    },750);
}

function main(){
    $("#title-container").offset({left:String($("#logo").offset().left + $("#logo").width()/4)});
    $(window).resize(function(){
        $("#title-container").offset({left:String($("#logo").offset().left + $("#logo").width()/4)});
    });
    $("#edit").click(function(){
        cardFaint('edit');
        $("#edit").unbind('click');
    });
    $("#parser").click(function(){
        cardFaint('parser');
        $("#glue").unbind("click");
    });
}


$(document).ready(function(){main()});
