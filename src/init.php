<?php
/**
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * home-section-block assets for both frontend + backend.
 */
function homesection_block_cgb_block_assets() { 
	// Register block styles for both frontend + backend.
	wp_register_style(
		'homesection_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null 
	);

	// Register block editor script for backend.
	wp_register_script(
		'homesection_block-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: I register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'homesection_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
	);

	// WP Localized globals.
	wp_localize_script(
		'homesection_block-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
		]
	);

	/**
	 * Register Gutenberg home section block on server-side.
	 */
	register_block_type(
		'cgb/block-homesection-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'homesection_block-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'homesection_block-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'homesection_block-cgb-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'homesection_block_cgb_block_assets' );
