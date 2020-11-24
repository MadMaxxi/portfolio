$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>60){
			$('#aside').fadeIn(500)
		}else{
			$('#aside').fadeOut(200)
		}
	});
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();	
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});