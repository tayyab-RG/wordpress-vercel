<?php
 /**
  * Title: Footer
  * Slug: kaaryam/footer
  * Categories: kaaryam, footer
  */
?>
<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0px","padding":{"top":"5vw","bottom":"0vw"},"margin":{"top":"0","bottom":"0"}},"color":{"background":"#253547"}},"layout":{"inherit":true,"type":"constrained"},"metadata":{"name":"Footer"}} -->
<div class="wp-block-group alignwide has-background" style="background-color:#253547;margin-top:0;margin-bottom:0;padding-top:5vw;padding-bottom:0vw"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"80px","right":"30px","bottom":"80px","left":"30px"},"blockGap":"0px","margin":{"bottom":"var:preset|spacing|60"}},"border":{"radius":"23px"},"background":{"backgroundImage":{"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/dot-grid.png","id":152,"source":"file","title":"dot-grid"}}},"className":"has-background-secondary-background-color","layout":{"inherit":true,"type":"constrained"}} -->
<div class="wp-block-group alignwide has-background-secondary-background-color" style="border-radius:23px;margin-bottom:var(--wp--preset--spacing--60);padding-top:80px;padding-right:30px;padding-bottom:80px;padding-left:30px"><!-- wp:heading {"textAlign":"center","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|50"}},"typography":{"textTransform":"capitalize"}},"fontSize":"big"} -->
<h2 class="wp-block-heading has-text-align-center has-big-font-size" style="margin-bottom:var(--wp--preset--spacing--50);text-transform:capitalize"><?php echo esc_html__( 'Stay informed about news & announcement on the Designer Conference 2024!', 'kaaryam' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php echo esc_html__( 'Join our mailing list to stay in the loop and get every news about WordCamp Nepal 2024', 'kaaryam' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html__( 'Subscribe Now', 'kaaryam' ); ?>  <img class="wp-image-207" style="width: 12px;" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/arrow-white.png" alt=""></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php echo esc_html__( 'By subscribing to the mailing list, you accept the', 'kaaryam' ); ?> <a href="#"><strong><em><?php echo esc_html__( 'Privacy Policy.', 'kaaryam' ); ?></em></strong></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"width":"25%","style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"0px"},"blockGap":"10px"}}} -->
<div class="wp-block-column" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:0px;flex-basis:25%"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"className":"mobile-aligncenter","layout":{"type":"flex"}} -->
<div class="wp-block-group mobile-aligncenter"><!-- wp:site-logo {"width":49,"shouldSyncIcon":true,"style":{"color":{"duotone":["#fff","#ffffff"]}}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained"},"fontSize":"tiny"} -->
<div class="wp-block-group has-tiny-font-size"><!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|background"}}},"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"1.6rem","letterSpacing":"0px","textTransform":"capitalize"}}} /-->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|background"}}}},"textColor":"background","fontSize":"extra-small"} -->
<p class="has-background-color has-text-color has-link-color has-extra-small-font-size"><?php echo esc_html__( 'For Every Event', 'kaaryam' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"padding":{"top":"20px"},"blockGap":"10px"}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-top:20px"><!-- wp:group {"style":{"spacing":{"padding":{"bottom":"10px"}}},"className":""} -->
<div class="wp-block-group" style="padding-bottom:10px"><!-- wp:navigation {"ref":5,"textColor":"background","customOverlayBackgroundColor":"#253547","layout":{"type":"flex","justifyContent":"right"}} /--></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"5vh","bottom":"5vh"}},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"border":{"top":{"color":"#343765","width":"1px"}}},"textColor":"white","layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-group alignwide has-white-color has-text-color has-link-color" style="border-top-color:#343765;border-top-width:1px;padding-top:5vh;padding-bottom:5vh"><!-- wp:paragraph {"align":"right","style":{"elements":{"link":{"color":{"text":"var:preset|color|background"}}}},"textColor":"background","className":"mobile-aligncenter"} -->
<p class="has-text-align-right mobile-aligncenter has-background-color has-text-color has-link-color"><?php echo esc_html__( 'Proudly powered by', 'kaaryam' ); ?> <a href="<?php echo esc_url( __( 'https://wpnepal.com', 'kaaryam' ) ); ?>"><?php echo esc_html__( 'WPNepal', 'kaaryam' ); ?> </a>  <?php echo esc_html__( 'and', 'kaaryam' ); ?> <a href="<?php echo esc_url( __( 'https://wordpress.org', 'kaaryam' ) ); ?>" rel="nofollow"><?php echo esc_html__( 'WordPress', 'kaaryam' ); ?></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->