"use strict";document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".services__list-item--lazy");var n=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.remove("services__list-item--lazy"),n.unobserve(t)}})});e.forEach(function(e){n.observe(e)})}});