import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('gutenberg/boilerplate-cta', {
	support: {
		html: false,
	},
	attributes: {
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
		}
	},
	edit: Edit,
	save,
});
