/**
 * Created by Mike on 1/18/2016.
 */

var changeMainImage = function () {
    if( (window.matchMedia("(min-width:600px)").matches)){
        $('#mainImage').attr("src", "img/board.jpg");
        $('#mainImage').attr("alt", "a motherboard");
    }
    else
    {
        $('#mainImage').attr("src", "img/sumo.jpg");
        $('#mainImage').attr("alt", "a sumo robot");
    }
};

$(window).resize(function () {
    //resize just happened, pixels changed
    changeMainImage ();
});

$(document).ready(function () {
    changeMainImage ();

});

