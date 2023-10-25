import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'create-block/multi-text-list', {

	attributes: {
		list: {
			type: "string",
			default: ""
		}
	},
	description: __( 'Multi Text item', 'multi-text-notices-list' ),
	icon: {
		src: "editor-ul",
		foreground: "#187315",
	},
	title: __( 'List', 'multi-text-list' ),
	parent: ['create-block/multi-text-notices'],
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
} );
