<?php if ( has_post_thumbnail() ) : ?>
	<div class="qodef-e-media-image">
		<?php the_post_thumbnail( 'full' ); ?>
		<div class="qodef-e-media-icon">
			<?php artorias_render_svg_icon( 'play' ); ?>
		</div>
		<a class="qodef-e-video-url" itemprop="url" href="<?php the_permalink(); ?>"></a>
		<?php
		// Hook to include additional content after blog post featured image
		do_action( 'artorias_action_after_post_thumbnail_image' );
		?>
	</div>
<?php endif; ?>
