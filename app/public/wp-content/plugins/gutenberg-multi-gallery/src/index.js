import { registerBlockType } from '@wordpress/blocks';
import './gallery-image';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg/multi-gallery', {
	icon: {
		src: 'format-gallery',
		foreground: '#3771ee',
		background: '#eff6ff'
	},
	edit: Edit,
	save,
} );
