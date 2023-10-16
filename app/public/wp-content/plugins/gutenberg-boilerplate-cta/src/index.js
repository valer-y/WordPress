import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg/boilerplate-cta', {
	support: {
		html: false,
	},
	attributes: {
		backgroundColor : {
			type: "string",
			default: '#F00'
		},
		description: {
			type: "string",
			source: "html",
			selector: "p"
		},
		id: {
			type: "number"
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: ""
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src"
		},
		link : {
			link: 'https://ya.ru',
		},
		logoUrl: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src"
		}
	},
	edit: Edit,
	save,
});
