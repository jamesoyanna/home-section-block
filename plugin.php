<?php
/**
 * Plugin Name: home-section-block
 * Plugin URI: https://github.com/jamesoyanna/home-section-block.git
 * Description: homesection block.
 * Author: James Oyanna
 * Author URI: https://www.jamesoyanna.com/
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
