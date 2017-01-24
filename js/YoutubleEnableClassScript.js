jQuery(function(){
      jQuery("a.video").YouTubePopUp();
      jQuery("a.video-autoplayOff").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
    });