import { registerBlockType } from '@wordpress/blocks';
import './gallery-image';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg/multi-gallery', {
	attributes: {
		toggle: {
			type: "bool",
			default: false
		},
		elems: {
			text: "string",
		},
		backgroundBottom: {
			text: "string"
		}
		, backgroundTop: {
			text: "string"
		}
	},
	icon: {
		src: 'format-gallery',
		foreground: "#7fa8ff"
	},
	edit: Edit,
	save,
} );
