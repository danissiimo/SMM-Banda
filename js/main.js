$(document).ready(function(){
    $('.banner').click(function(){
        banner_url=$(this).attr("data-link-url");
        
        if(banner_url!=undefined){
            location.href=banner_url;
        }
    });
    
    $("#ask_popup").popup();
    
    $('nav').click(function(){
         if ($(window).width() < 999) {
            $(this).children("ul").toggleClass("menu-show");
         }
    });
    
    $('.header-socials').click(function(){
         $(this).children(".main-page-socials").slideToggle(200);
    });
    
    
    if ($(window).width() < 500) {
        setTimeout(scroll_top_2_bread,100);
    }
    
    function scroll_top_2_bread(){
        breadcrumbs_pos=$('.breadcrumbs').position();
        $(document).scrollTop(breadcrumbs_pos.top);
    }
});
