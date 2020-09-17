
$(function() {
  barba.init({
    transitions: [{
          name: 'opacity-transition',
          leave(data) {
            //alert("leave");
            //console.log(data);
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            
            if(data.next.namespace == "burgers"){
              videoDegistir("riviera");
            } else if(data.next.namespace == "home"){
              videoDegistir("pacific");
            }


            var tl = new TimelineMax({repeat:-1,repeatDelay:2})
    .to('.alignright',0.5,{rotation:30})
    .to('.alignright',5,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});

            
            $('.menuItem').toggleClass("hidden");

            return gsap.from(data.next.container, {
              opacity: 0
            });

          }
        }]
  });
});
