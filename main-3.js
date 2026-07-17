/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
	"use strict";


	window.addEventListener('load', function(){

		// hero-2 add active class 
		const ct_shop_wrp_1 = gsap.timeline(
			{
				scrollTrigger: {
					trigger: ".arv-hero-2-main-wrap",
					scrub: 1,
					start: "top 200%",
					end: "bottom bottom",
					toggleClass: "active",
					toggleActions: "play none none reverse",
					once: true,
				}
			}
		);


	})


	// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.search_box_active').removeClass('active');
			$('.overlay').removeClass('active');
		}
	});







	// title animation 
	$(document).ready(function() {
		if($('.arv-split-text').length) {
			var ctsplit1 = $(".arv-split-text");

			if(ctsplit1.length == 0) return; 
			gsap.registerPlugin(SplitText);

			ctsplit1.each(function(index, el) {
			
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
			
				if( $(el).hasClass('arv-split-color-ch') ){
					gsap.set(el.split.chars, {
						opacity: .3,
					});
				}
			
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						end: "top 50%",
						markers: false,
						scrub: 1,
					},
			
					x: "0",
					y: "0",
					opacity: 1,
					duration: 1.5,
					stagger: 0.2,
				});
			
			});

		}

		var st = $(".arv-split-text-2");

		if(st.length == 0) return;
		st.each(function(index, el) {
		  el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		  });
		
		  if( $(el).hasClass('arv-split-threed') ){
			gsap.set(el.split.chars, {
			  opacity: 1,
				transformOrigin: "50% 100%",
				transform: "rotateX(90deg)",
				ease: "power1.out",
				duration: 1, 
			});
		  }

		  if( $(el).hasClass('lbt-split-threed-2') ){
			gsap.set(el.split.chars, {
			  opacity: 1,
				transformOrigin: "50% 100%",
				transform: "rotateX(90deg)",
				ease: "power2.out",
				duration: 1, 
			});
		  }

		  if( $(el).hasClass('lbt-split-threed-3') ){
			gsap.set(el.split.chars, {
			  opacity: 1,
				transformOrigin: "50% 100%",
				x: "40",
				ease: "Back.easeOut",
				duration: 1, 
			});
		  }

		  if ($(el).hasClass("lbt-split-in-rotate")) {
			gsap.set(el.split.chars, {
				opacity: 0,
				rotateX: "50deg",
				ease: "circ.out"
			});
		  }

		  if ($(el).hasClass("lbt-split-in-fade")) {
			gsap.set(el.split.chars, {
				opacity: 0,
				ease: "Back.easeOut"
			});
		  }

		  if ($(el).hasClass("lbt-split-in-scale")) {
			gsap.set(el.split.chars, {
				opacity: 0,
				rotateX: "50deg",
				ease: "circ.out"
			});
		  }
		  
	
		  el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
			  trigger: el,
			  start: "top 90%",
			},
			ease: "power1.out",
			transform: "rotateX(0deg)",
			color: 'inherit',
			opacity: 1,
			duration: 1, 
			stagger: 0.02,
		  })
		
		  
		});

	});


	// hero-1 slider 
	let arvHero1 = new Swiper('.arv-hero-1-slider', {
		loop: true,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: ".arv-hero-1-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".arv-hero-1-next",
			prevEl: ".arv-hero-1-prev",
		},
	});

	// hero-2 slider 
	let arvHero2 = new Swiper('.arv-hero-2-slider', {
		loop: true,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".arv-hero-2-next",
			prevEl: ".arv-hero-2-prev",
		},
	});

	// testimonial-1 thumb slider 
	let arvTestimonial1Thumb = new Swiper(".arv-testimonial-1-thumb", {
		watchSlidesProgress: false,
		slidesPerView: 1,
		speed: 500,
		allowTouchMove: false,
	});

	// testimonial-1 slider 
	let arvTestimonial1 = new Swiper('.arv-testimonial-1-slider', {
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		slidesPerView: 1,
		thumbs: {
			swiper: arvTestimonial1Thumb,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: ".arv-testimonial-1-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".arv-testimonial-1-next",
			prevEl: ".arv-testimonial-1-prev",
		},
	});


	// testimonial-2 slider 
	let arvTestimonial2 = new Swiper('.arv-testimonial-2-slider', {
		loop: "true",
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".arv-testimonial-2-next",
			prevEl: ".arv-testimonial-2-prev",
		},
	});


	// client-1 card hover active toggle 
	let client1ActiveItem = $(".arv-client-1-card");
  
    client1ActiveItem.mouseover(function () {
      client1ActiveItem.removeClass("active");
      $(this).addClass("active");
    });


	// client-1 card hover active toggle 
	let feature2ActiveItem = $(".arv-feature-2-item");
  
    feature2ActiveItem.mouseover(function () {
      feature2ActiveItem.removeClass("active");
      $(this).addClass("active");
    });


	// active class added 
	const subTitle1 = gsap.utils.toArray('.arv-subtitle-1');
	subTitle1.forEach(item => {
		gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				scrub: 1,
				start: "top 80%",
				end: "bottom bottom",
				toggleClass: "active",
				toggleActions: "play none none reverse",
				once: true,
			}
		});
	});

	
	// active class added 
	const boxWrap = gsap.utils.toArray('.arv-class-add');
	boxWrap.forEach(item => {
		gsap.to(item, {
			scrollTrigger: {
				trigger: item,
				scrub: 1,
				start: "top 80%",
				end: "bottom bottom",
				toggleClass: "active",
				toggleActions: "play none none reverse",
				once: true,
			}
		});
	});


	gsap.utils.toArray('.arv-about-1-line').forEach((el, index) => { 
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		arspin
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { height: 0, opacity: 0}, { height: 120, duration: 2, opacity: 1, immediateRender: false})
	});

	// team-1 title
	gsap.utils.toArray('.arv-team-1-title').forEach((el, index) => { 
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		arspin
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { x: 120, opacity: 0}, { x: 0, duration: 2, opacity: 1, immediateRender: false})
	});

	// team-1 title
	gsap.utils.toArray('.arv-team-1-title-bold').forEach((el, index) => { 
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		arspin
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { x: -120, opacity: 0}, { x: 0, duration: 2, opacity: 1, immediateRender: false})
	});


	// footer-1 title
	gsap.utils.toArray('.footer_1_title_1').forEach((el, index) => { 
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		arspin
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { x: 120, opacity: 0}, { x: 0, duration: 2, opacity: 1, immediateRender: false})
	});

	// footer-1 title
	gsap.utils.toArray('.footer_1_title_2').forEach((el, index) => { 
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		arspin
		.set(el, {transformOrigin: 'center center'})
		.fromTo(el, { x: -120, opacity: 0}, { x: 0, duration: 2, opacity: 1, immediateRender: false})
	});



	// work2 title
	const work2Title = document.querySelector('.arv-work-2-title');
    if(work2Title) {
		const chars = work2Title.textContent.split('');
		work2Title.textContent = '';

		// Wrap each character in a span
		chars.forEach(char => {
		const span = document.createElement('span');
		span.textContent = char;
		span.className = 'char';
		work2Title.appendChild(span);
		});
	}


	
	// hero-2 title
	const hero2Titles = document.querySelectorAll('.arv-hero-2-title-nich');
	hero2Titles.forEach(hero2Title => {
	const originalText = hero2Title.textContent;
	hero2Title.textContent = ''; // Clear original text

	// Split the text into words
	const words = originalText.split(' ');

		// Wrap each word in nested spans and append to the hero2Title
		words.forEach((word, index) => {
			// Create the outer span with class 'split-word'
			const outerSpan = document.createElement('span');
			outerSpan.className = 'split-word';

			// Create the inner span
			const innerSpan = document.createElement('span');
			innerSpan.textContent = word;

			// Nest the inner span inside the outer span
			outerSpan.appendChild(innerSpan);

			// Append the outer span to the hero2Title
			hero2Title.appendChild(outerSpan);

			// Add space unless it's the last word
			if (index < words.length - 1) {
			hero2Title.appendChild(document.createTextNode(' '));
			}
		});
	});




	// scroll slide left animation 
	gsap.utils.toArray('.scroll_left_slide').forEach((el, index) => { 
		let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 0,
			start: "top 80%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
		})
		
		tlcta
		.from(el, { x: "-=200"}, {x: 0, duration: 1, immediateRender: false})
	})



	// scroll slide right animation 
	gsap.utils.toArray('.scroll_right_slide').forEach((el, index) => { 
		let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 0,
			start: "top 80%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
		})
		
		tlcta
		.from(el, { x: "200"}, {x: 0, duration: 1, immediateRender: false})
	})



	// image-paralax-animation-start
	gsap.utils.toArray(".image-pllx").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			yPercent: -15,
			scale: 1.07,
			ease: "none",
		  }).to(image, {
			yPercent: 15,
			scale: 1.07,
			ease: "none",
		  }); 
	});

	// image-paralax-animation-start 2
	gsap.utils.toArray(".image-pllx-2").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			yPercent: -30,
			ease: "none",
		  }).to(image, {
			yPercent: 30,
			ease: "none",
		  }); 
	});

	// image zooout animation start
	gsap.utils.toArray(".image-zoom-out").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			scale: 1.2,
			ease: "none",
		  }).to(image, {
			scale: 1,
			ease: "none",
		  }); 
	});


	// image zooin animation start
	gsap.utils.toArray(".image-zoom-in").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			scale: 1,
			ease: "none",
		  }).to(image, {
			scale: 1.2,
			ease: "none",
		  }); 
	});



	/*
	progress bar activation start
	*/

	if ($(".progress-bar").length) {
		var $progress_bar = $(".progress-bar");
		$progress_bar.appear();
		$(document.body).on("appear", ".progress-bar", function () {
		  var current_item = $(this);
		  if (!current_item.hasClass("appeared")) {
			var percent = current_item.data("percent");
			current_item
			  .css("width", percent + "%")
			  .addClass("appeared")
			  .parent()
			  .append("<span>" + percent + "%" + "</span>");
		  }
		});
	  }
	
	/*
	progress bar activation end
	*/


	/*
	nice-selector-activiton
	====start====
	*/

	$('.nice-select select').niceSelect();
	/*
	nice-selector-activiton
	=====end==== 
	*/


	

	/*
	wow-activition
	=====start==== 
	*/


	new WOW().init();
		
	/*
	wow-activition
	=====end==== 
	*/



	/*
	popup-video-activition
	====start====
	*/
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	/*
	popup-video-activition
	====end====
	*/




	/*
	popup-img-activition
	====start====
	*/
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
	/*
	popup-img-activition
	====end====
	*/




	/*
	data-bg-activition
	====start====
	*/
	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
	})
	/*
	data-bg-activition
	====end====
	*/


		/*
	marquee-activiton
	====start====
	*/


	
	$('.arv-client-1-marquee').marquee({
		speed: 70,
		gap: 20,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
        startVisible:true,
	})


	$('.arv-client-2-marquee').marquee({
		speed: 70,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
        startVisible:true,
	})

	
	/*
	marquee-activiton
	=====end==== 
	*/



	// parallax-img
	$('.parallax-img').parallaxie({  
		speed: 0.6,
	});


	
	})(jQuery);