import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocks-course/firstblock', {
	edit: function () {
		return <p className="class">Edit</p>;
	},
	save: function () {
		return <p className="class">Save</p>;
	},
} );
