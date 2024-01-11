
<?php
 /**
  * Title: Post meta
  * Slug: kaaryam/hidden-post-meta
  * Categories: kaaryam
  */
?>
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:group {"style":{"spacing":{"blockGap":"0.3em"}},"layout":{"type":"flex","justifyContent":"left"}} -->
	<div class="wp-block-group">
		<!-- wp:post-date {"format":"M j, Y","isLink":true} /-->

		<!-- wp:paragraph {"textColor":"contrast-2"} -->
		<p class="has-text-color">—</p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"fontSize":"small","textColor":"contrast-2"} -->
		<p class="has-small-font-size has-text-color"><?php echo esc_html_x( 'by', 'Prefix for the post author block: By author name', 'kaaryam' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:post-author-name {"isLink":true} /-->

		<!-- wp:post-terms {"term":"category","prefix":"<?php echo esc_html_x( 'in ', 'Prefix for the post category block: in category name', 'kaaryam' ); ?>"} /-->

	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
