"use strict";!function(){var t=document.querySelector(".modal"),a=document.querySelector(".overlay"),e=document.querySelector(".page-header__call-btn"),c=t.querySelector(".modal__button-close");e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("modal--active"),a.classList.add("overlay--active")}),c.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("modal--active"),a.classList.remove("overlay--active")})}();