/**
 * Created by Mike on 1/18/2016.
 */
/*jslint browser: true*/ /*global  $*/

var silon_speed = 2;
var update_rate = 5;
var right_bound = 0;
var left_bound = 0;
var silon_track_left = 0;
var silon_width = 0;
var silon_quarter_width = 0;
var slide_right = true;
var timer = null;

var updateSilon = function () {
    var head = $(".silon");
    var x = parseInt(head.offset().left);

    //test if going right
    if(slide_right) {
        //test if going to hit right edge
        if (x < right_bound) {
            x = x + silon_speed;
        }
        else {
            //set not going right if it was going to hit
            slide_right = false;
        }
    }
    //test if not going right
    if(!slide_right)
    {
        //test if greater than the left edge
        if(x > left_bound)
        {
            x = x - silon_speed;
        }
        else
        {
            //change direction to right
            slide_right = true;
        }
    }

    $(".silon").offset({left: x});
}

var initSilon = function () {
    slide_right = true;
    silon_width = $(".silon").width();
    silon_quarter_width = silon_width / 4;
    //get left of row silon is in
    silon_track_left = parseInt($(".silon_track").offset().left);
    //get right of row silon is in
    right_bound = $(".silon_track").width() + silon_track_left;
    //set left bound
    left_bound = silon_track_left - silon_quarter_width;

    //set starting position of silon
    $(".silon").offset({left: left_bound});

    //if timer running, stop it
    if(timer !== null)
    {
        timer.stop();
        timer = null;
    }
    timer = setInterval(updateSilon,update_rate);
}

$(window).resize(function () {
    //resize just happened, pixels changed
    initSilon();
});

$(document).ready(function () {
    initSilon();
});

