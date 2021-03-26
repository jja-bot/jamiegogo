/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */



	function myFunction(x) {
		if (x.matches) {
			var topOf = 50
		} else {
			var topOf = 350
		}
	}

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

});

/* ========================================================================= */
	/*	contact jqery sel
	/* =========================================================================  */

//當sel值改變時觸發事件
$("#sel").change(function(){
  //此處用switch case來作為判斷式
  //並以sel各個Option的Value作為判斷條件
  //注意這邊有用parseInt將value值轉為整數型態否則會出現錯誤
  switch (parseInt($(this).val())){
  //默認行為，可以不寫
  default:
  //當value值為0時刪除sel2的Option Item
  case "請選擇地區": 
      $("#sel2 option").remove();
      break;
  //當value值為1時刪除sel2的Option Item 
  //並用陣列及each迴圈新增sel2的Option Item選項
  case "北區": 
      $("#sel2 option").remove();
      var array = [ "華強維修廠(林口)", "維修廠1", "維修廠2", "維修廠3", "維修廠4" ];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#sel2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
  case "中區": 
      $("#sel2 option").remove();
      var array = [ "維修廠1", "維修廠2", "維修廠3", "維修廠4", "維修廠5", "維修廠6", "維修廠7" ];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#sel2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
  case "南區": 
      $("#sel2 option").remove();
      var array = [ "維修廠1", "維修廠2", "維修廠3", "維修廠4", "維修廠5", "維修廠6", "維修廠7" ];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#sel2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;		  
case "花東區": 
      $("#sel2 option").remove();
      var array = [ "維修廠1", "維修廠2", "維修廠3", "維修廠4", "維修廠5", "維修廠6", "維修廠7" ];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#sel2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;			  
		  
 }
});
