var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    if (window.screen.width > 768) {
        // everything else (desktop)
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
    }
};

window.onload = function () {
    let logo = document.getElementById("scroll-to-top");
    console.log(logo);
    logo.addEventListener("click", scrollToTop);

    document
        .getElementById("footer-logo-container")
        .addEventListener("click", scrollToTop);
};

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
