<?php if ( isset( $enable_filter ) && 'yes' === $enable_filter ) {
	$filter_items = artorias_get_filter_items( $params );
	?>
	<div class="qodef-m-filter">
		<?php if ( ! empty( $filter_items ) ) { ?>
			<div class="qodef-m-filter-items">
				<a class="qodef-m-filter-item qodef--active" href="#" data-taxonomy="<?php echo esc_attr( $taxonomy_filter ); ?>" data-filter="*">
					<span class="qodef-m-filter-item-name"><?php esc_html_e( 'Show All', 'artorias' ); ?></span>
				</a>
				<?php
				foreach ( $filter_items as $item ) {
					$filter_value = is_numeric( $item->slug ) ? $item->term_id : $item->slug;
					?>
					<a class="qodef-m-filter-item" href="#" data-taxonomy="<?php echo esc_attr( $taxonomy_filter ); ?>" data-filter="<?php echo esc_attr( $filter_value ); ?>">
						<span class="qodef-m-filter-item-name"><?php echo esc_html( $item->name ); ?></span>
					</a>
				<?php } ?>
			</div>
		<?php } ?>
	</div>
	<?php
	// Include loading spinner
	if ( ! isset( $pagination_type ) || 'no-pagination' === $pagination_type ) {
		artorias_render_svg_icon( 'spinner', 'qodef-filter-pagination-spinner' );
	}
	?>
<?php } ?>
