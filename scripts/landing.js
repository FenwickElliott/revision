var points = document.getElementsByClassName('point');

var animate = function(){
    for (var i=0; i<points.length; i++){
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
};

window.onload = function() {
	if (window.innerHeight> 950 ){
		animate();
	}	
	
	window.addEventListener('scroll', function(){
		if (document.documentElement.scrollTop || document.body.scrollTop >= points[0].getBoundingClientRect().top - window.innerHeight + 200) {
             animate();   
         }
	});
};