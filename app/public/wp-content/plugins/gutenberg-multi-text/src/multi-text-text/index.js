import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'gutenberg/multi-text-text', {
	title: __( 'Multi Text text', 'multi-text' ),
	description: __( 'Multi Text item', 'multi-text' ),
	icon: {
		src: "text"
	},
	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "p"
		}
	},
	parent: ['gutenberg/multi-text'],
	supports: {
		// html: false,
		// reusable: false
	},
	edit: Edit,
	save: Save
} );
