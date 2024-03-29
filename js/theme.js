/**
 * .MHV.
 */

/**
 * Error views
 */
 'use strict';

 /**
  * switcher = button reference
  * document.querySelector = css selector
  */
 const switcher = document.querySelector('.btn-theme');
 /**
  * addEventListener = listen event
  * funcition() = action
  * toggle = change attribute from element
  * className = class name from element
  * textContent = change text from css selector
  * console.Log = logger
  */
 switcher.addEventListener('click', function() {
     document.body.classList.toggle('light-theme');
     document.body.classList.toggle('dark-theme');
 
     const className = document.body.className;
     if(className == "light-theme") {
         this.textContent = "Dark";
     } else {
         this.textContent = "Light";
     }
 
     console.log('Theme changed: ' + className);
 });

 window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    console.log('Scroll: ' + header);
 })


 