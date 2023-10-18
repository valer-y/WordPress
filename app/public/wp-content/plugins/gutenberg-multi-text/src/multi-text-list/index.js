import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'gutenberg/multi-text-list', {
	title: __( 'Multi Text list', 'multi-text-list' ),
	description: __( 'Multi Text item', 'multi-text-list' ),
	icon: {
		src: "editor-ul"
	},
	parent: ['gutenberg/multi-text'],
	attributes: {
		list: {
			type: "string",
			default: ""
		}
	},
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
} );
