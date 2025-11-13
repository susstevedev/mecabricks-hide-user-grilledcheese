// ==UserScript==
// @name        Mecabricks - Remove grilledcheese from forum posts and model comments
// @namespace   Violentmonkey Scripts
// @match       *://*.mecabricks.com/*
// @grant       none
// @version     0.2
// @author      susstevedev
// @description Removes user Grilledcheese from Mecabricks forum posts and comments with CSS.
// @icon        https://www.google.com/s2/favicons?sz=64&domain=mecabricks.com
// @require     https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.includes("forum")) {
        const posts = document.querySelectorAll('.post');
        console.log(posts);
        posts.forEach(c => {
            if(c.querySelector(".user > .username a").innerText.toLowerCase().includes("grilledcheese")) {
              c.style.display = "none";
            }
        });
    } else {
      console.log('not on forum page')
    }

   if(window.location.href.includes("models")) {
        const usernames = document.querySelectorAll('#comments-list-wrapper > .comment');
        console.log(usernames);
        usernames.forEach(c => {
            if(c.querySelector(".comment-data .author").innerText.toLowerCase().includes("grilledcheese")) {
              c.style.display = "none";
            }
        });
    } else {
      console.log('not on model page')
    }
})();
