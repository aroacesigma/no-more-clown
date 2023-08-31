// ==UserScript==
// @name         The Better Clown
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tumblr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @grant        none
// ==/UserScript==

// ok so credit to this lovely stack overflow person here https://stackoverflow.com/a/6847290 for the image replacement
// this is the version i made cause probably only my mutuals are gonna see this . nikolai my beloved . the silly . the better clown .


var clown = document.getElementsByClassName("RWr4x");

for( var i = 0; i < clown.length; i++ )
{
    // true for all img tags with the fb_logo class name
    if( clown[ i ].tagName == "IMG" )
    {
        clown[ i ].src = "https://64.media.tumblr.com/f08c547085f506f9412a0a298f81577c/44df63d3934c3aaa-4d/s500x750/4347f5e2be5aca157779f656da069b4f75945387.png"
    }
}
