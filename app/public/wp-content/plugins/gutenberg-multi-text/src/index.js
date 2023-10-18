import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg/multi-text', {
	icon: {
		src: "smiley",
		foreground: "#1a7e1d",
		background: "#d8ffda"
	},
	edit: Edit,
	save,
});
