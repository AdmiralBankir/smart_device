"use strict";window.addEventListener("DOMContentLoaded",function(){for(var e=function(e){var t="+7(___)___-__-__",n=0,r=t.replace(/\D/g,""),l=this.value.replace(/\D/g,"");r.length>=l.length&&(l=r),this.value=t.replace(/./g,function(e){return/[_\d]/.test(e)&&n<l.length?l.charAt(n++):n>=l.length?"":e}),"blur"===e.type?2===this.value.length&&(this.value=""):function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}}(this.value.length,this)},t=function(e,t){e.addEventListener("change",function(){e.checked?t.removeAttribute("disabled"):t.setAttribute("disabled",!0)})},n=document.querySelectorAll("form input[type=tel]"),r=document.querySelectorAll("form input[type=checkbox]"),l=document.querySelectorAll("form button[type=submit]"),c=0;c<n.length;c++)n[c].addEventListener("input",e,!1),n[c].addEventListener("focus",e,!1),n[c].addEventListener("blur",e,!1),t(r[c],l[c])});