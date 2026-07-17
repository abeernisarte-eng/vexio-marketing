/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
	"use strict";



	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll


// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

		// preloader
        let preloader = document.querySelector(".agn-loader-wrap");
        if (preloader) {
            preloader.classList.add("preloaded");
            
            setTimeout(function () {
                startGsapAnimation(); 
            }, 1000);
        }

		function startGsapAnimation() {


			var agnPreloader = gsap.timeline();
			agnPreloader.to(".agn-loader-wrap-heading .load-text , .agn-loader-wrap-heading .cont", {
				duration: 0.2,
				y: -100,
				opacity: 0,
			});
			agnPreloader.to(".agn-loader-wrap path", {
				duration: 0.3,
				attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
				ease: "power2.easeIn",
			});
			agnPreloader.to(".agn-loader-wrap path", {
				duration: 0.4,
				attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
				ease: "power2.easeOut",
			});
			agnPreloader.to(".agn-loader-wrap", {
				y: -1500,
			});
			agnPreloader.to(".agn-loader-wrap", {
				display: "none",
			});
		}



		// after-preloader-end
			setTimeout(function() {

			// hero-1-slider
				if($(".agn-hero-1-active").length) {
					
					const swiper = new Swiper('.agn-hero-1-active', {
						speed: 1000,
						loop: true,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},

						pagination: {
							el: ".agn-h1-pagination",
							type: "fraction",
						},

						autoplay: {
							delay: 5000,
						},

						on: {
							slideChangeTransitionStart: () => animateSlide(),
						},
					});


					
					function animateSlide() {
						const currentSlide = document.querySelectorAll('.swiper-slide-active .text');
						
						const split = new SplitText(currentSlide, { type: 'lines' });
						gsap.set(split.lines, { opacity: 0, yPercent: 100 , transformOrigin: "bottom", scaleY: .3 });
						
						gsap.to(split.lines, {
							delay: .5,
							opacity: 1,
							scaleY: 1,
							yPercent: 0,
							duration: .75,
							ease: "ease1",
							stagger: 0.2,
						});
					}

					animateSlide();
					
				}

			// hero-5-slider
				if($(".agn-hero-5-active").length) {
					
					const swiper = new Swiper('.agn-hero-5-active', {
						speed: 500,
						loop: true,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},

						autoplay: {
							delay: 5000,
						},

						navigation: {
							nextEl: ".agn-h5-btn-next",
							prevEl: ".agn-h5-btn-prev",
						},

						on: {
							slideChangeTransitionStart: () => {
								animateSlide();
								animateSlide2();
							},
						},
					});


					
					function animateSlide() {
						const currentSlide = document.querySelectorAll('.swiper-slide-active .text');
						
						const split = new SplitText(currentSlide, { type: 'lines' });
						gsap.set(split.lines, {  yPercent: 500 , });
						
						gsap.to(split.lines, {
							delay: .5,
							opacity: 1,
							scaleY: 1,
							yPercent: 0,
							duration: .75,
							ease: "ease5",
							stagger: 0.2,
						});
					}

					
					function animateSlide2() {
						const currentSlide2 = document.querySelectorAll('.swiper-slide-active .text2');
						
						const split2 = new SplitText(currentSlide2, { type: 'lines' });
						gsap.set(split2.lines, {  yPercent: -300 , });
						
						gsap.to(split2.lines, {
							delay: .5,
							opacity: 1,
							scaleY: 1,
							yPercent: 0,
							duration: .75,
							ease: "ease5",
							stagger: -0.2,
						});
					}

					animateSlide2();
					animateSlide();
					
				}

			// hero-7-slider
				if($(".agn-hero-7-active").length) {
					
					const swiper = new Swiper('.agn-hero-7-active', {
						speed: 500,
						loop: true,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},

						autoplay: {
							delay: 5000,
						},

						pagination: {
							el: ".agn-h7-pagination",
							clickable: true,
						},

						on: {
							slideChangeTransitionStart: () => {
								animateSlide();
								animateSlide2();
							},
						},

						

					});


					function animateSlide() {
						const currentSlide = document.querySelectorAll('.swiper-slide-active .ang-h7-text');
						
						const split = new SplitText(currentSlide, { 	type: "lines,words,chars", linesClass: "split-line" });
						gsap.set(split.chars, { yPercent: 150 , });
						
						gsap.to(split.chars, {
							yPercent: 0,
							opacity: 1,
							duration:1,
							ease: "ease6",
							stagger: 0.03,
						});
					}

					
					function animateSlide2() {
						const currentSlide2 = document.querySelectorAll('.swiper-slide-active .ang-h7-text2');
						
						const split2 = new SplitText(currentSlide2, { type: 'lines' });
						gsap.set(split2.lines, {  yPercent: 100 , opacity: 0 });
						
						gsap.to(split2.lines, {
							delay: .5,
							opacity: 1,
							scaleY: 1,
							yPercent: 0,
							duration: .75,
							ease: "ease5",
							stagger: 0.2,
							delay: .5
						});
					}

					animateSlide2();
					animateSlide();

				}

			// hero-9-slider
			if ($(".agn-h9-active").length) {
                const swiper = new Swiper('.agn-h9-active', {
                    speed: 500,
                    loop: true,
                    effect: "fade",
                    fadeEffect: {
                        crossFade: true
                    },
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: ".agn-h9-pagination",
                        clickable: true,
                    },
                    on: {
                        slideChangeTransitionEnd: () => {
                            resetSlideAnimations();
                            animateSlideH9();
                            animateSlideH9tl();
                        },
                    },
                });
                let agnH9tl;
                function resetSlideAnimations() {
                    const activeSlide = document.querySelector('.swiper-slide-active');
                    if (!activeSlide) return;
                    const elementsToReset = activeSlide.querySelectorAll(`
                        .agn-h7-text,
                        .subtitle,
                        .disc,
                        .agn-donate-progress,
                        .btn-wrap
                    `);
                    gsap.set(elementsToReset, { clearProps: "all" });
                }
                function animateSlideH9() {
                    const currentText = document.querySelectorAll('.swiper-slide-active .agn-h7-text');
                    if (!currentText.length) return;
                    const split = new SplitText(currentText, {
                        type: "lines,words,chars",
                        linesClass: "split-line"
                    });
                    gsap.set(split.chars, { xPercent: 150, opacity: 0 });
                    gsap.to(split.chars, {
                        xPercent: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "ease3",
                        stagger: 0.03,
                    });
                }
                function animateSlideH9tl() {
                    if (agnH9tl) agnH9tl.kill();
                    const activeSlide = document.querySelector('.swiper-slide-active');
                    if (!activeSlide) return;
                    agnH9tl = gsap.timeline({
                        defaults: {
                            ease: "ease3",
                            duration: 1,
                        },
                    });
                    agnH9tl.from(activeSlide.querySelector(".subtitle"), { xPercent: 100, opacity: 0 });
                    agnH9tl.from(activeSlide.querySelector(".disc"), { xPercent: 10, opacity: 0 }, "<.5");
                    agnH9tl.from(activeSlide.querySelector(".agn-donate-progress"), { xPercent: 10, opacity: 0 }, "<.5");
                    agnH9tl.from(activeSlide.querySelector(".progress-line-fill"), { xPercent: -100 }, "<.3");
                    agnH9tl.from(activeSlide.querySelector(".btn-wrap"), { xPercent: 50, opacity: 0 }, "<");
                }
                resetSlideAnimations();
                animateSlideH9();
                animateSlideH9tl();
            }


			}, 700);

CustomEase.create("ease1", "0.2, 0.8, 0.2, 1");
CustomEase.create("ease2", "0.68, -0.55, 0.27, 1.55");
CustomEase.create("ease3", "0.25, 1, 0.5, 1");
CustomEase.create("ease4", "0.68, -0.55, 0.27, 1.55");
CustomEase.create("ease5", "0.4, 0.0, 0.2, 1");
CustomEase.create("ease6", "0.4, 0, 0.2, 1");

		// hero-1-tl
const agnH1tl = gsap.timeline();
agnH1tl.from(".agn-hero-1-social", { xPercent: -100, duration: 1, delay: 1 });

		// hero-1-scroll
var agnH1Scroll = gsap.timeline({
	scrollTrigger: {
		trigger: '.agn-hero-1-mask',
		start: "top -30%",
		scrub: 1,
		toggleActions: "play reverse play reverse",
		markers: false
	}
});
agnH1Scroll.to(".agn-hero-1-mask" , {     maskSize: "100% 110%"  })


		// hero-2-tl
const agnH2tl = gsap.timeline();
agnH2tl.from(".agn-hero-2-bg-img img", { scale: 1.2, transformOrigin: "left", filter: "blur(5px)", duration: 1.5, delay: .8, ease: "ease2" });

		// hero-2-tl-2
const agnH2tl2 = gsap.timeline();
agnH2tl2.from(".agn-hero-2-title", { opacity: 0, yPercent: 100 , transformOrigin: "bottom", scaleY: .2, stagger: .4,  delay: 1.5, duration: .8, ease: "ease2",});

		// hero-2-shape-line
if (window.matchMedia("(min-width: 1200px)").matches) { 

	var agnH2lineShape = gsap.timeline()
	var agnH2lineShapeTrigger = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-hero-2-area",
			start: "top -10%",
			scrub: 1,
			markers: false
		},
	})
	
	agnH2lineShape
	.from(".agn-hero-2-line-ani .earth-1", {
		x: -1000,
		duration: 3,
		rotation: "-360",
		delay: 1.2,
	})
	.from(".agn-hero-2-line-ani .earth-2", {
		x: 1000,
		duration: 3,
		rotation: "360",
	},"<=")
	.to(".agn-hero-2-line-ani .earth-2", {
		opacity: 0,
		duration: 1,
	})
	agnH2lineShapeTrigger
	.to(".agn-hero-2-line-ani .earth-1", {
		y: 500,
		scale: 5,
		opacity: 0,
	})
	.from(".agn-feature-2-video video", {
		opacity: 0,
		scale: 2,
	},"<=.5")
	.from(".agn-feature-2-card .left", {
		opacity: 0,
		yPercent: 10,
	})
	.from(".agn-feature-2-card .right", {
		opacity: 0,
		yPercent: 10,
	}, "<=")
}


		// hero-3-title
if($(".agn-h3-ani-title").length) {
	var aniTitle1 = $(".agn-h3-ani-title");
	if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
		gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-h3-ani-title') ){
			gsap.set(el.split.chars, {
				xPercent: 100,
				opacity: 0,
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},
			
			yPercent: 0,
			xPercent: 0,
			opacity: 1,
			duration:.8,
			ease: "ease2",
			stagger: .03,
			delay: .8,
					// yoyo: true, 
					// repeat: -1,
		});
		
	});
}

		// hero-3-review
var agnH3review = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-customer-review-1",
		markers: false,
	},
	defaults: {
		ease: "ease3",
		duration: .5,
	},
})
agnH3review
.from(".agn-customer-review-1-img", {
	xPercent: -100,
	stagger: .2,
	opacity: 0,
	delay: 2,
})
.from(".agn-customer-review-1-rating", {
	xPercent: -100,
	opacity: 0
},"<=.5")

		// hero-3-content-tl
const agnH3ContentTl = gsap.timeline();
agnH3ContentTl
.from(".h3fadeinup", { yPercent: 100, opacity: 0, stagger: 0.2, duration: .5, delay: 2.5, ease: "ease3" });

		// hero-4-tl
const agnH4Tl = gsap.timeline();
agnH4Tl
.from(".agn-hero-4-content .disc", { yPercent: 100, opacity: 0, duration: 1, delay: 1.6, ease: "ease4" })
.from(".agn-hero-4-img img", { yPercent: 10, filter: "blur(10px)", duration: 1,  ease: "ease4" }, "<.3");

		// hero-4-trigger
const agnH4trigger = gsap.timeline({
	scrollTrigger: {
		trigger: '.agn-hero-4-area',
		start: "top 0",
		scrub: .5,
		toggleActions: "play reverse play reverse",
		markers: false
	}
});
agnH4trigger
.to(".agn-hero-4-img img", { yPercent: 40,})


		// hero-5-tl
const agnH5tl = gsap.timeline();
agnH5tl.from(".agn-hero-5-shape img", { yPercent: 100, delay: 1, ease: "ease5", duration: 1,});

		// hero-6-tl
const agnH6tl = gsap.timeline();
agnH6tl.from(".agn-hero-6-content .line", { scaleX: 0, delay: 1, ease: "ease6", duration: 4,});
agnH6tl.from(".agn-hero-6-rating", { yPercent: 50, opacity: 0,  ease: "ease6", duration: .5,},"<.8");
agnH6tl.from(".agn-hero-6-content .disc", { yPercent: 100, opacity: 0, ease: "ease6", duration: .5,},"<.5");
agnH6tl.from(".agn-hero-6-content .btn-wrap", { yPercent: 100, opacity: 0, ease: "ease6", duration: .5,},"<.5");

		// hero-7-tl
const agnH7tl = gsap.timeline();
agnH7tl.from(".agn-feature-7-wrap", { y: 94, delay: 1.5, ease: "ease6", duration: 1,});


		// footer-2-let's-work
if($(".agn-ani-title-1").length) {
	var aniTitle1 = $(".agn-ani-title-1");
	if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});

		gsap.set(el, { perspective: 400 });

		if( $(el).hasClass('agn-ani-title-1') ){
			gsap.set(el.split.chars, {
				xPercent: 100,
				opacity: 0,
			});
		}

		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},

			yPercent: 0,
			xPercent: 0,
			opacity: 1,
			duration:.8,
			ease: "ease2",
			stagger: .1,
					// yoyo: true, 
					// repeat: -1,
		});

	});
}

		// section-title-1
if($(".pf-split-1").length) {
	var split1 = $(".pf-split-1");
	if(split1.length == 0) return; gsap.registerPlugin(SplitText); split1.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
		gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('pf-split-1') ){
			gsap.set(el.split.chars, {
				y: "100",
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			opacity: 1,
			duration:1,
			ease: "power3.out",
			stagger: 0.02,
			delay:0.3,
		});
		
	});
}

		// section-title-2
if($(".agn-split-2").length) {
	var split2 = $(".agn-split-2");
	if(split2.length == 0) return; gsap.registerPlugin(SplitText); split2.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		
		gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-2') ){
			gsap.set(el.split.lines, {
				y: "100",
				transformOrigin: "bottom", 
				scaleY: .2
			});
		}
		
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
			},
			x: "0",
			y: "0",
			scaleY: 1,
			opacity: 1,
			duration: 1,
			ease: "ease1",
			stagger: 0.3,
		});
		
	});
}

		// section-title-3
if($(".agn-split-3").length) {
	var split3 = $(".agn-split-3");
	if(split3.length == 0) return; gsap.registerPlugin(SplitText); split3.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		
		gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-3') ){
			gsap.set(el.split.lines, {
				yPercent: 100,
				opacity: 0,
				scaleY: .2,
				transformOrigin: "bottom",
			});
		}
		
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
				markers: false,
			},
			yPercent: 0,
			color: "inherit",
			scaleY: 1,
			opacity: 1,
			duration: .8,
			ease: "ease2",
			stagger: 0.2,
		});
		
	});
}

		// section-title-4
if($(".agn-split-4").length) {
	var split4 = $(".agn-split-4");
	if(split4.length == 0) return; gsap.registerPlugin(SplitText); split4.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
		gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-4') ){
			gsap.set(el.split.chars, {
				opacity: 0, 
				x: () => Math.random() * 20 + 30,
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
				markers: false,
			},
			color: "inherit",
			opacity: 1,
			x: 0,
			stagger: 0.02,
			duration: 1,
			ease: "ease3",
		});
		
	});
}

		// section-title-5
if($(".agn-split-5").length) {
	var split5 = $(".agn-split-5");
	if(split5.length == 0) return; gsap.registerPlugin(SplitText); split5.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		
		gsap.set(el, {   perspective: 2000, transformStyle: "preserve-3d" });
		
		if( $(el).hasClass('agn-split-5') ){
			gsap.set(el.split.lines, {
				yPercent: 100,
				opacity:0,
				rotationX: -100
			});
		}
		
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
			},
			rotationX: 0,
			yPercent: 0,
			scaleX: 1,
			opacity: 1,
			duration: .8,
			ease: "ease4",
			stagger: 0.2,
			delay: 1,
		});
		
	});
}

		// section-title-6
if($(".agn-split-6").length) {
	var split6 = $(".agn-split-6");
	if(split6.length == 0) return; gsap.registerPlugin(SplitText); split6.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		
		gsap.set(el, {   perspective: 2000, transformStyle: "preserve-3d" });
		
		if( $(el).hasClass('agn-split-6') ){
			gsap.set(el.split.lines, {
				yPercent: 100,
				opacity:0,
				rotationX: -100
			});
		}
		
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			rotationX: 0,
			yPercent: 0,
			scaleX: 1,
			opacity: 1,
			duration: .8,
			ease: "ease4",
			stagger: 0.2,
		});
		
	});
}

		// section-title-7
if($(".agn-split-7").length) {
	var split7 = $(".agn-split-7");
	if(split7.length == 0) return; gsap.registerPlugin(SplitText); split7.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
		
				// gsap.set(el, {   perspective: 2000, transformStyle: "preserve-3d" });
		
		if( $(el).hasClass('agn-split-7') ){
			gsap.set(el.split.lines, {
				yPercent: 500,
			});
		}
		
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
			},
			rotation: 0,
			yPercent: 0,
			scaleX: 1,
			opacity: 1,
			stagger: 0.1,
			duration: 0.8,
			ease: "ease5",
		});
		
	});
}


		// section-title-8
if($(".agn-split-8").length) {
	var split8 = $(".agn-split-8");
	if(split8.length == 0) return; gsap.registerPlugin(SplitText); split8.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
				// gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-8') ){
			gsap.set(el.split.chars, {
				yPercent: 150,
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			yPercent: 0,
			opacity: 1,
			duration:1,
			ease: "ease6",
			stagger: 0.03,
			delay:.8,
		});
		
	});
}

		// agn-hero-title-6-icon
const agnHeroTitle6icon = gsap.utils.toArray('.agn-hero-6-content .title .illus-1');
agnHeroTitle6icon.forEach((box, i) => {
	const anim = gsap.from(box, 
		
		{  rotation: 90, scale: 0,  delay: 1.5, duration: 1,	ease: "ease6",  });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});

		// section-title-9
if($(".agn-split-9").length) {
	var split9 = $(".agn-split-9");
	if(split9.length == 0) return; gsap.registerPlugin(SplitText); split9.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
				// gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-9') ){
			gsap.set(el.split.chars, {
				yPercent: 150,
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			yPercent: 0,
			opacity: 1,
			duration: .8,
			ease: "ease6",
			stagger: 0.03,
		});
		
	});
}


		// agn-title-6-icon
const agnTitle6icon = gsap.utils.toArray('.agn-sec-title-6 .illus-1');
agnTitle6icon.forEach((box, i) => {
	const anim = gsap.from(box, 
		
		{  rotation: 90, scale: 0,  delay: .7, duration: 1,	ease: "ease6",  });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});


		// section-title-9
if($(".agn-split-10").length) {
	var split10 = $(".agn-split-10");
	if(split10.length == 0) return; gsap.registerPlugin(SplitText); split10.each(function(index, el) {
		
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		
				// gsap.set(el, { perspective: 400 });
		
		if( $(el).hasClass('agn-split-10') ){
			gsap.set(el.split.chars, {
				xPercent: 150,
				opacity: 0,
			});
		}
		
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			xPercent: 0,
			opacity: 1,
			duration: .5,
			ease: "ease3",
			stagger: 0.03,
		});
		
	});
}

})
});







// sticky-header-default





// about-1-line
var agnA1line = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-1-content-line",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
		ease: "ease1",
	},
})
agnA1line
.from(".agn-about-1-content-line .line", {
	scaleX: 0,
	transformOrigin: "left",
	duration: 1,
})
.from(".agn-about-1-content-line .has-btn-ani", {
	scale: 0,
	duration: .8
})



// about-2-author
var agnA2author = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-2-author",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
		ease: "ease2",
		duration: .8,
	},
})
agnA2author
.from(".agn-about-2-author-img", {
	xPercent: -100,
	stagger: .2,
	opacity: 0
})
.from(".agn-about-2-author-btn-wrap", {
	xPercent: -100,
	opacity: 0
},"<=.5")



// campaign-1-card
var campaign1CardTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-campaign-1-card",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
		markers: false,
		
	},
	defaults: {
		ease: "ease1",
		duration: 1,
	},
})
campaign1CardTl
.from(".agn-campaign-1-card-single", {
	yPercent: 100,
	stagger: 0.3,
	ease: "power4.out",
})

// process-1-card
if (window.matchMedia("(min-width: 992px)").matches) {
	var process1CardTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-process-1-wrap",
			start: "top 80%",
			toggleActions: "play reverse play reverse",
			markers: false,
			
		},
		defaults: {
			ease: "ease1",
			duration: 1,
		},
	})
	
	process1CardTl
	.from(".agn-process-1-img", {
		xPercent: -100,
	})
	.from(".agn-process-1-card-single", {
		scale: 0,
		stagger: .2
	}, "<=.5")

}

// team-2-card
var agnTeam2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-team-2-wrap",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
		markers: false,
		
	},
	defaults: {
		ease: "ease2",
		duration: .8,
	},
})
agnTeam2
.from(".agn-team-2-card", {
	yPercent: 50,
	opacity: 0,
	stagger: 0.2,
})

// footer-2-let's-work
if($(".agn-ani-title-1").length) {
	var aniTitle1 = $(".agn-ani-title-1");
	if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});

		gsap.set(el, { perspective: 400 });

		if( $(el).hasClass('agn-ani-title-1') ){
			gsap.set(el.split.chars, {
				xPercent: 100,
				opacity: 0,
			});
		}

		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},

			yPercent: 0,
			xPercent: 0,
			opacity: 1,
			duration:.8,
			ease: "ease2",
			stagger: .1,
			// yoyo: true, 
			// repeat: -1,
		});

	});
}

// about-2-btn
var agnAbout2btn = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-2-btn",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
})
agnAbout2btn
.from(".agn-about-2-btn .line", {
	width: 0,
	ease: "ease1",
	duration: 1,
})

// counter-2
var agnCounter2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-counter-2-item",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
})
agnCounter2
.from(".agn-counter-2-item-single", {
	yPercent: 100,
	opacity: 0,
	ease: "ease2",
	duration: .8,
	stagger: .2,
})

// services-3-card
if (window.matchMedia("(min-width: 768px)").matches) { 
	gsap.to(".agn-services-3-card", {
		scrollTrigger: {
			trigger: ".agn-services-3-card-pin",
			start: "top 15%", 
			end: "bottom bottom", 
			pin: ".agn-services-3-card", 
			pinSpacing: true,
			markers: false
		}
	});
	
	gsap.to(".agn-services-3-title", {
		scrollTrigger: {
			trigger: ".agn-services-3-card-pin",
			start: "top 7%", 
			end: "bottom bottom", 
			pin: ".agn-services-3-title", 
			pinSpacing: true,
			markers: false
		}
	});
	
	var agnServices3card = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-services-3-card",
			start: "top 90%",
			markers: false,
		},
	})
	var agnServices3cardTrigger = gsap.timeline({
		scrollTrigger: {
			trigger: ".pin-spacer",
			start: "top 0%",
			toggleActions: "play reverse play reverse",
			scrub: 1,
			markers: false,
		},
	})
	
	agnServices3card
	.from(".agn-services-3-card-single", {
		yPercent: 100,
		opacity: 0,
		stagger: {
			each: .2,
			duration: .5,
			ease: 'ease3',
		},
	})
	agnServices3cardTrigger
	.to(".agn-services-3-card-single", {
		yPercent: -150,
		rotation: 20,
		duration: 1,
		stagger: -1, 
	})
}


// gallery-3-shape 
if (window.matchMedia("(min-width: 992px)").matches) {

	var agnGallery3shape = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-gallery-3-wrap",
			// start: "top 100%",
			markers: false,
		},
	})
	gsap.to(".agn-gallery-3-color", {
		scrollTrigger: {
			trigger: ".agn-gallery-3-height",
			start: "top 15%", 
			end: "bottom bottom", 
			pin: ".agn-gallery-3-color", 
			pinSpacing: true,
			markers: false
		}
	});
	
	var agnGallery3color = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-gallery-3-height",
			start: "top 0%",
			end: "bottom -100%",
			markers: false,
			scrub: 1,
		},
	})
	
	agnGallery3shape
	.fromTo(".agn-gallery-3-line-shape img", {
		clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
		ease: "ease3",
		duration: 2,
	},
	{
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		ease: "ease3",
		duration: 2,
	}
	)
	.from(".agn-gallery-3-wrap .has-ani", {
		opacity: 0,
		stagger: .1,
		ease: "ease3",
		duration: .5,
	},"<=.5")
	
	
	agnGallery3color
	.to(".agn-gallery-3-color .has-ani", {
		scale: 80,
		stagger: .03,
		ease: "ease3",
		duration: 1,
	})
}

// project-3-sticky
if (window.matchMedia("(min-width: 768px)").matches) {

	const cardsWrappers = gsap.utils.toArray(".agn-project-3-item-single");
	const cards = gsap.utils.toArray(".sticky-item");
	
	cardsWrappers.forEach((wrapper, i) => {
		const card = cards[i];
		let scale = 1,
		rotation = 0;
		if (i !== cards.length - 1) {
			scale = 0.9 + 0.025 * i;
			rotation = -10;
			
		}
		
		gsap.to(card, {
			scale: scale,
			rotationX: rotation,
			transformOrigin: "top center",
			duration: 1,
			ease: "ease3",
			scrollTrigger: {
				trigger: wrapper,
				start: "top " + (100 + 10 * i),
				end: "bottom 80%",
				endTrigger: ".agn-project-3-item",
				scrub: 1,
				pin: wrapper,
				pinSpacing: false,
				markers: false,
				id: i + 1
			}
		});
	});

}

// team-3
var agnTeam3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-team-3-wrap",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
})
agnTeam3
.from(".agn-team-3-item-ani", {
	xPercent: 100,
	opacity: 0,
	ease: "ease3",
	duration: .5,
	stagger: -.2,
})

// counter-3
if (window.matchMedia("(min-width: 1400px)").matches) {
	var agnCounter3 = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-about-3-counter",
			start: "top 80%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	agnCounter3
	.from(".agn-about-3-counter-single", {
		yPercent: -200,
		ease: "ease3",
		duration: .5,
		stagger: .2,
	})
}

// hero-3-trigger
if (window.matchMedia("(min-width: 768px)").matches) { 

	// Center the flower before pinning (saved page styles lock it to the left)
	gsap.set(".agn-hero-3-animation", {
		left: "50%",
		xPercent: -50,
		top: "8%",
		scale: 0.9,
		transformOrigin: "50% 50%",
	});
	gsap.set(".agn-hero-3-animation-shape", { transformOrigin: "50% 50%" });

	gsap.to(".agn-hero-3-bg", {
		scrollTrigger: {
			trigger: ".agn-hero-3-height",
			start: "top top", 
			end: "bottom bottom", 
			pin: ".agn-hero-3-bg", 
			pinSpacing: true,
			markers: false
		}
	});

	gsap.to(".agn-hero-3-animation", {
		scrollTrigger: {
			trigger: ".agn-hero-3-height",
			start: "top top", 
			end: "bottom bottom", 
			pin: ".agn-hero-3-animation", 
			pinSpacing: true,
			markers: false
		}
	});
	
	var agnH3shapeTrigger = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-hero-3-height",
			start: "top -50%",
			scrub: 1,
			markers: false,
		},
	})

	agnH3shapeTrigger
	.to(".agn-hero-3-animation-shape", {
		rotation: 360,
		scale: 10,
		opacity: 0,
		duration: 1,
		transformOrigin: "50% 50%",
	})
	
	var agnH3shapeTriggerVideo = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-hero-3-height",
			start: "top -50%",
			end: "bottom bottom", 
			scrub: 1,
			markers: false,
		},
	})

	agnH3shapeTriggerVideo
	.to(".agn-hero-3-bg", {
		opacity: 0,
		duration: 1,
	})
}

// about-3-arrow
var agnA3arrow = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-3-arrow",
		start: "top 50%",
		markers: false,
	},
})

agnA3arrow
.from(".agn-about-3-arrow", {
	yPercent: -50,
	xPercent: -50,
	duration: 0.5,
	ease: "ease3",
})

// agn-subtitle-1
const agnSubtitle1 = gsap.utils.toArray('.agn-subtitle-1-shape');
agnSubtitle1.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
		{ rotation: 0, fill: "#FF275A", opacity: 1,   duration: 3, 	ease: "ease1",  }, 
		{ rotation: 360, fill: "#D9D9D9", opacity: 1, duration: 3, 	ease: "ease1",   });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});

// agn-subtitle-2
const agnSubtitle2 = gsap.utils.toArray('.agn-subtitle-2 .line');
agnSubtitle2.forEach((box, i) => {
	const anim = gsap.from(box, 
		
		{  width: "100px",   duration: .8, 	ease: "ease2",  });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});

// agn-subtitle-4
const agnSubtitle4 = gsap.utils.toArray('.agn-subtitle-4-icon');
agnSubtitle4.forEach((box, i) => {
	const anim = gsap.from(box, 
		
		{  rotation: 360,   duration: 1, 	ease: "ease4",  });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});

// agn-subtitle-5
const agnSubtitle5 = gsap.utils.toArray('.agn-subtitle-5-line');
agnSubtitle5.forEach((box, i) => {
	const anim = gsap.from(box, 
		
		{  scaleX: 0,   duration: 1, transformOrigin: "left",	ease: "ease5",  });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});


// about-4-trigger
if (window.matchMedia("(min-width: 576px)").matches) { 
	const agnAbout4trigger = gsap.timeline({
		scrollTrigger: {
			trigger: '.agn-about-4-wrap',
			start: "top 70%",
			end: "bottom 50%",
			scrub: .5,
			toggleActions: "play reverse play reverse",
			markers: false
		}
	});
	agnAbout4trigger
	.to(".agn-about-4-img-2", { yPercent: -40,})
	.to(".agn-about-4-img-1-main", { transformOrigin: "left", scale: 1.3,})
}

const agnProject4 = gsap.timeline({
	scrollTrigger: {
		trigger: '.agn-project-4-wrap',
		toggleActions: "play reverse play reverse",
		markers: false
	}
});
agnProject4
.from(".agn-project-4-item", { scale: .5, stagger: .1 , duration: 1, ease: "ease4"})

// services-4
gsap.to(".agn-services-4-sec-title", {
	scrollTrigger: {
		trigger: ".agn-services-4-wrap",
		start: "top 80%", 
		end: "bottom bottom", 
		pin: ".agn-services-4-sec-title", 
		pinSpacing: false,
		markers: false
	}
});

// team-4
const teamMembers = gsap.utils.toArray('.agn-team-4-member-single');

teamMembers.forEach((member) => {
  // Create a GSAP timeline for each team member
	const agnTeam4 = gsap.timeline({
		scrollTrigger: {
      trigger: member, // Trigger animation for the individual element
      toggleActions: "play reverse play reverse",
      markers: false,
  },
});

	agnTeam4.from(member, { 
		xPercent: 20, 
		duration: 1, 
		ease: "ease4" 
	});
});

// contact-4
const agnContact4 = gsap.timeline({
	scrollTrigger: {
		trigger: '.agn-contact-4-bg-img',
		start: "top 20%",
		scrub: .1,
		toggleActions: "play reverse play reverse",
		markers: false
	}
});
agnContact4
.to(".agn-contact-4-bg-img img", { yPercent: 60,})

// feature-4-cursor
if($(".agn-feature-5-item-single").length) {
	const featureItems = document.querySelectorAll(".agn-feature-5-item-single");

	featureItems.forEach((featureItem) => {
		const flair = featureItem.querySelector(".cursor-follow");
		
		gsap.set(flair, { scale: 0, opacity: 0, xPercent: -50, yPercent: -10 });
		
		featureItem.addEventListener("mouseenter", () => {
			gsap.to(flair, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" });
		});


		featureItem.addEventListener("mousemove", (e) => {
			const rect = featureItem.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			gsap.to(flair, { x, y, duration: 0.1 });
		});
		
		featureItem.addEventListener("mouseleave", () => {
			gsap.to(flair, { scale: 0, opacity: 0, duration: 0.4, ease: "power3.in" });
		});
	});
	
}

// hero-8-btn-cursor
if($(".agn-hero-8-area").length) {
	const featureItems = document.querySelectorAll(".agn-hero-8-area");

	featureItems.forEach((featureItem) => {
		const flair = featureItem.querySelector(".cursor-follow");
		
		gsap.set(flair, { duration: 0.4, scale: 0, opacity: 0, xPercent: -50, yPercent: -50 });
		
		featureItem.addEventListener("mouseenter", () => {
			gsap.to(flair, { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" });
		});


		featureItem.addEventListener("mousemove", (e) => {
			const rect = featureItem.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			gsap.to(flair, { x, y, duration: 0.1 });
		});
		
		featureItem.addEventListener("mouseleave", () => {
			gsap.to(flair, { scale: 0, opacity: 0, duration: 0.4, ease: "power3.in" });
		});
	});
	
}

// process-5
var agnProcess5 = gsap.timeline({
	scrollTrigger: {
		trigger: '.agn-process-5-img',
		toggleActions: 'play reverse play reverse',
		markers: false,
	}
});
agnProcess5.from(".agn-process-5-img .img-2" , { rotation: 180, opacity: 0, duration: 1.5,	ease: "power3.out",  })
agnProcess5.from(".agn-process-5-img .img-1" , { opacity: 0, scale: .9, duration: .5,	ease: "power3.out",  })
agnProcess5.fromTo(".agn-process-5-sig .sig-img" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",  duration:2 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  duration:2 ,ease: "power3.out", }, "<.5")


// home-multi-sec
const agnSecTitleAni5Sections = gsap.utils.toArray('.agnSecTitleAni5');

// Loop through each section and create a timeline animation
agnSecTitleAni5Sections.forEach((section) => {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			end: "top 20%",
			toggleActions: "play reverse play reverse",
			markers: false,
			scrub: 1,
		},
		defaults: {
      ease: "power3.out", // Smoother easing
      duration: 0.4,
  },
});

	timeline
	.from(section.querySelectorAll(".video"), {
		scale: 2.5,
      stagger: 0.2, // Stagger effect for child elements
  })
	.from(section.querySelectorAll(".text"), {
		scale: 0,
		stagger: 0.1,
	});
});



// choose-5-img
var agnChoose5img = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-choose-5-img",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
		ease: "ease5",
		duration: .4,
	},
})

agnChoose5img
.from(".agn-choose-5-img", {
	transformOrigin: "bottom left",
	transform: "rotate(62deg) translate(-152px, 86px)",

})

// about-5-img
var agnAbout5img = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-5-bg-img",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
		scrub: .1
	},
	defaults: {
		ease: "ease5",
		duration: 1,
	},
})

agnAbout5img
.from(".agn-about-5-bg-img img", {
	yPercent: -30
})
.to(".agn-about-5-bg-img img", {
	yPercent: 30
})

// services-7
if (window.matchMedia("(min-width: 768px)").matches) { 
	gsap.to(".agn-services-7-content", {
		scrollTrigger: {
			trigger: ".agn-services-7-wrap",
			start: "top 10%", 
			end: "bottom 45%", 
			pin: ".agn-services-7-content", 
			pinSpacing: false,
			markers: false
		}
	});
	
}

// about-7-img
var agnAbout7img = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-7-img",
		start: "top 90%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
		ease: "ease6",
		duration: 1,
	},
})

agnAbout7img
.from(".agn-about-7-img-single:nth-of-type(1)", {
	xPercent: 100
})
.from(".agn-about-7-img-single:nth-of-type(3)", {
	xPercent: -100
},"<")

// services-8-shape {
gsap.to(".agn-services-8-bg-shape", {
	scrollTrigger: {
		trigger: ".agn-services-8-bg-shape",
		start: "top 70%",
		end: "top -100%",
		toggleClass: "active",
		toggleActions: "play none none reverse",
		markers: false,
	}
});

// services-8
if (window.matchMedia("(min-width: 768px)").matches) { 
	gsap.to(".agn-services-8-content", {
		scrollTrigger: {
			trigger: ".agn-services-8-wrap",
			start: "top 10%", 
			end: "bottom 45%", 
			pin: ".agn-services-8-content", 
			pinSpacing: false,
			markers: false,
		}
	});
	
}


// cta-8-shape 
gsap.to(".agn-cta-8-bg-shape", {
	scrollTrigger: {
		trigger: ".agn-cta-8-bg-shape",
		start: "top 80%",
		end: "top -100%",
		toggleClass: "active",
		toggleActions: "play none none reverse",
		markers: false,
	}
});


// about-7-img
if (window.matchMedia("(min-width: 992px)").matches) {
	var agnFeature8card = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-feature-8-card",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
		defaults: {
			ease: "ease6",
			duration: 1,
		},
	})
	
	agnFeature8card
	.from(".agn-feature-8-card-single-box:nth-of-type(2)", {
		xPercent: -50
	})
	.from(".agn-feature-8-card-single-box:nth-of-type(3)", {
		xPercent: -100
	},"<")
}

// feature-8-img 
gsap.to(".agn-feature-8-bg-img", {
	scrollTrigger: {
		trigger: ".agn-feature-8-bg-img",
		start: "top 80%",
		end: "top -100%",
		toggleClass: "active",
		toggleActions: "play none none reverse",
		markers: false,
	}
});

// cta-8-img 
gsap.to(".agn-cta-8-stroke-img", {
	scrollTrigger: {
		trigger: ".agn-cta-8-stroke-img",
		start: "top 80%",
		end: "top -100%",
		toggleClass: "active",
		toggleActions: "play none none reverse",
		markers: false,
	}
});

// project-9
var agnProject9 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-project-9-item .agn-donate-progress",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
		ease: "ease3",
		duration: 1,
	},
})

agnProject9
.from(".agn-project-9-item .progress-line-fill", {
	xPercent: -100
})

// contact-9
var agnContact9 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-contact-9-area",
		end: "top 0",
		toggleActions: "play reverse play reverse",
		markers: false,
		scrub: .1,
	},
	defaults: {
		ease: "ease3",
		duration: 1,
	},
})

agnContact9
.from(".agn-contact-9-area .bg-img img", {
	yPercent: -50
})


// item-parallax
const waItemParallax = gsap.utils.toArray('.item-parallax');
waItemParallax.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
		{ yPercent: 20, stagger: .3, duration: .5, },
		{ yPercent: -5, stagger: .3, duration: .5, }

		);

	ScrollTrigger.create({
		trigger: box,
		start: "top 100%",
		end: "top -40%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,
		scrub: .5,
	});
});

// item-parallax-down
const waItemParallaxDown = gsap.utils.toArray('.item-parallax-down');
waItemParallaxDown.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
		{ yPercent: -5, stagger: .3, duration: .5, },
		{ yPercent: 20, stagger: .3, duration: .5, }

		);

	ScrollTrigger.create({
		trigger: box,
		start: "top 100%",
		end: "top -40%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,
		scrub: .5,
	});
});

// fade-in-up
const waFadeInUp = document.querySelectorAll('.wa-fadeInUp');

waFadeInUp.forEach((box) => {
	ScrollTrigger.create({
		trigger: box,
		toggleActions: 'play reverse play reverse',
		onEnter: () => box.classList.add('in-view'),
		onLeaveBack: () => box.classList.remove('in-view'),
		markers: false,
	});
});

// fade-in-up-4
const waFadeInUp4 = document.querySelectorAll('.wa-fadeInUp-4');

waFadeInUp4.forEach((box) => {
	ScrollTrigger.create({
		trigger: box,
		toggleActions: 'play reverse play reverse',
		onEnter: () => box.classList.add('in-view'),
		onLeaveBack: () => box.classList.remove('in-view'),
		markers: false,
	});
});


// fadeInup-5
const waFadeInUp5 = gsap.utils.toArray('.waFadeInUp5');
waFadeInUp5.forEach((box, i) => {
	const anim = gsap.from(box, 
		{ yPercent: 100, opacity: 0, duration: .4, ease: "ease5", }
		);

	ScrollTrigger.create({
		trigger: box,
		animation: anim,
		start: "top 90%",
		toggleActions: 'play reverse play reverse',
		once: false,
		markers: false,
	});
});

// wa-scale-x
const waScaleX = gsap.utils.toArray('.wa-scale-x');
waScaleX.forEach((box, i) => {
	const anim = gsap.from(box, 
		{ scaleX: 0, duration: 1, ease: "power1.in", }
		);

	ScrollTrigger.create({
		trigger: box,
		animation: anim,
		start: "top 90%",
		toggleActions: 'play reverse play reverse',
		once: false,
		markers: false,
	});
});


// services-1-slider
if($('.agn-services-1-active').length) {
	let slider = new Swiper('.agn-services-1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 4,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".pf-t1-btn-next",
			prevEl: ".pf-t1-btn-prev",
		},

		pagination: {
			el: ".pf-t1-pagination",
			clickable: true,
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},
		},
	});
}

// feature-7-img-slider
if($('.agn-f7-img-active').length) {
	let slider = new Swiper('.agn-f7-img-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		autoplay: {
			delay: 5000,
		},


		navigation: {
			nextEl: ".agn-f7-img-btn-next",
			prevEl: ".agn-f7-img-btn-prev",
		},

	});
}

// feature-7-blog-slider
if($('.agn-f7-blog-active').length) {
	let slider = new Swiper('.agn-f7-blog-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		autoplay: {
			delay: 5000,
		},


		navigation: {
			nextEl: ".agn-f7-blog-btn-next",
			prevEl: ".agn-f7-blog-btn-prev",
		},

	});
}


// services-2-slider
if($(".agn-services-2-active").length) {
	const swiper = new Swiper(".agn-services-2-active" , {
		speed: 1000,
		spaceBetween: 32,
		loop: true,
		
		autoplay:  {
			delay: 5000,
		},
		navigation: {
            nextEl: ".agn-s2-btn-prev",
            prevEl: ".agn-s2-btn-next",
        },

		pagination: {
			el: ".pf-t1-pagination",
			clickable: true,
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	})
	
}

// testimonial-2-slider 
let arvTestimonial1Thumb = new Swiper(".arv-testimonial-1-thumb", {
	watchSlidesProgress: false,
	slidesPerView: 1,
	speed: 500,
	allowTouchMove: false,
});

let arvTestimonial1 = new Swiper('.arv-testimonial-1-slider', {
	speed: 500,
	loop: true,
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



// testimonial-4-slider
if($(".agn-t4-active").length) {
	const swiper = new Swiper(".agn-t4-active" , {
		speed: 500,
		spaceBetween: 32,
		loop: true,
		
		autoplay:  {
			delay: 5000,
		},

		pagination: {
			el: ".agn-t4-pagination",
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
				slidesPerView: 4,
			},
		},
	})
	
}

// testimonial-8-slider
if($(".agn-t8-active").length) {
	const swiper = new Swiper(".agn-t8-active" , {
		speed: 500,
		spaceBetween: 32,
		slidesPerView: 3,
		loop: true,

		autoplay:  {
			delay: 5000,
		},

		navigation: {
			prevEl: ".agn-t8-btn-prev",
			nextEl: ".agn-t8-btn-next",
		},

		pagination: {
			el: ".agn-t8-pagination",
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
		},

	})
	
}

// project-9-slider
if($(".agn-p9-active").length) {
	const swiper = new Swiper(".agn-p9-active" , {
		speed: 500,
		spaceBetween: 32,
		slidesPerView: 5,
		loop: true,

		autoplay:  {
			delay: 5000,
		},

		pagination: {
			el: ".agn-p8-pagination",
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			},
		},

	})
	
}

// testimonial-6-slider
if($(".agn-t6-active").length) {
	const swiper = new Swiper(".agn-t6-active" , {
		speed: 500,
		spaceBetween: 32,
		loop: true,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},

		autoplay:  {
			delay: 5000,
		},

		navigation: {
			prevEl: ".agn-t6-btn-prev",
			nextEl: ".agn-t6-btn-next",
		},

	})
	
}

// process-1-hover-active
$(".agn-process-1-card-single").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-process-1-card-single active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// blog-1-hover-active
$(".agn-blog-1-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-blog-1-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// choose-3-hover-active
$(".agn-choose-3-feature-single").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-choose-3-feature-single active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// award-3-hover-active
$(".agn-award-3-card").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-award-3-card active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// campaign-7-hover-active
$(".agn-campaign-7-card-single").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-campaign-7-card-single active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// brand-1-marquee
if($('.agn-brand-1-marquee').length) {
	$('.agn-brand-1-marquee').marquee({
		gap: 72,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// video-1-shape-marquee
if($('.agn-video-1-shape-marquee').length) {
	$('.agn-video-1-shape-marquee').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// brand-2-marquee
if($('.agn-brand-2-marquee-active').length) {
	$('.agn-brand-2-marquee-active').marquee({
		gap: 32,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// footer-3-marquee
if($('.agn-footer-3-get-touch-marquee').length) {
	$('.agn-footer-3-get-touch-marquee').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// gallery-4-marquee
if($('.agn-gallery-4-marquee').length) {
	$('.agn-gallery-4-marquee').marquee({
		gap: 16,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// brand-5-marquee
if($('.agn-brand-5-marquee').length) {
	$('.agn-brand-5-marquee').marquee({
		gap: 130,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// footer-5-shape-marquee
if($('.agn-footer-5-back-top-shape-marquee').length) {
	$('.agn-footer-5-back-top-shape-marquee').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// solution-6-marquee
if($('.agn-solution-6-marquee').length) {
	$('.agn-solution-6-marquee').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// about-8-marquee
if($('.agn-about-8-marquee').length) {
	$('.agn-about-8-marquee').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// text-slide-9-marquee
if($('.agn-text-9-marquee').length) {
	$('.agn-text-9-marquee').marquee({
		gap: 35,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}
if($('.agn-text-9-marquee-2').length) {
	$('.agn-text-9-marquee-2').marquee({
		gap: 35,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

if ($(".wa-magnetic").length) {
	var waMagnets = document.querySelectorAll('.wa-magnetic');
	var waStrength = 100;

	waMagnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function(event) {
			gsap.to(event.currentTarget, {
				x: 0,
				y: 0,
				duration: 1,
				ease: "power4.out"
			});
		});
	});

	function moveMagnet(event) {
		var magnetButton = event.currentTarget;
		var bounding = magnetButton.getBoundingClientRect();

		gsap.to(magnetButton, {
			x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength,
			y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength,
			duration: 1,
			ease: "power4.out"
		});
	}
}

if ($(".wa-magnetic-btn").length) {
	var waMagnets = document.querySelectorAll('.wa-magnetic-btn');
	var waStrength = 30;

	waMagnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function(event) {
			gsap.to(event.currentTarget, {
				x: 0,
				y: 0,
				duration: 1,
				ease: "power4.out"
			});
		});
	});

	function moveMagnet(event) {
		var magnetButton = event.currentTarget;
		var bounding = magnetButton.getBoundingClientRect();

		gsap.to(magnetButton, {
			x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength,
			y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength,
			duration: 1,
			ease: "power4.out"
		});
	}
}


// feather-icon
feather.replace()


// bootstrap-tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// back-to-top
if ($('.agn_back_top').length) {
	var scrollTopbtn = document.querySelector('.agn_back_top');
    var offset = 500; // Distance to scroll before showing the button
    var duration = 1000; // Scroll animation duration in milliseconds

    // Update the button's visibility on scroll
    $(window).on('scroll', function () {
    	if ($(this).scrollTop() > offset) {
    		$(scrollTopbtn).addClass('show');
    	} else {
    		$(scrollTopbtn).removeClass('show');
    	}
    });

    // Scroll to the top with smooth behavior when the button is clicked
    $(scrollTopbtn).on('click', function (event) {
    	event.preventDefault();
    	$('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}




// popup-video-activation
if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}

// popup-img-activation
if($('.popup-img').length) {
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

// nice-selector-active
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


// data-background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW({
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	});
	wow.init();
};

if ($('.copyright-year').length) {
	const currentYear = new Date().getFullYear();
	$('.copyright-year').text(currentYear);
}


})(jQuery);