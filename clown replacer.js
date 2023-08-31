// ==UserScript==
// @name         Clown Replacer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tumblr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @grant        none
// ==/UserScript==

// ok so credit to this lovely stack overflow person here https://stackoverflow.com/a/6847290 for the image replacement
// TO USE: REPLACE LINE 23 WITH AN IMAGE SOURCE OF YOUR CHOOSING . easiest way to do this is to find ur image online , right click and copy image link


var clown = document.getElementsByClassName("RWr4x");

for( var i = 0; i < clown.length; i++ )
{
    // true for all img tags with the fb_logo class name
    if( clown[ i ].tagName == "IMG" )
    {
        clown[ i ].src = "https://cdn141.picsart.com/c8ba8090-fce8-4488-ae01-062760ae6f22/385401777005211.png"
    }
}
