<?php

if ( ! function_exists( 'artorias_register_masonry_scripts' ) ) {
	/**
	 * Function that include modules 3rd party scripts
	 */
	function artorias_register_masonry_scripts() {
		wp_register_script( 'isotope', ARTORIAS_INC_ROOT . '/masonry/assets/js/plugins/isotope.pkgd.min.js', array( 'jquery' ), false, true );
		wp_register_script( 'packery', ARTORIAS_INC_ROOT . '/masonry/assets/js/plugins/packery-mode.pkgd.min.js', array( 'jquery' ), false, true );
	}

	add_action( 'artorias_action_before_main_js', 'artorias_register_masonry_scripts' );
}

if ( ! function_exists( 'artorias_include_masonry_scripts' ) ) {
	/**
	 * Function that include modules 3rd party scripts
	 */
	function artorias_include_masonry_scripts() {
		wp_enqueue_script( 'isotope' );
		wp_enqueue_script( 'packery' );
	}
}

if ( ! function_exists( 'artorias_enqueue_masonry_scripts_for_templates' ) ) {
	/**
	 * Function that enqueue modules 3rd party scripts for templates
	 */
	function artorias_enqueue_masonry_scripts_for_templates() {
		$post_type = apply_filters( 'artorias_filter_allowed_post_type_to_enqueue_masonry_scripts', '' );

		if ( ! empty( $post_type ) && is_singular( $post_type ) ) {
			artorias_include_masonry_scripts();
		}
	}

	add_action( 'artorias_action_before_main_js', 'artorias_enqueue_masonry_scripts_for_templates' );
}

if ( ! function_exists( 'artorias_enqueue_masonry_scripts_for_shortcodes' ) ) {
	/**
	 * Function that enqueue modules 3rd party scripts for shortcodes
	 *
	 * @param array $atts
	 */
	function artorias_enqueue_masonry_scripts_for_shortcodes( $atts ) {

		if ( isset( $atts['behavior'] ) && 'masonry' === $atts['behavior'] ) {
			artorias_include_masonry_scripts();
		}
	}

	add_action( 'artorias_core_action_list_shortcodes_load_assets', 'artorias_enqueue_masonry_scripts_for_shortcodes' );
}

if ( ! function_exists( 'artorias_register_masonry_scripts_for_list_shortcodes' ) ) {
	/**
	 * Function that set module 3rd party scripts for list shortcodes
	 *
	 * @param array $scripts
	 *
	 * @return array
	 */
	function artorias_register_masonry_scripts_for_list_shortcodes( $scripts ) {

		$scripts['isotope'] = array(
			'registered' => true,
		);
		$scripts['packery'] = array(
			'registered' => true,
		);

		return $scripts;
	}

	add_filter( 'artorias_core_filter_register_list_shortcode_scripts', 'artorias_register_masonry_scripts_for_list_shortcodes' );
}
