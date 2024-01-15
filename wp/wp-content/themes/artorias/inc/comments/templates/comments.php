<div id="qodef-page-comments">
	<?php if ( have_comments() ) {
		$comments_number = get_comments_number();
		?>
		<div id="qodef-page-comments-list" class="qodef-m">
			<?php // translators: %s - number of comments value ?>
			<h4 class="qodef-m-title"><?php echo esc_html( sprintf( _n( '%s Comment', '%s Comments', intval( $comments_number ), 'artorias' ), intval( $comments_number ) ) ); ?></h4>
			<ul class="qodef-m-comments">
				<?php wp_list_comments( array_unique( array_merge( array( 'callback' => 'artorias_get_comments_list_template' ), apply_filters( 'artorias_filter_comments_list_template_callback', array() ) ) ) ); ?>
			</ul>
			<?php if ( get_comment_pages_count() > 1 ) { ?>
				<div class="qodef-m-pagination qodef--wp">
					<?php
					the_comments_pagination(
						array(
							'prev_text'          => artorias_get_svg_icon( 'pagination-arrow-left', 'qodef-m-pagination-icon' ) . '<span class="qodef-m-pagination-text">' . esc_html__( 'Prev', 'artorias' ) . '</span>',
							'next_text'          => '<span class="qodef-m-pagination-text">' . esc_html__( 'Next', 'artorias' ) . '</span>' . artorias_get_svg_icon( 'pagination-arrow-right', 'qodef-m-pagination-icon' ),
							'before_page_number' => '0',
						)
					);
					?>
				</div>
			<?php } ?>
		</div>
	<?php } ?>
	<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) { ?>
		<p class="qodef-page-comments-not-found"><?php esc_html_e( 'Comments are closed.', 'artorias' ); ?></p>
	<?php } ?>
	<div id="qodef-page-comments-form">
		<?php comment_form( artorias_get_comment_form_args() ); ?>
	</div>
</div>
