var ie = "undefined" != typeof window && window.navigator.userAgent.indexOf("Edge") < 0;
var loadedCount = 0;
class VideoOlusturucu {


    constructor(id, video) {

        this.id = id;
        this.config = {
                        videoUrl: video.videoUrl,
                        imageUrl: video.imageUrl,
                    };


    }

    load() {
                    return new Promise(id => {

                      

                            const video = document.createElement("video");

                            video.src = this.config.videoUrl; 
                            video.loop = "true"; 
                            video.setAttribute("loop", "true");
                            video.muted = "true";
                            video.setAttribute("muted", "");
                            video.setAttribute("id", this.id);
                            //video.crossorigin = "anonymous"; 
                            //video.setAttribute("crossorigin", "anonymous"); 
                            video.preload = "auto";
                            video.autoload = "true";
                            video.type = "video/mp4";
                            video.setAttribute("webkit-playsinline", "true");
                            video.setAttribute("playsinline", "true");
                            video.style.display = "none";
                            document.body.appendChild(video);
                            video.load();
                            

                            const t = (a) => {
                                
                                  loadedCount ++;
                                  //5 yerine Video sayısı girilmeli.
                                  if(loadedCount == 2){

                                      var tl = new TimelineLite();
                                      
                                      //Loading kayarak kapanıyor
                                      /*
                                      var space = $(window).width();
                                      tl.to('.loading-screen', 1, { x: - 2 * space, ease: Power1.easeOut})
                                      */

                                    tl.to('.loading-screen',0.5,{opacity:0,onComplete:function(){ 

                                    $('.menuItem').toggleClass("hidden");

                                    tl
                                    .staggerFromTo('li', 1.5,
                                      {rotationX:-90, transformOrigin:"50% 0%"},
                                      {rotationX:0, ease:Elastic.easeOut}, 0.4)

                                    }});


                                  }
                                  


                            };

                            video.addEventListener("canplay", t);



                         
                    })
                }




}

var video_1 = new class extends VideoOlusturucu {
                constructor() {
                    super("pacific", {
                        videoUrl: "./videos/pacific.mp4",
                        imageUrl: "./images/pacific.jpg",
                    })
                }
            };

var video_2 = new class extends VideoOlusturucu {
                constructor() {
                    super("riviera", {
                        videoUrl: "./videos/riviera.mp4",
                        imageUrl: "./images/riviera.jpg",
                    })
                }
            };



video_1.load();
video_2.load();



