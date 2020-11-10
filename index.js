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
// let drag = (event) => {
//     console.log('anubhav',event);
//     event.dataTransfer.setData("text", event.target.value);
// }
// let drop = (event) => {}
// let allowDrop = (event) => {
//     event.preventDefault();
// }