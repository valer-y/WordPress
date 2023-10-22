import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'gutenberg/multi-text-list', {

	attributes: {
		list: {
			type: "string",
			default: ""
		}
	},
	description: __( 'Multi Text item', 'multi-text-list' ),
	icon: {
		src: "editor-ul",
		foreground: "#187315",
	},
	title: __( 'List', 'multi-text-list' ),
	parent: ['create-block/multi-text'],
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
} );
