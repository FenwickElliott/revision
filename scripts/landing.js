var points = document.getElementsByClassName('point');

var animate = function() {

	var reveal = function(i){
		points[i].style.opacity = 1;
		points[i].style.transform = "scaleX(1) translateY(0)";
		points[i].style.msTransform = "scaleX(1) translateY(0)";
		points[i].style.WebkitTransform = "scaleX(1) translate(0)";	
	};
	for(var i=0; i< points.length; i++){
		reveal(i);
	}
};

window.onload = function() {
	if (window.innerHeight> 950 ){
		animate();
	}	
		
	
	window.addEventListener('scroll', function(event){
		if (document.documentElement.scrollTop || document.body.scrollTop >= points[0].getBoundingClientRect().top - window.innerHeight + 200) {
             animate();   
         }
	});
}