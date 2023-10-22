<?php // mu-plugins/load.php

function hello_dolly() {

    $str = '    ';

    $arr = array_diff(scandir(WPMU_PLUGIN_DIR), [".", "..", "index.php"]);

    foreach ($arr as $elem) {
        $str .= "  " . $elem;
    }

//    require WPMU_PLUGIN_DIR."/${arr}/plugin.php";


//    printf(
//        '<p id="dolly">%s</p>', $arr
//    );
}

// Now we set that function up to execute when the admin_notices action is called.
add_action( 'admin_notices', 'hello_dolly' );

//require WPMU_PLUGIN_DIR.'/plugin/plugin.php';