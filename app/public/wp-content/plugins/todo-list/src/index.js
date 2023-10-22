/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import "./todo-text";
import "./todo-gallery";
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "div"
		},
		heading: {
			content: {
				type: "string",
				source: "html",
				selector: "h3"
			}
		},
		urlImg: {
			type: "string",

		},
		logoUrl: {
			type: "string",
		},
		images: {
			type: 'array',
			source: 'query',
			selector: 'img',
			query: {
				url: {
					type: 'string',
					source: 'attribute',
					attribute: 'src',
				},
				alt: {
					type: 'string',
					source: 'attribute',
					attribute: 'alt',
				},
			}
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
