$(".js-sticknav").waypoint(function(direction){

	if (direction=="down") {
		$("nav").addClass("sticky");

	} else{
			$("nav").removeClass("sticky");
	}

});

$(document).ready(function(){
	$(".carousel .img-1").on({
		'click': function(){
			$(".img1 img").fadeOut("slow", function() {
				$('.img1 img').attr('src',"image/testimonial.jpg");
				$(".img1 img").fadeIn("slow");
			});             
		}
	});
	$(".carousel .img-2").on({
		'click': function(){
			$(".img1 img").fadeOut("slow", function() {
				$('.img1 img').attr('src',"image/test2.jpg");
				$(".img1 img").fadeIn("slow");
			});             
		}
	});
	$(".carousel .img-3").on({
		'click': function(){
			$(".img1 img").fadeOut("slow", function() {
				$('.img1 img').attr('src',"image/test3.jpg");
				$(".img1 img").fadeIn("slow");
			});             
		}
	});
});