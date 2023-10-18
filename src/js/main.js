// -- このクラスを持ったタグをクリックしたら実行。ウィンドウをフェードアウト --

const hamburger = document.querySelector(".js_humburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is_active");
    navigation.classList.toggle("is_active");
    body.classList.toggle("is_active");
})

const navLinks = document.querySelectorAll(".l_header-nav_link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
    });
});

$(".privacy-header").on("click", function () {
    $(".section").fadeOut();
    return false;
});
