<?php
 /**
  * Title: Header
  * Slug: kaaryam/header
  * Categories: kaaryam, header
  */
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"10px","bottom":"10px","left":"30px","right":"30px"},"blockGap":"0px"},"border":{"bottom":{"color":"var:preset|color|border","width":"1px"}},"position":{"type":"sticky","top":"0px"}},"backgroundColor":"background","className":"has-background-background-color","layout":{"inherit":true,"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background" style="border-bottom-color:var(--wp--preset--color--border);border-bottom-width:1px;padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"bottom":"0px","top":"0px","right":"0px","left":"0px"},"blockGap":"var:preset|spacing|30"}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
<div class="wp-block-group alignwide" style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"className":"mobile-aligncenter","layout":{"type":"flex"}} -->
<div class="wp-block-group mobile-aligncenter"><!-- wp:site-logo {"width":49,"shouldSyncIcon":true,"style":{"color":[]}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained"},"fontSize":"tiny"} -->
<div class="wp-block-group has-tiny-font-size"><!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|foreground"}}},"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"1.6rem","letterSpacing":"0px","textTransform":"capitalize"}}} /-->

<!-- wp:paragraph {"fontSize":"extra-small"} -->
<p class="has-extra-small-font-size"><?php echo esc_html__( 'For Every Event', 'kaaryam' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:navigation {"textColor":"foreground","overlayBackgroundColor":"background","overlayTextColor":"foreground","layout":{"type":"flex","setCascadingProperties":true,"justifyContent":"left"},"style":{"spacing":{"blockGap":"var:preset|spacing|60"},"typography":{"fontStyle":"normal","fontWeight":"600"}},"fontSize":"small"} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|70"}},"className":"mobile-media-alignjustify","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group mobile-media-alignjustify"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"foreground","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}},"elements":{"link":{"color":{"text":"var:preset|color|foreground"}}},"typography":{"textTransform":"capitalize"}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline" style="text-transform:capitalize"><a class="wp-block-button__link has-foreground-color has-text-color has-link-color wp-element-button" style="padding-top:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20)"> <?php echo esc_html__( 'Buy Ticket', 'kaaryam' ); ?>  <img class="wp-image-203" style="width: 12px;" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/arrow-black.png" alt=""></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->