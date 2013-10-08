/* globals jQuery, _gaq */

(function($) {
    'use strict';
    function trackVideos() {
        $('video').each(function(index, videoItem) {
            var videoTitle = $(videoItem).attr('data-title');
            addListeners(videoItem, videoTitle);
        });
    }

    function addListeners(video, title){
        video.addEventListener('play', function() {
            trackEvent('Play', title);
        }, false);
        video.addEventListener('pause', function() {
            trackEvent('Pause', title);
        }, false);
        video.addEventListener('ended', function() {
            trackEvent('Ended', title);
        }, false);
    }

    function trackEvent(action, title){
        _gaq.push(['_trackEvent', 'Videos', action, title]);
    }

    $(document).ready(function() {
        trackVideos();
    });
})(jQuery);