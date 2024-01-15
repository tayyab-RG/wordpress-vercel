(function ( $ ) {
	'use strict';

	$( document ).ready(
		function () {
			qodefMasonryLayout.init();
		}
	);

	$( window ).resize(
		function () {
			qodefMasonryLayout.reInit();
		}
	);

	$( document ).on(
		'artorias_trigger_get_new_posts',
		function ( e, $holder ) {
			if ( $holder.hasClass( 'qodef-layout--masonry' ) ) {
				qodefMasonryLayout.init();
			}
		}
	);

	/**
	 * Init masonry layout
	 */
	var qodefMasonryLayout = {
		init: function ( settings ) {
			this.holder = $( '.qodef-layout--masonry' );

			// Allow overriding the default config
			$.extend( this.holder, settings );

			if ( this.holder.length ) {
				this.holder.each(
					function () {
						qodefMasonryLayout.createMasonry( $( this ) );
					}
				);
			}
		},
		reInit: function ( settings ) {
			this.holder = $( '.qodef-layout--masonry' );

			// Allow overriding the default config
			$.extend( this.holder, settings );

			if ( this.holder.length ) {
				this.holder.each(
					function () {
						var $masonry = $( this ).find( '.qodef-grid-inner' );

						if ( typeof $masonry.isotope === 'function' ) {
							$masonry.isotope( 'layout' );
						}
					}
				);
			}
		},
		createMasonry: function ( $holder ) {
			var $masonry     = $holder.find( '.qodef-grid-inner' ),
				$masonryItem = $masonry.find( '.qodef-grid-item' );

			qodef.qodefWaitForImages.check(
				$masonry,
				function () {
					if ( typeof $masonry.isotope === 'function' ) {
						$masonry.isotope(
							{
								layoutMode: 'packery',
								itemSelector: '.qodef-grid-item',
								percentPosition: true,
								masonry: {
									columnWidth: '.qodef-grid-masonry-sizer',
									gutter: '.qodef-grid-masonry-gutter'
								}
							}
						);

						if ( $holder.hasClass( 'qodef-items--fixed' ) ) {
							var size = qodefMasonryLayout.getFixedImageSize( $masonry, $masonryItem );

							qodefMasonryLayout.setFixedImageProportionSize( $masonry, $masonryItem, size );
						}

						$masonry.isotope( 'layout' );
					}

					$masonry.addClass( 'qodef--masonry-init' );
				}
			);
		},
		getFixedImageSize: function ( $holder, $item ) {
			var $squareItem = $holder.find( '.qodef-item--square' );

			if ( $squareItem.length ) {
				var $squareItemImage      = $squareItem.find( 'img' ),
					squareItemImageWidth  = $squareItemImage.width(),
					squareItemImageHeight = $squareItemImage.height();

				if ( squareItemImageWidth !== squareItemImageHeight ) {
					return squareItemImageHeight;
				} else {
					return squareItemImageWidth;
				}
			} else {
				var size    = $holder.find( '.qodef-grid-masonry-sizer' ).width(),
					padding = parseInt( $item.css( 'paddingLeft' ), 10 );

				return (size - 2 * padding); // remove item side padding to get real item size
			}
		},
		setFixedImageProportionSize: function ( $holder, $item, size ) {
			var padding         = parseInt( $item.css( 'paddingLeft' ), 10 ),
				$squareItem     = $holder.find( '.qodef-item--square' ),
				$landscapeItem  = $holder.find( '.qodef-item--landscape' ),
				$portraitItem   = $holder.find( '.qodef-item--portrait' ),
				$hugeSquareItem = $holder.find( '.qodef-item--huge-square' ),
				isMobileScreen  = qodef.windowWidth <= 680;

			$item.css( 'height', size );

			if ( $landscapeItem.length ) {
				$landscapeItem.css( 'height', Math.round( size / 2 ) );
			}

			if ( $portraitItem.length ) {
				$portraitItem.css( 'height', Math.round( 2 * (size + padding) ) );
			}

			if ( ! isMobileScreen ) {

				if ( $landscapeItem.length ) {
					$landscapeItem.css( 'height', size );
				}

				if ( $hugeSquareItem.length ) {
					$hugeSquareItem.css( 'height', Math.round( 2 * (size + padding) ) );
				}
			}
		}
	};

	qodef.qodefMasonryLayout = qodefMasonryLayout;

})( jQuery );
