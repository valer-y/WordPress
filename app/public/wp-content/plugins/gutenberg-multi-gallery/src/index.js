import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg/multi-gallery', {
	edit: Edit,
	save,
} );
