var swiper=new Swiper(".menu-Swiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},center:!0,centeredSlides:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},990:{slidesPerView:4,spaceBetween:30},1400:{slidesPerView:5,spaceBetween:40},1600:{slidesPerView:5,spaceBetween:50}},loop:!0}),swiper2=new Swiper(".menu-slider-Swiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},990:{slidesPerView:2,spaceBetween:60},1400:{slidesPerView:3,spaceBetween:60},1600:{slidesPerView:4,spaceBetween:70}},pagination:{el:".swiper-pagination",clickable:!0},loop:!0}),swiper3=new Swiper(".outlets-Swiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},990:{slidesPerView:2,spaceBetween:60},1400:{slidesPerView:3,spaceBetween:60},1600:{slidesPerView:3,spaceBetween:60}},loop:!0}),swiper4=new Swiper(".guest-Swiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:40},768:{slidesPerView:3,spaceBetween:50},990:{slidesPerView:3,spaceBetween:50},1400:{slidesPerView:4,spaceBetween:30},1600:{slidesPerView:5,spaceBetween:20}},loop:!0});$(".owl-carousel").owlCarousel({loop:!0,margin:10,dots:!1,nav:!0,mouseDrag:!1,autoplay:!0,animateOut:"fadeOut",responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("input").focus((function(){$(this).parent().addClass("active"),$("input").focusout((function(){""==$(this).val()?$(this).parent().removeClass("active"):$(this).parent().addClass("active")}))})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")})),$('a[href^="#"]').on("click",(function(e){var s=this.hash,i=$(s);$("html, body").stop().animate({scrollTop:i.offset().top-70},200,"swing",(function(){window.location.hash=s}))}));const openBtn=document.querySelector("#hamburger-1"),closeBtn=document.querySelector("#hamburger-2"),nav_list=document.querySelector(".navigation__list"),overlay=document.querySelector(".overlay"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.add("active"),nav_list.classList.add("active"),overlay.classList.remove("hidden")}function mobileMenuClose(){openBtn.classList.remove("active"),nav_list.classList.remove("active"),overlay.classList.add("hidden")}overlay.classList.add("hidden"),openBtn.addEventListener("click",mobileMenu),closeBtn.addEventListener("click",mobileMenuClose),overlay.addEventListener("click",mobileMenuClose),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()})),$("#scroll").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}));