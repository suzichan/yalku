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

$("#btnMinRouteList").click(function(e) {
	e.preventDefault();
	if( $("#routesList").hasClass("showed") ) {
		$("#routesList").stop().animate({
		top: "-40px"
		}, '100');
		$("#routesList").removeClass("showed");
		$(this).attr("title","Mostrar");
	} else {
		$("#routesList").stop().animate({
		top: "-165px"
		}, '200');
		$("#routesList").addClass("showed");
		$(this).attr("title","Esconder");
	}
});

$(".connectModalWindow").hide();

$("#linkRegister").click(function(e){
	e.preventDefault();
	$("#registerWrapper").fadeIn("fast");
});

$("#linkLogin").click(function(e){
	e.preventDefault();
	$("#loginWrapper").fadeIn("fast");
});

$(".connectModalWindow .btnClose").click(function(e){
	e.preventDefault();
	$(".connectModalWindow").fadeOut();
});

/***************** start main box home hover effect **************/
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
/***************** finish main box home hover effect **************/

/***************** start box routes list hover effect **************/
$(".routeBox").mouseenter( function(e) {
	e.preventDefault();
	$("ul.description",this).stop().animate({
		bottom: "0px"
		}, '200');
}).mouseleave( function(e) {
	e.preventDefault();
	$("ul.description",this).stop().animate({
		bottom: "-105px"
		}, '100');
} );
/***************** finish box routes list hover effect **************/


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