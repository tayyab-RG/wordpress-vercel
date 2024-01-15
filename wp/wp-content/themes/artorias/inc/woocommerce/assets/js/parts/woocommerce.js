(function ($) {
	'use strict';

	$(document).ready(
		function () {
			qodefWooQuantityButtons.init();
			qodefWooMagnificPopup.init();
			qodefWooProductSearch.init();
		}
	);

	$(window).on(
		'load',
		function () {
			qodefWooSelect2.init();
		}
	);

	var qodefWooSelect2 = {
		init         : function (settings) {
			this.holder = [];
			this.holder.push(
				{
					holder : $('#qodef-woo-page .woocommerce-ordering select'),
					options: {
						minimumResultsForSearch: Infinity
					}
				}
			);
			this.holder.push(
				{
					holder : $('.variations select:not(.yith_wccl_custom):not([data-type="colorpicker"]):not([data-type="image"]):not([data-type="label"])'),
					options: {
						minimumResultsForSearch: Infinity
					},
				}
			);
			this.holder.push(
				{
					holder : $('#qodef-woo-page #calc_shipping_country'),
					options: {}
				}
			);
			this.holder.push(
				{
					holder : $('#qodef-woo-page .shipping select#calc_shipping_state'),
					options: {}
				}
			);
			this.holder.push(
				{
					holder : $('.widget.widget_archive select'),
					options: {}
				}
			);
			this.holder.push(
				{
					holder: $('.widget .wp-block-group .wp-block-archives-dropdown select'),
				}
			);
			this.holder.push(
				{
					holder : $('.widget.widget_categories select'),
					options: {}
				}
			);
			this.holder.push(
				{
					holder : $('.widget .wp-block-group .wp-block-categories-dropdown select'),
					options: {}
				}
			);
			this.holder.push(
				{
					holder : $('.widget.widget_text select'),
					options: {}
				}
			);

			// Allow overriding the default config
			$.extend(this.holder, settings);

			if (typeof this.holder === 'object') {
				$.each(
					this.holder,
					function (key, value) {
						qodefWooSelect2.createSelect2(value.holder, value.options);
					}
				);
			}
		},
		createSelect2: function ($holder, options) {
			if (typeof $holder.select2 === 'function') {
				$holder.select2(options);
			}
		}
	};

	var qodefWooQuantityButtons = {
		init: function () {
			$(document).on(
				'click',
				'.qodef-quantity-minus, .qodef-quantity-plus',
				function (e) {
					e.stopPropagation();

					var $button = $(this),
						$inputField = $button.siblings('.qodef-quantity-input'),
						step = parseFloat($inputField.data('step')),
						max = parseFloat($inputField.data('max')),
						min = parseFloat($inputField.data('min')),
						minus = false,
						inputValue = typeof Number.isNaN === 'function' && Number.isNaN(parseFloat($inputField.val())) ? min : parseFloat($inputField.val()),
						newInputValue;

					if ($button.hasClass('qodef-quantity-minus')) {
						minus = true;
					}

					if (minus) {
						newInputValue = inputValue - step;
						if (newInputValue >= min) {
							$inputField.val(newInputValue);
						} else {
							$inputField.val(min);
						}
					} else {
						newInputValue = inputValue + step;
						if (max === undefined) {
							$inputField.val(newInputValue);
						} else {
							if (newInputValue >= max) {
								$inputField.val(max);
							} else {
								$inputField.val(newInputValue);
							}
						}
					}

					$inputField.trigger('change');
				}
			);
		}
	};

	var qodefWooMagnificPopup = {
		init: function () {
			if (typeof qodef.qodefMagnificPopup === 'object') {
				var $holder = $('.qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image');

				if ($holder.length) {
					$holder.each(
						function () {
							$(this).children('a').attr('data-type', 'image').addClass('qodef-popup-item');
						}
					);

					qodef.qodefMagnificPopup.init();
				}
			}
		}
	};

	qodef.qodefWooMagnificPopup = qodefWooMagnificPopup;

	// temporary solution, we have asked for filter in product search block widget
	var qodefWooProductSearch = {
		init: function () {
			var $holder = $('.widget .wc-block-product-search');

			if ($holder.length) {
				$holder.each(
					function () {
						var $label = $(this).find('.wc-block-product-search__label'),
							$holderInner = $(this).find('.wc-block-product-search__fields'),
							$field = $(this).find('.wc-block-product-search__field'),
							$button = $(this).find('.wc-block-product-search__button');

						if ($label.length) {
							$label.removeClass().addClass('qodef-search-form-label');
						}

						if ($holderInner.length) {
							$holderInner.removeClass().addClass('qodef-search-form-inner');
						}

						if ($field.length) {
							$field.removeClass().addClass('qodef-search-form-field');
						}

						if ($button.length) {
							$button.removeClass().addClass('qodef-search-form-button qodef--button-inside qodef--has-icon');
							$button.html(qodefGlobal.vars.iconSearch);
						}
					}
				);
			}
		}
	}

})(jQuery);
