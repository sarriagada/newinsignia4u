// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
    $('#slideshow').rhinoslider({
        controlsPlayPause: false,
        autoPlay: true,
        pauseOnHover: true,
        showCaptions: 'always',
        showBullets: 'never',
        showControls: 'always',
        slidePrevDirection: 'toRight',
        slideNextDirection: 'toLeft',
        styles: 'position,top,right,bottom,left,margin-top,margin-right,margin-bottom,margin-left,width,height'
    });

    var biggestHeight = 0;  
    $('.news-item').each(function(){  
        if($(this).height() > biggestHeight){  
            biggestHeight = $(this).height();  
        }  
    });  
    $('.news-item').height(biggestHeight);
});
