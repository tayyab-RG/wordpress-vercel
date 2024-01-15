(function ($) {
	'use strict';

	window.qodef = {};

	qodef.body = $('body');
	qodef.html = $('html');
	qodef.window = $(window);
	qodef.windowWidth = $(window).width();
	qodef.windowHeight = $(window).height();
	qodef.scroll = 0;

	$(document).ready(
		function () {
			qodef.scroll = $(window).scrollTop();
			qodefBrowserDetection.init();
			qodefSwiper.init();
			qodefMagnificPopup.init();
			qodefAnchor.init();
		}
	);

	$(window).resize(
		function () {
			qodef.windowWidth = $(window).width();
			qodef.windowHeight = $(window).height();
		}
	);

	$(window).scroll(
		function () {
			qodef.scroll = $(window).scrollTop();
		}
	);

	$(document).on(
		'artorias_trigger_get_new_posts',
		function () {
			qodefSwiper.init();
			qodefMagnificPopup.init();
		}
	);

	/*
	 * Browser detection functionality
	 */
	var qodefBrowserDetection = {
		init            : function () {
			qodefBrowserDetection.addBodyClassName();
		},
		isBrowser       : function (name) {
			var isBrowser = false;

			switch (name) {
				case 'chrome':
					isBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
					break;
				case 'safari':
					isBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
					break;
				case 'firefox':
					isBrowser = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
					break;
				case 'ie':
					isBrowser = window.navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
					break;
				case 'edge':
					isBrowser = /Edge\/\d./i.test(navigator.userAgent);
					break;
			}

			return isBrowser;
		},
		addBodyClassName: function () {
			var browsers = [
				'chrome',
				'safari',
				'firefox',
				'ie',
				'edge',
			];

			$.each(
				browsers,
				function (key, value) {
					if (qodefBrowserDetection.isBrowser(value) && typeof qodef.body !== 'undefined') {
						if (value === 'ie') {
							value = 'ms-explorer';
						}

						qodef.body.addClass('qodef-browser--' + value);
					}
				}
			);
		}
	};

	/**
	 * Init swiper slider
	 */
	var qodefSwiper = {
		init          : function (settings) {
			this.holder = $('.qodef-swiper-container');

			// Allow overriding the default config
			$.extend(this.holder, settings);

			if (this.holder.length) {
				this.holder.each(
					function () {
						qodefSwiper.initSlider($(this));
					}
				);
			}
		},
		initSlider    : function ($currentItem) {
			var options = qodefSwiper.getOptions($currentItem),
				events = qodefSwiper.getEvents($currentItem, options);

			var $swiper = new Swiper($currentItem, Object.assign(options, events));
		},
		getOptions    : function ($holder, returnBreakpoints) {
			var sliderOptions = typeof $holder.data('options') !== 'undefined' ? $holder.data('options') : {},
				direction = sliderOptions.direction !== undefined && sliderOptions.direction !== '' ? sliderOptions.direction : 'horizontal',
				spaceBetween = sliderOptions.spaceBetween !== undefined && sliderOptions.spaceBetween !== '' ? sliderOptions.spaceBetween : 0,
				spaceBetween1440 = spaceBetween,
				slidesPerView = sliderOptions.slidesPerView !== undefined && sliderOptions.slidesPerView !== '' ? sliderOptions.slidesPerView : 1,
				centeredSlides = sliderOptions.centeredSlides !== undefined && sliderOptions.centeredSlides !== '' ? sliderOptions.centeredSlides : false,
				sliderScroll = sliderOptions.sliderScroll !== undefined && sliderOptions.sliderScroll !== '' ? sliderOptions.sliderScroll : false,
				loop = sliderOptions.loop !== undefined && sliderOptions.loop !== '' ? sliderOptions.loop : true,
				autoplay = sliderOptions.autoplay !== undefined && sliderOptions.autoplay !== '' ? sliderOptions.autoplay : true,
				speed = sliderOptions.speed !== undefined && sliderOptions.speed !== '' ? parseInt(sliderOptions.speed, 10) : 5000,
				speedAnimation = sliderOptions.speedAnimation !== undefined && sliderOptions.speedAnimation !== '' ? parseInt(sliderOptions.speedAnimation, 10) : 800,
				slideAnimation = sliderOptions.slideAnimation !== undefined && sliderOptions.slideAnimation !== '' ? sliderOptions.slideAnimation : '',
				customStages = sliderOptions.customStages !== undefined && sliderOptions.customStages !== '' ? sliderOptions.customStages : false,
				outsideNavigation = sliderOptions.outsideNavigation !== undefined && sliderOptions.outsideNavigation === 'yes',
				nextNavigation = outsideNavigation ? '.swiper-button-next-' + sliderOptions.unique : $holder.find('.swiper-button-next'),
				prevNavigation = outsideNavigation ? '.swiper-button-prev-' + sliderOptions.unique : $holder.find('.swiper-button-prev'),
				pagination = $holder.find('.swiper-pagination'),
				loopAdditionalSlides = sliderOptions.loopAdditionalSlides !== undefined && sliderOptions.loopAdditionalSlides !== '' ? parseInt(sliderOptions.loopAdditionalSlides) : 0;

			if (autoplay !== false) {
				autoplay = {
					disableOnInteraction: false
				}
			} else if (autoplay !== false && speed !== 5000) {
				autoplay = {
					delay               : speed,
					disableOnInteraction: false
				};
			}

			var slidesPerView1440 = sliderOptions.slidesPerView1440 !== undefined && sliderOptions.slidesPerView1440 !== '' ? parseInt(sliderOptions.slidesPerView1440, 10) : 5,
				slidesPerView1366 = sliderOptions.slidesPerView1366 !== undefined && sliderOptions.slidesPerView1366 !== '' ? parseInt(sliderOptions.slidesPerView1366, 10) : 4,
				slidesPerView1024 = sliderOptions.slidesPerView1024 !== undefined && sliderOptions.slidesPerView1024 !== '' ? parseInt(sliderOptions.slidesPerView1024, 10) : 3,
				slidesPerView768 = sliderOptions.slidesPerView768 !== undefined && sliderOptions.slidesPerView768 !== '' ? parseInt(sliderOptions.slidesPerView768, 10) : 2,
				slidesPerView680 = sliderOptions.slidesPerView680 !== undefined && sliderOptions.slidesPerView680 !== '' ? parseInt(sliderOptions.slidesPerView680, 10) : 1,
				slidesPerView480 = sliderOptions.slidesPerView480 !== undefined && sliderOptions.slidesPerView480 !== '' ? parseInt(sliderOptions.slidesPerView480, 10) : 1;

			if (!customStages) {
				if (slidesPerView < 2) {
					slidesPerView1440 = slidesPerView;
					slidesPerView1366 = slidesPerView;
					slidesPerView1024 = slidesPerView;
					slidesPerView768 = slidesPerView;
				} else if (slidesPerView < 3) {
					slidesPerView1440 = slidesPerView;
					slidesPerView1366 = slidesPerView;
					slidesPerView1024 = slidesPerView;
				} else if (slidesPerView < 4) {
					slidesPerView1440 = slidesPerView;
					slidesPerView1366 = slidesPerView;
				} else if (slidesPerView < 5) {
					slidesPerView1440 = slidesPerView;
				}
			}

			if (direction === 'vertical') {
				slidesPerView = 1;
			}

			// match breakpoint and gutter value from our grid system
			if (80 === spaceBetween) {
				spaceBetween1440 = 70;
			}

			if (100 === spaceBetween) {
				spaceBetween1440 = 80;
			}

			var options = {
				direction           : direction,
				slidesPerView       : slidesPerView,
				centeredSlides      : centeredSlides,
				sliderScroll        : sliderScroll,
				autoplay            : autoplay,
				loop                : loop,
				loopAdditionalSlides: loopAdditionalSlides,
				speed               : speedAnimation,
				navigation          : {nextEl: nextNavigation, prevEl: prevNavigation},
				pagination          : {el: pagination, type: 'bullets', clickable: true},
				breakpoints         : {
					// when window width is < 481px
					0: {
						slidesPerView: slidesPerView480,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 481px
					481: {
						slidesPerView: slidesPerView680,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 681px
					681: {
						slidesPerView: slidesPerView768,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 769px
					769: {
						slidesPerView: slidesPerView1024,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 1025px
					1025: {
						slidesPerView: slidesPerView1366,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 1367px
					1367: {
						slidesPerView: slidesPerView1440,
						spaceBetween : spaceBetween1440,
					},
					// when window width is >= 1441px
					1441: {
						slidesPerView: slidesPerView,
						spaceBetween : spaceBetween,
					}
				},
			};

			if (slideAnimation.length) {
				switch (slideAnimation) {
					case 'fade':
						options.effect = 'fade';
						options.fadeEffect = {
							crossFade: true
						};

						break;
				}
			}

			return Object.assign(options, qodefSwiper.getSliderDatas($holder));
		},
		getSliderDatas: function ($holder) {
			var dataList = $holder.data(),
				returnValue = {};

			for (var property in dataList) {
				if (dataList.hasOwnProperty(property)) {
					// It's required to be different from data options because da options are all options from shortcode element
					if (property !== 'options' && typeof dataList[property] !== 'undefined' && dataList[property] !== '') {
						returnValue[property] = dataList[property];
					}
				}
			}

			return returnValue;
		},
		getEvents     : function ($holder, options) {
			return {
				on: {
					beforeInit: function () {
						if (options.direction === 'vertical') {
							var height = 0;
							var currentHeight = 0;
							var $item = $holder.find('.qodef-e');

							if ($item.length) {
								$item.each(
									function () {
										currentHeight = $(this).outerHeight();

										if (currentHeight > height) {
											height = currentHeight;
										}
									}
								);
							}
							$holder.css('height', height);
							$item.css('height', height);
						}
					},
					init      : function () {
						$holder.addClass('qodef-swiper--initialized');

						qodef.body.trigger(
							'artorias_trigger_swiper_is_initialized',
							[$holder, options]
						);

						if (options.sliderScroll) {
							var scrollStart = false;

							$holder.on(
								'mousewheel',
								function (e) {
									e.preventDefault();

									if (!scrollStart) {
										scrollStart = true;

										if (e.deltaY < 0) {
											$holder[0].swiper.slideNext();
										} else {
											$holder[0].swiper.slidePrev();
										}

										setTimeout(
											function () {
												scrollStart = false;
											},
											1000
										);
									}
								}
							);
						}
					}
				}
			};
		}
	};

	qodef.qodefSwiper = qodefSwiper;

	/**
	 * Init magnific popup galleries
	 */
	var qodefMagnificPopup = {
		init                : function (settings) {
			this.holder = $('.qodef-magnific-popup');

			// Allow overriding the default config
			$.extend(this.holder, settings);

			if (this.holder.length) {
				this.holder.each(
					function () {
						qodefMagnificPopup.initPopup($(this));
					}
				);
			}
		},
		initPopup           : function ($currentItem) {
			if ($currentItem.hasClass('qodef-popup-item')) {
				qodefMagnificPopup.initSingleImagePopup($currentItem);
			} else if ($currentItem.hasClass('qodef-popup-gallery')) {
				qodefMagnificPopup.initGalleryPopup($currentItem);
			}
		},
		initSingleImagePopup: function ($popup) {
			var type = $popup.data('type');

			$popup.magnificPopup(
				{
					type        : type,
					titleSrc    : 'title',
					removalDelay: 350,
					mainClass   : 'mfp-fade',
					image       : {
						cursor: null
					},
					closeMarkup : '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + '</button>', // markup of an arrow button
				}
			);
		},
		initGalleryPopup    : function ($popup) {
			var $items = $popup.find('.qodef-popup-item'),
				itemsFormatted = qodefMagnificPopup.generateGalleryItems($items);

			$items.each(
				function (index) {
					var $this = $(this);
					$this.magnificPopup(
						{
							items       : itemsFormatted,
							gallery     : {
								enabled    : true,
								arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' + qodefGlobal.vars.iconArrowLeft + '</button>', // markup of an arrow button
							},
							index       : index,
							type        : 'image',
							mainClass   : 'mfp-fade',
							removalDelay: 350,
							image       : {
								cursor: null
							},
							closeMarkup : '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + '</button>', // markup of an arrow button
						}
					);
				}
			);
		},
		generateGalleryItems: function ($items) {
			var itemsFormatted = [];

			if ($items.length) {
				$items.each(
					function () {
						var $thisItem = $(this);
						var itemFormatted = {
							src  : $thisItem.attr('href'),
							title: $thisItem.attr('title'),
							type : $thisItem.data('type')
						};
						itemsFormatted.push(itemFormatted);
					}
				);
			}

			return itemsFormatted;
		}
	};

	qodef.qodefMagnificPopup = qodefMagnificPopup;

	var qodefAnchor = {
		items              : '',
		init               : function (settings) {
			this.holder = $('.qodef-anchor');

			// Allow overriding the default config
			$.extend(this.holder, settings);

			if (this.holder.length) {
				qodefAnchor.items = this.holder;

				qodefAnchor.clickTrigger();

				$(window).on(
					'load',
					function () {
						qodefAnchor.checkAnchorOnScroll();
						qodefAnchor.checkAnchorOnLoad();
					}
				);
			}
		},
		clickTrigger       : function () {
			qodefAnchor.items.on(
				'click',
				function (e) {
					var $anchorItem = qodefAnchor.getAnchorItem(this),
						anchorURL = $anchorItem.attr('href'),
						hash = $anchorItem.prop('hash').split('#')[1],
						pageURL = window.location.href,
						pageHash = pageURL.indexOf('#') > -1 ? pageURL.split('#')[1] : 0;

					if (
						anchorURL.indexOf('http') < 0
						|| anchorURL === pageURL
						|| (pageHash !== 0 && anchorURL.substring(0, anchorURL.length - hash.length - 1) === pageURL.substring(0, pageURL.length - pageHash.length - 1))
						|| (pageHash === 0 && anchorURL.substring(0, anchorURL.length - hash.length - 1) === pageURL)
					) {
						e.preventDefault();
					}

					qodefAnchor.animateScroll($anchorItem, hash);
				}
			);
		},
		checkAnchorOnLoad  : function () {
			var hash = window.location.hash.split('#')[1];

			if (typeof hash !== 'undefined' && hash !== '' && qodefAnchor.items.length) {
				qodefAnchor.items.each(
					function () {
						var $anchorItem = qodefAnchor.getAnchorItem(this);

						if ($anchorItem.attr('href').indexOf(hash) > -1) {
							qodefAnchor.animateScroll($anchorItem, hash);
						}
					}
				);
			}
		},
		checkAnchorOnScroll: function () {

			if (qodef.windowWidth > 1024) {
				var $target = $('#qodef-page-inner *[id]');

				if ($target.length) {
					$target.each(
						function () {
							var $currentTarget = $(this),
								$anchorItem = $('[href*="#' + $currentTarget.attr('id') + '"]');

							if ($anchorItem.length) {
								if (qodefAnchor.isTargetInView($currentTarget)) {
									qodefAnchor.setActiveState($anchorItem);
								}

								$(window).scroll(
									function () {
										if (qodefAnchor.isTargetInView($currentTarget)) {
											qodefAnchor.setActiveState($anchorItem);
										} else {
											$anchorItem.removeClass(qodefAnchor.getItemClasses($anchorItem));
										}
									}
								);
							}
						}
					);
				}
			}
		},
		isTargetInView     : function ($target) {
			var rect = $target[0].getBoundingClientRect(),
				percentVisible = 20,
				windowHeight = (window.innerHeight || document.documentElement.clientHeight);

			return !(
				Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
				Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
			);
		},
		getAnchorItem      : function (item) {
			var isItemLink = item.tagName === 'A';

			return isItemLink ? $(item) : $(item).children('a');
		},
		animateScroll      : function ($item, hash) {
			var $target = hash !== '' ? $('[id="' + hash + '"]') : '';

			if ($target.length) {
				var targetPosition = $target.offset().top,
					scrollAmount = targetPosition - qodefAnchor.getHeaderHeight() - qodefGlobal.vars.adminBarHeight;

				qodefAnchor.setActiveState($item);

				qodef.html.stop().animate(
					{
						scrollTop: Math.round(scrollAmount)
					},
					1000,
					function () {
						//change hash tag in url
						if (history.pushState) {
							history.pushState(null, '', '#' + hash);
						}
					}
				);

				return false;
			}
		},
		getHeaderHeight    : function () {
			var height = 0;

			if (qodef.windowWidth > 1024 && qodefGlobal.vars.headerHeight !== null && qodefGlobal.vars.headerHeight !== '') {
				height = parseInt(qodefGlobal.vars.headerHeight, 10);
			}

			return height;
		},
		setActiveState     : function ($item) {
			var isItemLink = !$item.parent().hasClass('qodef-anchor'),
				classes = qodefAnchor.getItemClasses($item);

			qodefAnchor.items.removeClass(classes);

			if (isItemLink) {
				$item.addClass(classes);
			} else {
				$item.parent().addClass(classes);
			}
		},
		getItemClasses     : function ($item) {
			// Main anchor item class plus header item classes if item is inside header
			var activeClass = 'qodef-anchor--active',
				menuItemClasses = $item.parents('#qodef-page-header') ? ' current-menu-item current_page_item' : '';

			return activeClass + menuItemClasses;
		}
	};

	qodef.qodefAnchor = qodefAnchor;

	/**
	 * Wait element images to loaded
	 */
	var qodefWaitForImages = {
		check: function ($element, callback) {
			if ($element.length) {
				var images = $element.find('img');

				if (images.length) {
					var counter = 0;

					for (var index = 0; index < images.length; index++) {
						var img = images[index];

						if (img.complete) {
							counter++;

							if (counter === images.length) {
								callback.call($element);
							}
						} else {
							var image = new Image();

							image.addEventListener(
								'load',
								function () {
									counter++;
									if (counter === images.length) {
										callback.call($element);
										return false;
									}
								},
								false
							);
							image.src = img.src;
						}
					}
				} else {
					callback.call($element);
				}
			}
		},
	};

	qodef.qodefWaitForImages = qodefWaitForImages;

	if (typeof Object.assign !== 'function') {
		Object.assign = function (target) {

			if (target === null || typeof target === 'undefined') {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			target = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];

				if (source !== null) {
					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}
			}

			return target;
		};
	}

})(jQuery);
