$(document).ready(function(){
    $("<input type='button' value='+' class='inp_num_plus'>").insertAfter('input[type=number]');
    $("<input type='button' value='-' class='inp_num_minus'>").insertAfter('input[type=number]');


    $('.inp_num_minus').click(function(){
        inp_obj=$(this).prev('input');
        
        cur_val=parseInt($(inp_obj).val());
        
        new_val=cur_val-1;
        
        $(inp_obj).val(new_val).change();
        
        
    });
    
    
    
    $('.inp_num_plus').click(function(){
        inp_obj=$(this).prev().prev('input');
        
        cur_val=parseInt($(inp_obj).val());
        
        new_val=cur_val+1;
        
        $(inp_obj).val(new_val).change();
    });
});