var isScrolling = false;

var still = document.getElementById('sprite-still');
var wDown = document.getElementById('sprite-walk-down');
var wUp = document.getElementById('sprite-walk-up');

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
var lastScrollTop = pageYOffset;
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var width = window.innerWidth;
    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );

   // Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
      console.log( 'Scrolling has stopped.' );
      
      still.classList.add('active');
      wDown.classList.remove('active');
      wUp.classList.remove('active');

	}, 65);
   
   if (st > lastScrollTop){
      // downscroll code
      console.log("scrolling down");

      if (width >= 600){
         still.classList.remove('active');
         wDown.classList.add('active');
         wUp.classList.remove('active');  
      } else {
         still.classList.remove('active');
         wDown.classList.remove('active');
         wUp.classList.add('active');
      }
   } else if (st < lastScrollTop) {
      // upscroll code
      console.log("scrolling up");

      if (width >= 600){
         still.classList.remove('active');
         wDown.classList.remove('active');
         wUp.classList.add('active');  
      } else {
         still.classList.remove('active');
         wDown.classList.add('active');
         wUp.classList.remove('active');
      }
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);