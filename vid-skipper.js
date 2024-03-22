// ==UserScript==
// @name         Video Fast Forward/Rewind
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fast forward or rewind a video by 10 seconds using arrow keys
// @author       Your name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        // Check if the key pressed is the left or right arrow key
        if (event.keyCode === 37) { // Left arrow key
            rewindVideo(10); // Rewind by 10 seconds
        } else if (event.keyCode === 39) { // Right arrow key
            event.preventDefault();
            fastForwardVideo(10); // Fast forward by 10 seconds
        }
    });

    // Function to rewind the video by a specified number of seconds
    function rewindVideo(seconds) {
        // Find the video element on the page
        var video = document.querySelector('video');
        if (video) {
            // Check if the video is not already at the beginning
            if (video.currentTime >= seconds) {
                video.currentTime -= seconds; // Rewind the video
            } else {
                video.currentTime = 0; // Set the video to the beginning
            }
        }
    }

    // Function to fast forward the video by a specified number of seconds
    function fastForwardVideo(seconds) {
        // Find the video element on the page
        var video = document.querySelector('video');
        if (video) {
            // Check if the video is not already at the end
            if (video.duration - video.currentTime >= seconds) {
                video.currentTime += seconds; // Fast forward the video
            } else {
                video.currentTime = video.duration; // Set the video to the end
            }
        }
    }
})();
