<?php
$tags = get_the_tags();

if ( $tags ) {
	the_tags( '<span class="qodef-e-info-tag">', '</span><span class="qodef-info-separator-single"></span><span class="qodef-e-info-tag">', '</span>' ); ?>
	<div class="qodef-info-separator-end"></div>
<?php } ?>
