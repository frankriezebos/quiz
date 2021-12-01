$(document).ready(function() {
    var answer = true;
    
    console.log(goodAnswers);


    if (answer == true) {
        $('.true').addClass('show');

        localStorage.setItem('goodAnswers', 1);
        
        var goodAnswers = parseInt(localStorage.getItem('goodAnswers'));

        if (goodAnswers !== null) {
            localStorage.setItem('goodAnswers', ++goodAnswers);
        }

        $('.speaker-wrap').click(function(){
            $('audio').each(function(){
                this.pause(); // Stop playing
                this.currentTime = 0; // Reset time
            }); 

            $('.audio-true.active').removeClass('active');
            var random = Math.floor(Math.random() * 1000);
            var $audioTrue = $(".audio-true");
            $audioTrue.eq(random % $audioTrue.length).addClass("active");
            $('.audio-true.active').trigger('play');
        });

    } else if (answer == false) {
        $('.false').addClass('show');

        localStorage.setItem('goodAnswers', 0);
        
        var goodAnswers = parseInt(localStorage.getItem('goodAnswers'));

        if (goodAnswers !== null) {
            localStorage.setItem('goodAnswers', --goodAnswers);
        }

        $('.speaker-wrap').click(function(){
            $('audio').each(function(){
                this.pause(); // Stop playing
                this.currentTime = 0; // Reset time
            }); 

            $('.audio-false.active').removeClass('active');
            var randomFalse = Math.floor(Math.random() * 1000);
            var $audioFalse = $(".audio-false");
            $audioFalse.eq(randomFalse % $audioFalse.length).addClass("active");
            $('.audio-false.active').trigger('play');
        });
    }
    



    

    
});