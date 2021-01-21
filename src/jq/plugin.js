import $ from "../../node_modules/jquery/dist/jquery.min";

$(document).ready(function(){
    $(window).scroll(function(){   
        console.log($(this).scrollTop());     
        if ($(this).scrollTop() > 600){
            $(".top").fadeIn();
        }else{
            $(".top").fadeOut();            
        }
    });
    
    $(".top").click(function(){
       $('html,body').animate({
           scrollTop: 0
       }) 
    });


});

