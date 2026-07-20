(function ($) {
    "use strict";
    

    function content_ready_scripts() {
		$('[data-background]').each(function() {
			$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
		});

		const swiper = new Swiper(".agt-sp-client-slider-6" , {
			speed: 500,
			spaceBetween: 50,
			loop: true,
			pagination: {
				el: ".agt-sp-pagination-6",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				480: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 6,
				},
				1600: {
					slidesPerView: 7,
				},
				1800: {
					slidesPerView: 7,
				},
			},
		})
	}
	
	$(window).on('elementor/frontend/init', function() {
	
		if (elementorFrontend.isEditMode()) {
			
			elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
				content_ready_scripts();
			});
	
		} else {
			elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
				content_ready_scripts();
			});
		}
	
	});
	jQuery(document).ready(function ($) {
		$('select[data-setting="testimonial_style"]').each(function () {
			$(this).wrap('<div class="image-select-dropdown"></div>');
			$(this).after('<div class="selected-style"></div>');
	
			let updateImage = function (select) {
				let selectedOption = $(select).val();
				let imageMap = {
					'style1': 'https://your-site.com/path-to-style1-image.jpg',
					'style2': 'https://your-site.com/path-to-style2-image.jpg',
				};
				$(select).next('.selected-style').html('<img src="' + imageMap[selectedOption] + '" />');
			};
	
			updateImage(this);
	
			$(this).on('change', function () {
				updateImage(this);
			});
		});
	});
	

})(jQuery);