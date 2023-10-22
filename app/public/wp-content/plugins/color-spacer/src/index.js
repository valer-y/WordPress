import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg/color-spacer', {
	support: {
		html: false,
	},
	icon: {
		src: "minus",
		foreground: "#7fa8ff",
	},
	attributes: {
		backgroundColor : {
			type: "string",
			default: ''
		}
	},
	edit: Edit,
	save,
});
