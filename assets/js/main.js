$(document).ready((function(){var e=new window.URLSearchParams(window.location.search);console.log(e.get("answer"));var t=e.get("answer");if("true"==t){if($(".true").addClass("show"),"string"==typeof localStorage.getItem("goodAnswers"))(o=parseInt(localStorage.getItem("goodAnswers")))>=12?localStorage.setItem("goodAnswers",12):localStorage.setItem("goodAnswers",++o),console.log(o);else localStorage.setItem("goodAnswers",1),console.log(o);$("header").show(),void 0!==o?$(".good-answers").html(o):$(".good-answers").html(1),$(".speaker-wrap, .img-wrap").click((function(){$("audio").each((function(){this.pause(),this.currentTime=0})),$(".audio-true.active").removeClass("active");var e=Math.floor(1e3*Math.random()),t=$(".audio-true");t.eq(e%t.length).addClass("active"),$(".audio-true.active").trigger("play")}))}else if("false"==t){var o;if($(".false").addClass("show"),"string"==typeof localStorage.getItem("goodAnswers"))(o=parseInt(localStorage.getItem("goodAnswers")))<=0?localStorage.setItem("goodAnswers",0):localStorage.setItem("goodAnswers",--o),console.log(o);else localStorage.setItem("goodAnswers",0),console.log(o);$("header").show(),void 0!==o?$(".good-answers").html(o):$(".good-answers").html(0),$(".speaker-wrap, .img-wrap").click((function(){$("audio").each((function(){this.pause(),this.currentTime=0})),$(".audio-false.active").removeClass("active");var e=Math.floor(1e3*Math.random()),t=$(".audio-false");t.eq(e%t.length).addClass("active"),$(".audio-false.active").trigger("play")}))}3!==o&&6!==o&&9!==o||$(".grabbel-maar").html("Je hebt "+o+" antwoorden goed. Je mag grabbelen!"),12===o&&($(".grabbel-maar").html("Je hebt alle antwoorden goed. Je mag grabbelen!"),$("#confetti").show(),function(){var e,t,o,i,s,a,r,n,l,d;e=[[85,71,106],[174,61,99],[219,56,83],[244,92,68],[248,182,70]],o=2*Math.PI,i=document.getElementById("confetti"),a=i.getContext("2d"),window.w=0,window.h=0,l=function(){return window.w=i.width=window.innerWidth,window.h=i.height=window.innerHeight},window.addEventListener("resize",l,!1),window.onload=function(){return setTimeout(l,0)},n=function(e,t){return(t-e)*Math.random()+e},r=function(e,t,i,s){return a.beginPath(),a.arc(e,t,i,0,o,!1),a.fillStyle=s,a.fill()},d=.5,document.onmousemove=function(e){return d=e.pageX/w},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},t=class{constructor(){this.style=e[~~n(0,5)],this.rgb=`rgba(${this.style[0]},${this.style[1]},${this.style[2]}`,this.r=~~n(2,6),this.r2=2*this.r,this.replace()}replace(){return this.opacity=0,this.dop=.03*n(1,4),this.x=n(-this.r2,w-this.r2),this.y=n(-20,h-this.r2),this.xmax=w-this.r,this.ymax=h-this.r,this.vx=n(0,2)+8*d-5,this.vy=.7*this.r+n(-1,1)}draw(){var e;return this.x+=this.vx,this.y+=this.vy,this.opacity+=this.dop,this.opacity>1&&(this.opacity=1,this.dop*=-1),(this.opacity<0||this.y>this.ymax)&&this.replace(),0<(e=this.x)&&e<this.xmax||(this.x=(this.x+this.xmax)%this.xmax),r(~~this.x,~~this.y,this.r,`${this.rgb},${this.opacity})`)}},s=function(){var e,o,i;for(i=[],e=1,o=350;e<=o;++e)i.push(new t);return i}(),window.step=function(){var e,t,o,i;for(requestAnimationFrame(step),a.clearRect(0,0,w,h),i=[],t=0,o=s.length;t<o;t++)e=s[t],i.push(e.draw());return i},step()}.call(this))}));
//# sourceMappingURL=main.js.map