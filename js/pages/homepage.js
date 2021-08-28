document.addEventListener("DOMContentLoaded", () => {
    const wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
    window.addEventListener("scroll", () => {
        const appNav = document.getElementById("app-nav");
        if (window.scrollY >0){
            appNav.style.backgroundColor ="#141C3D";
            appNav.style.transform = "scale(0.9)";
            appNav.style.top = "-5px"
        }
        else{
            appNav.style.backgroundColor ="transparent"
            appNav.style.transform = "scale(1)"
        }
    })
})