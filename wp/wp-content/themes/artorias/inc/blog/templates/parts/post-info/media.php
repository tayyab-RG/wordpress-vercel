<div class="qodef-e-media">
	<?php
	switch ( get_post_format() ) {
		case 'gallery':
			artorias_template_part( 'blog', 'templates/parts/post-format/gallery' );
			break;
		case 'video':
			artorias_template_part( 'blog', 'templates/parts/post-format/video' );
			break;
		case 'audio':
			artorias_template_part( 'blog', 'templates/parts/post-format/audio' );
			break;
		default:
			artorias_template_part( 'blog', 'templates/parts/post-info/image' );
			break;
	}
	?>
</div>
