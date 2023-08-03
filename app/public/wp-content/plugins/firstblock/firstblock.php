<?php

/**
 * Plugin Name: First Block
 * Plugin URI: https://alialaa.com/
 * Description: My first block
 * Author: Ali Alaa
 * Author URI: https://alialaa.com/
 */

function firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "firstblock_init" );