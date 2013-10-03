$(document).ready( function(event) {
/***************** inicia reconocimiento de navegador **************/
/*	Aquí se reconoce el tipo de navegador y se guarda en una variable
*/
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
//jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
//jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
//jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
//if(jQuery.browser.mozilla) { alert("yeah"); } //ejemplo de uso de la variable
/***************** termina reconocimiento de navegador **************/



/***************** start box hover effect **************/
$(".mediaBox").mouseenter( function(e) {
	e.preventDefault();
	var alturaMin = 192;
	if (jQuery.browser.mozilla) { 
		alturaMin = 188;
	}

	if( $(this).hasClass("videoItemBox") ) {
		$("iframe",this).stop().animate({
			height: alturaMin
			}, '200');
	}
	$(".mediaInfoBox",this).stop().animate({
		bottom: "0px"
		}, '200');
}).mouseleave( function(e) {
	e.preventDefault();
	var alturaMax = 345;
	if (jQuery.browser.mozilla) { 
		alturaMax = 341;
	}
	if( $(this).hasClass("videoItemBox") ) {
		$("iframe",this).stop().animate({
			height: alturaMax
			}, '200');
	}
	$(".mediaInfoBox",this).stop().animate({
		bottom: "-153px"
		}, '100');
} );
/***************** finish box hover effect **************/

/***************** start carousel **************/
$(".auto .jCarouselLite").jCarouselLite({
    auto: 10000,
    speed: 1000,
    visible: 1,
    btnGo:
    [".imageSliderExt .1", ".imageSliderExt .2",
    ".imageSliderExt .3", ".imageSliderExt .4", 
    ".imageSliderExt .5"]
});

$("#carouselTips button").click(function(e){
	e.preventDefault;
	$("#carouselTips button").removeClass("selected");
	$(this).addClass("selected");
});
/***************** finish carousel **************/


}); //termina document ready