import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './multi-text-text';
import './multi-text-list';
import './multi-text-h3';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg/multi-text', {
	icon: {
		src: "welcome-write-blog",
		foreground: "#1a7e1d",
		background: "#d8ffda"
	},
	attributes: {
		backgroundColor: {
			type: "string",
			default: ""
		},
		categoryName: {
			type: "string",
			default: ""
		}
	},
	edit: Edit,
	save,
});
