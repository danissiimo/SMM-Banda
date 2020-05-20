$(document).ready(function(){
    $('.banner').click(function(){
        banner_url=$(this).attr("data-link-url");
        
        if(banner_url!=undefined){
            location.href=banner_url;
        }
    });
    
    $("#ask_popup").popup();
    $("#auth_popup").popup();
    
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
    
    
    
    $('.auth-popup-tab-header').click(function(){
        $('.auth-popup-tab-header').removeClass("sel");
        
        $(this).addClass("sel");
        
        body_dom_id=$(this).attr("data-body-id");
        
        $(".auth-popup-body").hide(100);
        $("#"+body_dom_id).show(100);
    });
    
    
    $('#auth_form_popup').submit(function(e) {
        inp_auth_email=$('#auth_email_popup').val();
        inp_auth_pass=$('#auth_pass_popup').val();
        
    
        if(inp_auth_email.length<5){
            //// Вызов флешки, types: error,warning,info,success
            $.wnoty({
              type: 'error',
              message: 'Заполните email',
              autohideDelay: 5000
            });
            
            return false;
        }
        
        
        if(inp_auth_pass.length<4){
            $.wnoty({
              type: 'error',
              message: 'Введите пароль',
              autohideDelay: 5000
            });
            
            return false;
        }
        
        
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function(res) {
           if(res=='success'){
            location.href="index.html";
           }else{
            $.wnoty({
              type: 'error',
              message: res,
              autohideDelay: 5000
            });
           }
        });
    
        
        //отмена действия по умолчанию для кнопки submit
        return false;
    });
    
    
    
    
    $('#reg_form_popup').submit(function(e) {
        inp_auth_email=$('#reg_email_popup').val();
        inp_auth_login=$('#reg_login_popup').val();
        inp_auth_pass=$('#reg_pass_popup').val();
        inp_auth_rep=$('#reg_pass_rep_popup').val();
        
    
        if(inp_auth_email.length<5){
            //// Вызов флешки, types: error,warning,info,success
            $.wnoty({
              type: 'error',
              message: 'Заполните email',
              autohideDelay: 5000
            });
            
            return false;
        }
        
        
        if(inp_auth_pass.length<4){
            $.wnoty({
              type: 'error',
              message: 'Введите пароль',
              autohideDelay: 5000
            });
            
            return false;
        }
        
        
        if(inp_auth_login.length<4){
            $.wnoty({
              type: 'error',
              message: 'Введите логин',
              autohideDelay: 5000
            });
            
            return false;
        }
        
        
        if(inp_auth_pass!=inp_auth_rep){
            $.wnoty({
              type: 'error',
              message: 'Пароли не совпадают',
              autohideDelay: 5000
            });
            
            return false;
        }
    });
});
