
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


            
            $('.menuItem').toggleClass("hidden");

            return gsap.from(data.next.container, {
              opacity: 0
            });

          }
        }]
  });
});
