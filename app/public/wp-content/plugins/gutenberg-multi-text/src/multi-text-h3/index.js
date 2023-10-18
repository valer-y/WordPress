import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'gutenberg/multi-text-h3', {
	title: __( 'Multi Text H3', 'multi-text' ),
	description: __( 'Multi Text item', 'multi-text' ),
	icon: {
		src: "editor-textcolor"
	},
	attributes: {
		heading: {
			type: "string",
			source: "html",
			selector: "h3"
		}
	},
	parent: ['gutenberg/multi-text'],
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
} );
