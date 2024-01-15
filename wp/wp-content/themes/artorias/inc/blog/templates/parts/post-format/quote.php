<?php
$quote_meta = get_post_meta( get_the_ID(), 'qodef_post_format_quote_text', true );
$quote_text = ! empty( $quote_meta ) ? $quote_meta : get_the_title();

if ( ! empty( $quote_text ) ) {
	$quote_author         = get_post_meta( get_the_ID(), 'qodef_post_format_quote_author', true );
	$quote_author_tagline = get_post_meta( get_the_ID(), 'qodef_post_format_quote_author_tagline', true );
	$title_tag            = isset( $title_tag ) && ! empty( $title_tag ) ? $title_tag : 'p';
	$author_title_tag     = isset( $author_title_tag ) && ! empty( $author_title_tag ) ? $author_title_tag : 'h5';
	?>
	<div class="qodef-e-quote">
		<?php artorias_render_svg_icon( 'quote', 'qodef-e-quote-icon' ); ?>
		<<?php echo esc_attr( $title_tag ); ?> class="qodef-e-quote-text"><?php echo esc_html( $quote_text ); ?></<?php echo esc_attr( $title_tag ); ?>>
		<?php if ( ! empty( $quote_author ) ) { ?>
			<<?php echo esc_attr( $author_title_tag ); ?> class="qodef-e-quote-author"><?php echo esc_html( $quote_author ); ?></<?php echo esc_attr( $author_title_tag ); ?>>
		<?php } ?>
		<?php if ( ! empty( $quote_author_tagline ) ) { ?>
			<p class="qodef-e-quote-author-tagline"><?php echo esc_html( $quote_author_tagline ); ?></p>
		<?php } ?>
		<?php if ( ! is_single() ) { ?>
			<a itemprop="url" class="qodef-e-quote-url" href="<?php the_permalink(); ?>"></a>
		<?php } ?>
	</div>
<?php } ?>
