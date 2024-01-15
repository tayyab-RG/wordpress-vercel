<?php
$social_share_enabled = 'yes' === artorias_core_get_post_value_through_levels( 'qodef_blog_enable_social_share' );
$social_share_layout  = artorias_core_get_post_value_through_levels( 'qodef_social_share_layout' );

if ( class_exists( 'ArtoriasCore_Social_Share_Shortcode' ) && $social_share_enabled ) {
	$params = array(
		'layout' => $social_share_layout,
	);

	echo ArtoriasCore_Social_Share_Shortcode::call_shortcode( $params );
}
