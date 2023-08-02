import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks
} from "@wordpress/block-editor";


const TEMPLATE = [ [ 'core/columns', { backgroundColor: 'yellow', verticalAlignment: 'center' }, [
	[ 'core/column', { templateLock: 'all' }, [
		[ 'core/image' ],
	] ],
	[ 'core/column', { templateLock: 'all' }, [
		[ 'example-block/example-block', { placeholder: 'Enter side content...' } ],
	] ],
] ] ];


registerBlockType('example-block/example-container-block', {
	title: __( 'KA Container block', 'example-block' ),
	category: 'design',

	edit( { className } ) {

		return(
			<div className={ className }>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="all"
				/>
			</div>
		)
	},

	save() {
		const blockProps = useBlockProps.save();
		return(
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		)
	},
});
