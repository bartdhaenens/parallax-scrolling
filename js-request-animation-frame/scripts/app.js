(function(){

  document.addEventListener('DOMContentLoaded', function(){

    var scrollEl = document.body; // Element that user scrolls.
    var parallaxContainer = document.getElementById('parallax-container');

    var parallaxGroups = parallaxContainer.querySelectorAll('.parallax-group');
    var parallaxGroupHeight = parallaxGroups[0].offsetHeight;

    var parallaxBgs = parallaxContainer.querySelectorAll('.parallax-bg');
    var numOfParallaxBgs = parallaxBgs.length;
    var parallaxBgHeight = parallaxBgs[0].offsetHeight;

    var diffHeight = parallaxBgHeight - parallaxGroupHeight;
    var parallaxBgOffsets = [];
    var ind, parallaxBg, parallaxBgBoundingRect, parallaxBgOffset, parallaxScrollAmt, transform;

    // Cache initial offsets of parallax backgrounds.
    for(ind = 0; ind < numOfParallaxBgs; ind++){
      parallaxBgBoundingRect = parallaxBgs[ind].getBoundingClientRect();
      parallaxBgOffsets.push(parallaxBgBoundingRect.top + scrollEl.scrollTop);
    }

    var render = function(){

      // Loop thru parallax backgrounds.
      for(ind = 0; ind < numOfParallaxBgs; ind++){

        // Calculate the transformation (`~~` is a bitwise round).
        parallaxBgOffset = scrollEl.scrollTop - parallaxBgOffsets[ind];
        parallaxScrollAmt = ~~(parallaxBgOffset / parallaxGroupHeight * diffHeight);
        transform = 'translate3d(0, ' + parallaxScrollAmt + 'px, 0)';

        // Transform the DOM element.
        parallaxBg = parallaxBgs[ind];
        parallaxBg.style.webkitTransform = transform;
        parallaxBg.style.MozTransform = transform;
        parallaxBg.style.msTransform = transform;
        parallaxBg.style.OTransform = transform;
        parallaxBg.style.transform = transform;

      } // END FOR-LOOP

    }; // END RENDER()

    (function loop(){
      window.requestAnimationFrame(loop);
      render();
    }());

  }); // END DOM CONTENT LOADED

}());
