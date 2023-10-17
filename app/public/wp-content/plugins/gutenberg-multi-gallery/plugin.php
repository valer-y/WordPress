<?php
/**
 * Plugin Name:       Multi Gallery
 * Description:       Multi Gallery block.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WP Contributor
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           blocks-course
 */

function gutenberg_multi_gallery_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'gutenberg_multi_gallery_init' );
