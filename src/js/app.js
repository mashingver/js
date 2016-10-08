'use strict';

(function ($) {
	$(document).ready(function () {
		var $body = $('body');
		var APP = APP || {};

		APP.detectFeature = function (property) {
			console.log(1);
			var root = document.documentElement;

			if (property in root.style) {
				root.classList.add(property.toLowerCase());
				return true;
			}

			root.classList.add('no-' + property.toLowerCase());
			return false;
		};

		APP.smoothScroll = function () {
			var $links = $('a', '.menu'),
					$pageWrapper = $('.page-wrapper'),
					offsetTop, href;

			$links.each(function (i, link) {
				$(link).click(function (e) {
					href = $(this).attr('href');
					offsetTop = $pageWrapper.children(href).offset().top;
					$body.stop().animate({
							scrollTop: offsetTop
						}, '700',	'swing');
					e.preventDefault();
				});
			});
		};

		// Launch
		APP.smoothScroll();

	});
})(jQuery);
