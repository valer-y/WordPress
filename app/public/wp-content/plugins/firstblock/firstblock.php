<?php
/**
* Plugin name: First block
* Description: First test block
*/

function test_block_init() {
	register_block_type_from_metadata(__DIR__);
}

add_action("init", "test_block_init");