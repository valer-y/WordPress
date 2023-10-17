import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'gutenberg/gallery-image', {
	title: __( 'Gallery Image', 'multi-gallery' ),
	description: __( 'Gallery image item', 'multi-gallery' ),
	icon: 'smiley',
	parent: [ 'gutenberg/multi-gallery' ],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
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
	save: Save,
} );
