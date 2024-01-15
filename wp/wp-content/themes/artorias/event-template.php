<?php
/*
Template Name: Timetable Event
*/
get_header();

// Include event content template
if ( artorias_is_installed( 'core' ) ) {
	artorias_core_template_part( 'plugins/timetable', 'templates/content' );
}

get_footer();
