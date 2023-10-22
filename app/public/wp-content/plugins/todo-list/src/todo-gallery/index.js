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

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'create-block/todo-list-image', {
	// title: __( 'Multi Text list', 'multi-text-list' ),
	// description: __( 'Multi Text item', 'multi-text-list' ),
	// icon: {
	// 	src: "editor-ul"
	// },
	// parent: ['gutenberg/multi-text'],
	title: 'Todo image',
	icon: {
		src: 'smiley',
		background: '#398d26'
	},
	parent: ['create-block/todo-list'],
	attributes: {
		imgUrl: {
			type: "string"
		},
		logo: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src"
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
