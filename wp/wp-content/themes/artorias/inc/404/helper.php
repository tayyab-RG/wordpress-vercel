<?php

if ( ! function_exists( 'artorias_set_404_page_inner_classes' ) ) {
	/**
	 * Function that return classes for the page inner div from header.php
	 *
	 * @param string $classes
	 *
	 * @return string
	 */
	function artorias_set_404_page_inner_classes( $classes ) {
		if ( is_404() ) {
			$classes = 'qodef-content-full-width';
		}

		return $classes;
	}

	add_filter( 'artorias_filter_page_inner_classes', 'artorias_set_404_page_inner_classes' );
}

if ( ! function_exists( 'artorias_set_404_page_content_behind_header' ) ) {
	/**
	 * Function that return negative margin for the page outer div from header.php
	 *
	 * @param string $margin
	 *
	 * @return int
	 */
	function artorias_set_404_page_content_behind_header( $margin ) {
		if ( is_404() ) {
			$margin = 100;
		}

		return $margin;
	}

	add_filter( 'artorias_core_filter_content_margin', 'artorias_set_404_page_content_behind_header' );
}

if ( ! function_exists( 'artorias_get_404_page_parameters' ) ) {
	/**
	 * Function that set 404 page area content parameters
	 */
	function artorias_get_404_page_parameters() {
		$params = array(
			'title'       => esc_html__( 'Error Page', 'artorias' ),
			'text'        => esc_html__( 'The page you are looking for doesn\'t exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website\'s homepage to find what you\'re looking for.', 'artorias' ),
			'button_text' => esc_html__( 'Back to home', 'artorias' ),
		);

		return apply_filters( 'artorias_filter_404_page_template_params', $params );
	}
}
