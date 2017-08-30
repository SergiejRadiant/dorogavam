$(function() {

	jQuery(document).ready(function(){

		/* при клике на чекбоксе меняем его вид и значение */
		jQuery(".checkbox").mousedown(function(){ 
			changeCheck(jQuery(this));
		});

		/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
		jQuery(".checkbox").each(function() {
			changeCheckStart(jQuery(this));
		});

	});

	// функция смены вида и значения чекбокса
	// el - span контейнер дял обычного чекбокса
	// input - чекбокс

	function changeCheck(el) {
		var el = el,
		input = el.find("input").eq(0);
		if(!input.attr("checked")) {
			el.css("display","inline-block");
			input.attr("checked", true)
		} else {
			el.css("display","none");   
			input.attr("checked", false)
		}
		return true;
	};

	// если установлен атрибут checked, меняем вид чекбокса

	function changeCheckStart(el) {
		var el = el,
		input = el.find("input").eq(0);
		if(input.attr("checked")) {
			el.css("display","inline-block");
		}
		return true;
	};

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
