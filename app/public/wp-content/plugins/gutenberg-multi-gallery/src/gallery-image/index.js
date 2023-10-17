import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";


registerBlockType( 'gutenberg/gallery-image', {
	title: __('Multi Gallery Image', 'multi-gallery'),
	description: __('Image for Multi Gallery block', 'multi-gallery'),
	parent: ["gutenberg/multi-gallery"],
	icon: {
		src: 'format-image',
		foreground: '#0cb033'
	},
	supports: {
		reusable: false,
		html: false
	},
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img'
		}
		// id: {
		// 	type: number
		// },
		// alt: {
		// 	type: "string",
		// 	source: "attribute",
		// 	selector: "img",
		// 	attribute: 'alt',
		// 	default: ''
		// },
	},
	edit: Edit,
	save: Save
} );
