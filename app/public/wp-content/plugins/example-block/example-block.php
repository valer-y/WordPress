<?php
/**
 * Plugin Name:       Example block
 * Plugin URI:        https://kinsta.com/
 * Description:       Example block to train React-block development
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Valery
 * License:           -
 * License URI:       -
 * Text Domain:       example-block
 * Domain Path:       -
 * Update URI:        -
 *
 * @package           example-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function example_block_example_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'example_block_example_block_block_init' );
