(function ($) {
  "use strict";


/*----------------------------------
  mobile nav
-----------------------------------*/
  $('.navbar-toggler').on('click', function (e) {
    $('.navbar-inner').toggleClass('active');
    $('.navbar-toggler-icon').toggleClass('active');
    $('.navbar').toggleClass('active');
    $('body').toggleClass('canvas-menu-open');
    e.stopPropagation();
});

$('.navbar-toggler, .navbar-toggler-close').on('click', function (e) {
  $('.navbar-toggler-icon-2').toggleClass('active');
  e.stopPropagation();
});

// Close on outside click
$('body, .navbar-toggler-close').on("click", function (e) {
    $(".navbar").removeClass("active");
    $(".navbar-inner").removeClass("active");
    $(".navbar-toggler-icon").removeClass("active");
    $(".navbar-toggler-icon-2").removeClass("active");
    $('body').removeClass('canvas-menu-open');
});

$('body').on("click",".navbar-inner, .dropdown-toggle", function () {
  e.stopPropagation();
  e.preventDefault();
});

/* ---------------------------------------------
select option
--------------------------------------------- */
$('.language-dropdown >li').on('click', function (e) {
  $('.language-dropdown').toggleClass('language-dropdown-open');
  $('.language-item').toggleClass('language-item-open');
  e.stopPropagation();
});

// Close on outside click
$('body, .language-item li a, .cart-trigger').on("click", function (e) {
    $(".language-item").removeClass("language-item-open");
});

$(".language-item").on("click", function (e) {
e.stopPropagation();
});

/* ---------------------------------------------
Shopping Cart
--------------------------------------------- */
$('.cart-trigger').on('click', function (e) {
  $(this).toggleClass('active');
  $('.shopping-cart').toggleClass('cart-open');
  e.stopPropagation();
});

// Close on outside click
$('body, .language-dropdown >li').on("click", function (e) {
    $(".shopping-cart").removeClass("cart-open");
});

$(".shopping-cart").on("click", function (e) {
e.stopPropagation();
});


 


/*----------------------------------
    background image holder
-----------------------------------*/
function backgroundHolder() {
  $(".background-image-holder").each(function () {
      var thesrc = $(this).attr('src');
      $(this).parent().css("background-image", "url(" + thesrc + ")");
      $(this).parent().css("background-repeat", "no-repeat");
      $(this).hide();
  });
}
backgroundHolder();




})(jQuery);

