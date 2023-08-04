import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType("block-course/text-box", {
	icon: {
		src: 'text-page',
		foreground: '#EA5C78FF'
	},
	edit: Edit,
	save,
});
