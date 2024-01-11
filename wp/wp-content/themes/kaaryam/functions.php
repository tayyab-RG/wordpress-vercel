<?php
/**
 * Kaaryam functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Kaaryam
 * @since Kaaryam 1.0
 */

if ( ! function_exists( 'kaaryam_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Kaaryam 1.0
	 *
	 * @return void
	 */
	function kaaryam_styles() {
		// Enqueue theme stylesheet.
		wp_enqueue_style(
			'kaaryam-style',
			get_template_directory_uri() . '/style.css',
			array(),
			filemtime( get_theme_file_path( '/style.css' ) )
		);
	}

endif;

add_action( 'wp_enqueue_scripts', 'kaaryam_styles' );


/**
 * Register pattern categories.
 */

if ( ! function_exists( 'kaaryam_pattern_categories' ) ) :
    /**
     * Register pattern categories
     *
     * @since Kaaryam 1.0.1
     * @return void
     */
    function kaaryam_pattern_categories() {

        register_block_pattern_category(
            'page',
            array(
                'label'       => _x( 'Pages', 'Block pattern category', 'kaaryam' ),
                'description' => __( 'A collection of full page layouts.', 'kaaryam' ),
            )
        );
        register_block_pattern_category(
            'kaaryam',
            array(
                'label'       => _x( 'Kaaryam', 'Block pattern category of Kaaryam Theme', 'kaaryam' ),
                'description' => __( 'A collection of full patterns by Kaaryam Theme.', 'kaaryam' ),
            )
        );
    }
endif;

add_action( 'init', 'kaaryam_pattern_categories' );