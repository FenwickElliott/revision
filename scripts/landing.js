var points = document.getElementsByClassName('point');

//var animate = function(){
//    for (var i=0; i<points.length; i++){
//        points[i].style.opacity = 1;
//        points[i].style.transform = "scaleX(1) translateY(0)";
//        points[i].style.msTransform = "scaleX(1) translateY(0)";
//        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
//    }
//};

var animate = function(){
	var reveal = function(){
		$(this).css({
			opacity: 1,
			transform: 'scaleX(1) translateY(0)'
		});
	};
	$.each($('.point'), reveal);
};

$(window).load(function() {

	if ($(window).height() > 950) {
		animate();
	}	

	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= $('.point').offset().top - $(window).height() + 200) {
			animate();
		}
	});
	
//	window.addEventListener('scroll', function(){
//		if (document.documentElement.scrollTop || document.body.scrollTop >= points[0].getBoundingClientRect().top - window.innerHeight + 200) {
//             animate();   
//         }
//	});
});