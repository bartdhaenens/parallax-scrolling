/**
* This script is meant to set the background div's height to
* match the window's initial height, in order to prevent it
* from dynamically changing when the browser hides/shows its
* address bar as the user scrolls (left dynamic, it creates
* an undesirable jumping effect). Jumping is prevented in
* Chrome but is only lessened in Safari, due to Safari also
* adding a second navigation bar at the bottom.
*/

(function(){

  document.addEventListener('DOMContentLoaded', function(){

    // var height = window.outerHeight;

    // `window.outerHeight` is broken (returns `0`) in iOS 8.
    // https://developer.apple.com/library/ios/releasenotes/General/RN-iOSSDK-8.0/
    // Use `innerHeight` instead.
    var height = window.innerHeight;

    // Add 70 pixels for the address bar
    // (wouldn't need if could use outer height).
    height += 70;

    var back = document.getElementsByClassName('back')[0];
    back.style.height = height + 'px';

  });

}());
