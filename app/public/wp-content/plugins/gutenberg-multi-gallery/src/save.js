import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { elems } = attributes;

	let modifiedBlockProps = {...useBlockProps};

	return (
		<div
			{ ...modifiedBlockProps.save( {
				className: `has-elems-${ elems }`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
