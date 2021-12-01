$(document).ready(function() {
    // get param from url
    var params = new window.URLSearchParams(window.location.search);
    console.log(params.get('answer'));

    // define if answer is true or false
    var answer = params.get('answer');
    
    if (answer == 'true') {
        $('.true').addClass('show');

        if ( typeof(localStorage.getItem("goodAnswers")) === "string" ) {

            var goodAnswers = parseInt(localStorage.getItem("goodAnswers"));

            if ( goodAnswers >= 12 ) {
                localStorage.setItem("goodAnswers", 12);
            } else {
                localStorage.setItem("goodAnswers", ++goodAnswers);
            }

            console.log( goodAnswers );
            
            
            
        } else {
            localStorage.setItem("goodAnswers", 1);
            console.log( goodAnswers );
        }

        $('header').show();


        if ( goodAnswers !== undefined ) {
            $('.good-answers').html(goodAnswers);
        } else {
            $('.good-answers').html(1);
        }
        



        

        

        $('.speaker-wrap, .img-wrap').click(function(){
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

    } else if (answer == 'false') {
        $('.false').addClass('show');



        if ( typeof(localStorage.getItem("goodAnswers")) === "string" ) {

            var goodAnswers = parseInt(localStorage.getItem("goodAnswers"));

            if ( goodAnswers <= 0 ) {
                localStorage.setItem("goodAnswers", 0);
            } else {
                localStorage.setItem("goodAnswers", --goodAnswers);
            }

            console.log( goodAnswers );
            
            
            
        } else {
            localStorage.setItem("goodAnswers", 0);
            console.log( goodAnswers );
        }



        $('header').show();

        if ( goodAnswers !== undefined ) {
            $('.good-answers').html(goodAnswers);
        } else {
            $('.good-answers').html(0);
        }
        

        
        


        $('.speaker-wrap, .img-wrap').click(function(){
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
    



    if ( goodAnswers === 3 || goodAnswers === 6 || goodAnswers === 9 ) {
        $('.grabbel-maar').html('Je hebt '+goodAnswers+' antwoorden goed. Je mag grabbelen!');
    }

    // confetti op laatste goede antwoord
    if ( goodAnswers === 12 ) {
        $('.grabbel-maar').html('Je hebt alle antwoorden goed. Je mag grabbelen!');

        $('#confetti').show();

        (function() {
            var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
          
            NUM_CONFETTI = 350;
          
            COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
          
            PI_2 = 2 * Math.PI;
          
            canvas = document.getElementById("confetti");
          
            context = canvas.getContext("2d");
          
            window.w = 0;
          
            window.h = 0;
          
            resizeWindow = function() {
              window.w = canvas.width = window.innerWidth;
              return window.h = canvas.height = window.innerHeight;
            };
          
            window.addEventListener('resize', resizeWindow, false);
          
            window.onload = function() {
              return setTimeout(resizeWindow, 0);
            };
          
            range = function(a, b) {
              return (b - a) * Math.random() + a;
            };
          
            drawCircle = function(x, y, r, style) {
              context.beginPath();
              context.arc(x, y, r, 0, PI_2, false);
              context.fillStyle = style;
              return context.fill();
            };
          
            xpos = 0.5;
          
            document.onmousemove = function(e) {
              return xpos = e.pageX / w;
            };
          
            window.requestAnimationFrame = (function() {
              return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1000 / 60);
              };
            })();
          
            Confetti = class Confetti {
              constructor() {
                this.style = COLORS[~~range(0, 5)];
                this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
                this.r = ~~range(2, 6);
                this.r2 = 2 * this.r;
                this.replace();
              }
          
              replace() {
                this.opacity = 0;
                this.dop = 0.03 * range(1, 4);
                this.x = range(-this.r2, w - this.r2);
                this.y = range(-20, h - this.r2);
                this.xmax = w - this.r;
                this.ymax = h - this.r;
                this.vx = range(0, 2) + 8 * xpos - 5;
                return this.vy = 0.7 * this.r + range(-1, 1);
              }
          
              draw() {
                var ref;
                this.x += this.vx;
                this.y += this.vy;
                this.opacity += this.dop;
                if (this.opacity > 1) {
                  this.opacity = 1;
                  this.dop *= -1;
                }
                if (this.opacity < 0 || this.y > this.ymax) {
                  this.replace();
                }
                if (!((0 < (ref = this.x) && ref < this.xmax))) {
                  this.x = (this.x + this.xmax) % this.xmax;
                }
                return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
              }
          
            };
          
            confetti = (function() {
              var j, ref, results;
              results = [];
              for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
                results.push(new Confetti());
              }
              return results;
            })();
          
            window.step = function() {
              var c, j, len, results;
              requestAnimationFrame(step);
              context.clearRect(0, 0, w, h);
              results = [];
              for (j = 0, len = confetti.length; j < len; j++) {
                c = confetti[j];
                results.push(c.draw());
              }
              return results;
            };
          
            step();
          
          }).call(this);
          
          //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxZQUFBLEVBQUE7O0VBQUEsWUFBQSxHQUFlOztFQUNmLE1BQUEsR0FBUyxDQUFDLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxHQUFQLENBQUQsRUFBYyxDQUFDLEdBQUQsRUFBSyxFQUFMLEVBQVEsRUFBUixDQUFkLEVBQTJCLENBQUMsR0FBRCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQTNCLEVBQXdDLENBQUMsR0FBRCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQXhDLEVBQXFELENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxFQUFULENBQXJEOztFQUNULElBQUEsR0FBTyxDQUFBLEdBQUUsSUFBSSxDQUFDOztFQUdkLE1BQUEsR0FBUyxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4Qjs7RUFDVCxPQUFBLEdBQVUsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsSUFBbEI7O0VBQ1YsTUFBTSxDQUFDLENBQVAsR0FBVzs7RUFDWCxNQUFNLENBQUMsQ0FBUCxHQUFXOztFQUVYLFlBQUEsR0FBZSxRQUFBLENBQUEsQ0FBQTtJQUNiLE1BQU0sQ0FBQyxDQUFQLEdBQVcsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUM7V0FDakMsTUFBTSxDQUFDLENBQVAsR0FBVyxNQUFNLENBQUMsTUFBUCxHQUFnQixNQUFNLENBQUM7RUFGckI7O0VBSWYsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQWxDLEVBQWdELEtBQWhEOztFQUVBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQUEsQ0FBQSxDQUFBO1dBQUcsVUFBQSxDQUFXLFlBQVgsRUFBeUIs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RUFLZCxJQUFBLENBQUE7QUEvRUEiLCJzb3VyY2VzQ29udGVudCI6WyJOVU1fQ09ORkVUVEkgPSAzNTBcbkNPTE9SUyA9IFtbODUsNzEsMTA2XSwgWzE3NCw2MSw5OV0sIFsyMTksNTYsODNdLCBbMjQ0LDkyLDY4XSwgWzI0OCwxODIsNzBdXVxuUElfMiA9IDIqTWF0aC5QSVxuXG5cbmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIFwid29ybGRcIlxuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0IFwiMmRcIlxud2luZG93LncgPSAwXG53aW5kb3cuaCA9IDBcblxucmVzaXplV2luZG93ID0gLT5cbiAgd2luZG93LncgPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB3aW5kb3cuaCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Jlc2l6ZScsIHJlc2l6ZVdpbmRvdywgZmFsc2VcbiAgXG53aW5kb3cub25sb2FkID0gLT4gc2V0VGltZW91dCByZXNpemVXaW5kb3csIDBcblxucmFuZ2UgPSAoYSxiKSAtPiAoYi1hKSpNYXRoLnJhbmRvbSgpICsgYVxuXG5kcmF3Q2lyY2xlID0gKHgseSxyLHN0eWxlKSAtPlxuICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gIGNvbnRleHQuYXJjKHgseSxyLDAsUElfMixmYWxzZSlcbiAgY29udGV4dC5maWxsU3R5bGUgPSBzdHlsZVxuICBjb250ZXh0LmZpbGwoKVxuXG54cG9zID0gMC41XG5cbmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpIC0+XG4gIHhwb3MgPSBlLnBhZ2VYL3dcblxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGRvIC0+XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcbiAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAoY2FsbGJhY2spIC0+IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG5cblxuY2xhc3MgQ29uZmV0dGlcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAc3R5bGUgPSBDT0xPUlNbfn5yYW5nZSgwLDUpXVxuICAgIEByZ2IgPSBcInJnYmEoI3tAc3R5bGVbMF19LCN7QHN0eWxlWzFdfSwje0BzdHlsZVsyXX1cIlxuICAgIEByID0gfn5yYW5nZSgyLDYpXG4gICAgQHIyID0gMipAclxuICAgIEByZXBsYWNlKClcblxuICByZXBsYWNlOiAtPlxuICAgIEBvcGFjaXR5ID0gMFxuICAgIEBkb3AgPSAwLjAzKnJhbmdlKDEsNClcbiAgICBAeCA9IHJhbmdlKC1AcjIsdy1AcjIpXG4gICAgQHkgPSByYW5nZSgtMjAsaC1AcjIpXG4gICAgQHhtYXggPSB3LUByXG4gICAgQHltYXggPSBoLUByXG4gICAgQHZ4ID0gcmFuZ2UoMCwyKSs4Knhwb3MtNVxuICAgIEB2eSA9IDAuNypAcityYW5nZSgtMSwxKVxuXG4gIGRyYXc6IC0+XG4gICAgQHggKz0gQHZ4XG4gICAgQHkgKz0gQHZ5XG4gICAgQG9wYWNpdHkgKz0gQGRvcFxuICAgIGlmIEBvcGFjaXR5ID4gMVxuICAgICAgQG9wYWNpdHkgPSAxXG4gICAgICBAZG9wICo9IC0xXG4gICAgQHJlcGxhY2UoKSBpZiBAb3BhY2l0eSA8IDAgb3IgQHkgPiBAeW1heFxuICAgIGlmICEoMCA8IEB4IDwgQHhtYXgpXG4gICAgICBAeCA9IChAeCArIEB4bWF4KSAlIEB4bWF4XG4gICAgZHJhd0NpcmNsZSh+fkB4LH5+QHksQHIsXCIje0ByZ2J9LCN7QG9wYWNpdHl9KVwiKVxuXG5cbmNvbmZldHRpID0gKG5ldyBDb25mZXR0aSBmb3IgaSBpbiBbMS4uTlVNX0NPTkZFVFRJXSlcblxud2luZG93LnN0ZXAgPSAtPlxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcbiAgY29udGV4dC5jbGVhclJlY3QoMCwwLHcsaClcbiAgYy5kcmF3KCkgZm9yIGMgaW4gY29uZmV0dGlcblxuc3RlcCgpIl19
          //# sourceURL=coffeescript
    }

    
});