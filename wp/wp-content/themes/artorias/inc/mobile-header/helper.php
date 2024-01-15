<?php

if ( ! function_exists( 'artorias_load_page_mobile_header' ) ) {
	/**
	 * Function which loads page template module
	 */
	function artorias_load_page_mobile_header() {
		// Include mobile header template
		echo apply_filters( 'artorias_filter_mobile_header_template', artorias_get_template_part( 'mobile-header', 'templates/mobile-header' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	add_action( 'artorias_action_page_header_template', 'artorias_load_page_mobile_header' );
}

if ( ! function_exists( 'artorias_register_mobile_navigation_menus' ) ) {
	/**
	 * Function which registers navigation menus
	 */
	function artorias_register_mobile_navigation_menus() {
		$navigation_menus = apply_filters( 'artorias_filter_register_mobile_navigation_menus', array( 'mobile-navigation' => esc_html__( 'Mobile Navigation', 'artorias' ) ) );

		if ( ! empty( $navigation_menus ) ) {
			register_nav_menus( $navigation_menus );
		}
	}

	add_action( 'artorias_action_after_include_modules', 'artorias_register_mobile_navigation_menus' );
}
