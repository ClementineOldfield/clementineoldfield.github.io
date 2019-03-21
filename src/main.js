function toggleClass() {
    var burger = document.getElementById('hamburger');
    burger.classList.toggle('active');

    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

window.onload = function() {
    var burger = document.getElementById('hamburger');
    burger.classList.remove('active');

    var menu = document.getElementById('menu');
    menu.classList.remove('active');
}

var isScrolling = false;

var walkingUp = new Image();
walkingUp.setAttribute('id', 'little-clem')
walkingUp.src = 'assets/walking-up.gif';

var walkingDown = new Image();
walkingDown.setAttribute('id', 'little-clem')
walkingDown.src = 'assets/walking-down.gif';

var standing = new Image();
standing.setAttribute('id', 'little-clem')
standing.src = 'assets/little-clem.png';

var still = document.getElementById('sprite-still');
var wDown = document.getElementById('sprite-walk-down');
var wUp = document.getElementById('sprite-walk-up');

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
var lastScrollTop = pageYOffset;
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    
    var littleClem = document.getElementById('little-clem');

    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );

   // Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
        console.log( 'Scrolling has stopped.' );
        littleClem.replaceWith(standing);
        littleClem = standing;

        still.classList.add('active');
        wDown.classList.remove('active');
        wUp.classList.remove('active');

	}, 65);
   
   if (st > lastScrollTop){
      // downscroll code
      console.log("scrolling down");
      littleClem.replaceWith(walkingUp);
      littleClem = walkingUp;

      still.classList.remove('active');
      wDown.classList.remove('active');
      wUp.classList.add('active');
   } else if (st < lastScrollTop) {
      // upscroll code
      console.log("scrolling up");
      littleClem.replaceWith(walkingDown);
      littleClem = walkingDown;

      still.classList.remove('active');
      wDown.classList.add('active');
      wUp.classList.remove('active');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);