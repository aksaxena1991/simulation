let init = () =>{
    let wavelengthBtn = $('.wavelengthBtn');
    wavelengthBtn.click(function(){
        wavelengthBtn.removeClass('checked').addClass('unchecked');
        $(this).addClass('checked').removeClass('unchecked');
    });
    let frequencyBtn = $('.frequencyBtn');
    frequencyBtn.click(function(){
        frequencyBtn.removeClass('checked').addClass('unchecked');
        $(this).addClass('checked').removeClass('unchecked');
    });
}
