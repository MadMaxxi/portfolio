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

	var $el1 = $('#projects');
	var $el2 = $('#arts');
	var $el3 = $('#about');
	var $el4 = $('#pricelist');
	var $el5 = $('#contact');
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  //var offset = $element.offset().top + $element.height();
  var offset1 = $el1.offset().top;
  var offset2 = $el2.offset().top;
  var offset3 = $el3.offset().top;
  var offset4 = $el4.offset().top;
  var offset5 = $el5.offset().top;

  if (scroll > offset1) {
	$('.active').removeClass('active');
	$("#aside a[href*='projects']").addClass('active');
  }
  if (scroll > offset2) {
	$('.active').removeClass('active');
    $("#aside a[href*='arts']").addClass('active');
  }
  if (scroll > offset3) {
	$('.active').removeClass('active');
    $("#aside a[href*='about']").addClass('active');
  }
  if (scroll > offset4) {
	$('.active').removeClass('active');
    $("#aside a[href*='pricelist']").addClass('active');
  }
  if (scroll > offset5) {
	$('.active').removeClass('active');
    $("#aside a[href*='contact']").addClass('active');
  }
});

});