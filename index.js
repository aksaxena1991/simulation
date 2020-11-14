
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

    var c = document.getElementById('canvas1');
    c.width = 1000;
    c.height = 250;
    var ctx = c.getContext("2d");

    amplitude = 100;
    
    wavelength = 1;
    frequency = 3;
    theta = 999999;
    

    ctx.stroke();
    ctx.beginPath();
    


      window.requestAnimationFrame(animation);





}
function animation(timestamp) {
    window.requestAnimationFrame(animation);
    var canvas = document.getElementById('canvas1');
    canvas.width = 1000;
    canvas.height =250;
    var c = canvas.width / Math.PI / (frequency * 2);
    wave = {
        speed: 0.05
      };
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
  
    theta += wave.speed;
    ctx.beginPath();  
    for (i = 0; i < canvas.width; i += wavelength) {
    var x = amplitude * Math.sin(i / c+ theta );
    ctx.lineTo(i, (canvas.height/2) + x);
    }
  
    ctx.strokeStyle = '#01787F';
    ctx.stroke();
  
    
  
  }


