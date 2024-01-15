<?php if ( get_the_posts_pagination() !== '' ) { ?>
	<div class="qodef-m-pagination qodef--wp">
		<?php
		// Load posts pagination (in order to override template use navigation_markup_template filter hook)
		the_posts_pagination(
			array(
				'prev_text'          => artorias_get_svg_icon( 'pagination-arrow-left', 'qodef-m-pagination-icon' ) . '<span class="qodef-m-pagination-text">' . esc_html__( 'Prev', 'artorias' ) . '</span>',
				'next_text'          => '<span class="qodef-m-pagination-text">' . esc_html__( 'Next', 'artorias' ) . '</span>' . artorias_get_svg_icon( 'pagination-arrow-right', 'qodef-m-pagination-icon' ),
				'before_page_number' => '0',
			)
		);
		?>
	</div>
<?php } ?>
