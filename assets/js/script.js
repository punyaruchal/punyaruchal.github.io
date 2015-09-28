$(document).ready(function(){

	//Custom code goes here

	//Call ScrollLT
	$(function(){
		$.scrollIt();
	});

	//Auto row height with viewing screen
	$(window).resize(function() {
    	$('.introduce,.about,.what-i-do,.slide-menu').height($(window).height());
	});
	$(window).trigger('resize');

	//Slide Menu
	$(window).load( function() {

      $(".ninja-btn, .panel-overlay, .slide li a").click( function() {
        $(".ninja-btn, .panel-overlay, .slide").toggleClass("active");
        /* Check panel overlay */
        if ($(".panel-overlay").hasClass("active")) {
          $(".panel-overlay").fadeIn();
        } else {
          $(".panel-overlay").fadeOut();
        }
      }); 
      
    });


    $(window).on("load resize", function() {
      var menuHeightOffset = $(".slide").find("ul").height() /2;

      $(".slide").find("ul").css({
        "margin-top": -menuHeightOffset
      });
    });


});