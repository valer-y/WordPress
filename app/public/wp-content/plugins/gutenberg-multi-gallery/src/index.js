import { registerBlockType } from '@wordpress/blocks';
import './gallery-image';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg/multi-gallery', {
	support: {
		html: false,
	},
	attributes: {
		backgroundColor : {
			type: "string",
			default: '#DFDFDF'
		},
	},
	edit: Edit,
	save,
} );
