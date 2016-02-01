;(function($){

	$(function(){
		var body = $("body"),
			menuToggle = $(".ba-menu-toggle");

		menuToggle.click(function(event){
			event.preventDefault();
			body.toggleClass("ba-menu-opened");
		});
	});

})(jQuery);
