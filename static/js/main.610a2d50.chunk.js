(this["webpackJsonpdonuts-no-4"]=this["webpackJsonpdonuts-no-4"]||[]).push([[0],{15:function(o,e,n){},28:function(o,e,n){"use strict";n.r(e);var t=n(1),a=n.n(t),r=n(9),i=n.n(r),d=(n(15),n(2));window.p5=d;n(17);var c=n(10),s=n(0);function u(){return Object(s.jsxs)("svg",{id:"play-icon",className:"fade-out",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.jsx)("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}var l=n.p+"static/media/donuts-no-4.e88f84d4.ogg",g=n.p+"static/media/donuts-no-4.d2747f51.mid",v=function(){var o=Object(t.useRef)(),e=function(o){o.canvas=null,o.canvasWidth=window.innerWidth,o.canvasHeight=window.innerHeight,o.audioLoaded=!1,o.player=null,o.PPQ=15360,o.loadMidi=function(){c.Midi.fromUrl(g).then((function(e){console.log(e);var n=e.tracks[1].notes;o.scheduleCueSet(n,"executeCueSet1"),o.audioLoaded=!0,document.getElementById("loader").classList.add("loading--complete"),document.getElementById("play-icon").classList.remove("fade-out")}))},o.preload=function(){o.song=o.loadSound(l,o.loadMidi),o.song.onended(o.logCredits)},o.scheduleCueSet=function(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=-1,r=1,i=0;i<e.length;i++){var d=e[i],c=d.ticks,s=d.time;(c!==a||t)&&(d.currentCue=r,o.song.addCue(s,o[n],d),a=c,r++)}},o.setup=function(){o.canvas=o.createCanvas(o.canvasWidth,o.canvasHeight),o.background(0),o.colorMode(o.HSB),o.rectMode(o.CENTER)},o.draw=function(){o.audioLoaded&&o.song.isPlaying()},o.colourMode="rainbow",o.colourModeOptions=["rainbow","hue","monochromatic","complementary","triadic"],o.colourModeHue=0,o.bgColour=0,o.xDonuts=o.random([3,4,6]),o.donutSize=0,o.donutOpacity=0,o.shapeOptions=["rect","ellipse","equilateral","pentagon","hexagon","octagon"],o.rotationOptions=[3,4,6,8,12],o.executeCueSet1=function(e){var n=e.currentCue;if(n<65){var t=6===o.xDonuts?8:4===o.xDonuts?6:4;o.donutSize=o.height/t/64*n,o.donutOpacity=1/64*n}else if(n%32===1){o.xDonuts=o.random([3,4,6]);var a=o.colourModeOptions.slice(),r=6===o.xDonuts?8:4===o.xDonuts?6:4;a.splice(a.indexOf(o.colourMode),1),o.colourMode=o.random(a),o.colourModeHue=o.random(0,360),o.donutSize=o.height/r}n<185?o.background(o.bgColour):o.colourMode="rainbow";for(var i=o.xDonuts%3===0?o.xDonuts/3*2:3,d=1;d<=o.xDonuts;d++)for(var c=1;c<=i;c++){var s=o.random(o.rotationOptions),u=o.random(o.shapeOptions),l=o.width/o.xDonuts*d-o.width/(2*o.xDonuts),g=o.height/i*c-o.height/(2*i),v=null;switch(o.colourMode){case"monochromatic":v=o.color(o.colourModeHue,o.random(50,100),o.random(50,100),o.donutOpacity);break;case"complementary":var h=o.colourModeHue+180>360?o.colourModeHue-180:o.colourModeHue+180,p=o.random([o.colourModeHue,h]);v=o.color(p,o.random(50,100),o.random(50,100),o.donutOpacity);break;case"triadic":var f=o.colourModeHue+120>360?o.colourModeHue-120:o.colourModeHue+120,m=f+120>360?o.colourModeHue-240:o.colourModeHue+120,O=o.random([o.colourModeHue,f,m]);v=o.color(O,o.random(50,100),o.random(50,100),o.donutOpacity);break;default:v=o.color(o.random(0,360),100,100,o.donutOpacity)}o.translate(l,g),o.drawDonut(v,s,u),o.translate(-l,-g)}},o.drawDonut=function(e,n,t){o.stroke(e),o.strokeWeight(.3),o.noFill();for(var a=0;a<2*n;a++){if("rainbow"===o.colourMode){var r=o.color(o.random(0,360),100,100,o.donutOpacity);o.stroke(r)}for(var i=0;i<=5;i++)o[t](0,20,o.donutSize+3*i,o.donutSize+3*i);o.rotate(o.PI/n)}},o.equilateral=function(e,n,t){var a=e-t/2,r=n+t/2,i=e,d=n-t/2,c=e+t/2,s=n+t/2;o.triangle(a,r,i,d,c,s)},o.pentagon=function(e,n,t){t/=2,o.angleMode(o.RADIANS);var a=o.TWO_PI/5;o.beginShape();for(var r=o.TWO_PI/10;r<o.TWO_PI+o.TWO_PI/10;r+=a){var i=e+o.cos(r)*t,d=n+o.sin(r)*t;o.vertex(i,d)}o.endShape(o.CLOSE)},o.hexagon=function(e,n,t){t/=2,o.angleMode(o.RADIANS);var a=o.TWO_PI/6;o.beginShape();for(var r=o.TWO_PI/12;r<o.TWO_PI+o.TWO_PI/12;r+=a){var i=e+o.cos(r)*t,d=n+o.sin(r)*t;o.vertex(i,d)}o.endShape(o.CLOSE)},o.octagon=function(e,n,t){t/=2,o.angleMode(o.RADIANS);var a=o.TWO_PI/8;o.beginShape();for(var r=o.TWO_PI/16;r<o.TWO_PI+o.TWO_PI/16;r+=a){var i=e+o.cos(r)*t,d=n+o.sin(r)*t;o.vertex(i,d)}o.endShape(o.CLOSE)},o.mousePressed=function(){o.audioLoaded&&(o.song.isPlaying()?o.song.pause():(parseInt(o.song.currentTime())>=parseInt(o.song.buffer.duration)&&o.reset(),document.getElementById("play-icon").classList.add("fade-out"),o.canvas.addClass("fade-in"),o.song.play()))},o.creditsLogged=!1,o.logCredits=function(){!o.creditsLogged&&parseInt(o.song.currentTime())>=parseInt(o.song.buffer.duration)&&(o.creditsLogged=!0,console.log("Music By: http://labcat.nz/","\n","Animation By: https://github.com/LABCAT/"),o.song.stop())},o.reset=function(){},o.updateCanvasDimensions=function(){o.canvasWidth=window.innerWidth,o.canvasHeight=window.innerHeight,o.canvas=o.resizeCanvas(o.canvasWidth,o.canvasHeight)},window.attachEvent?window.attachEvent("onresize",(function(){o.updateCanvasDimensions()})):window.addEventListener&&window.addEventListener("resize",(function(){o.updateCanvasDimensions()}),!0)};return Object(t.useEffect)((function(){new d(e,o.current)}),[]),Object(s.jsx)("div",{ref:o,children:Object(s.jsx)(u,{})})};var h=function(){return Object(s.jsx)(v,{})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.610a2d50.chunk.js.map