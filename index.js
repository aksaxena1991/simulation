let init = () =>{
    let allRadioBtns = $('.radioBtn');
    allRadioBtns.click(function(){
        allRadioBtns.removeClass('checked').addClass('unchecked');
        $(this).addClass('checked').removeClass('unchecked');
    })
}