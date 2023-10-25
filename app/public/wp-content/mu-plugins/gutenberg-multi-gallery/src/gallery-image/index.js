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
		foreground: '#187315'
	},
	supports: {
		reusable: false,
		html: false
	},
	attributes: {
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
	},
	edit: Edit,
	save: Save
} );
