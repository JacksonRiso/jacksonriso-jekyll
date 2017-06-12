//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){

//PORTFOLIO PAGE

	//URL PARAMETERS FUNCTION
	function getParameter(name) {
    	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}


	//GRAB DATA VALUE FROM PORTFOLIO MENU ITEM
	$('.portfolio_menu_item').click(function(){

		$('.portfolio_showcase').removeClass('selected_portfolio_showcase');
		$('.portfolio_items').removeClass('selected_portfolio_items');

		//CHANGE CLASS
		$('.portfolio_menu_item').removeClass('special_portfolio_menu_item');
		$(this).addClass('special_portfolio_menu_item');

		//GET DATA ATTRIBUTE
		var menuValue = $(this).data('menu');

		//ONLY SHOW ITEMS WITH THAT VALUE
		$('.portfolio_item').not('.' + menuValue).fadeOut();
		$('.portfolio_item.' + menuValue).fadeIn();

	});


	//SHOW PORTFOLIO SHOWCASE
	$(".portfolio_item").click(function(){

		select = $(this).data('select');
		$('.portfolio_items').addClass('selected_portfolio_items');
		$('.portfolio_showcase[data-select="' + select + '"]').addClass('selected_portfolio_showcase');

		var image = $('.portfolio_showcase[data-select="' + select + '"]').find('.showcase_image').data('image');
		var image = "url('images/portfolio/" + image + "')";
		$('.portfolio_showcase[data-select="' + select + '"]').find('.showcase_image').css('background', image);


	});


	//GET URL PARAMETERS FOR PORTFOLIOS - SHOWCASE CORRECT ITEMS
	var menu = getParameter('menu');
	if(menu){
		$('[data-menu="' + menu + '"]').trigger('click');
	}


});
