import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { elems, backgroundColor } = attributes;

	let modifiedBlockProps = {...useBlockProps};

	return (
		<div className={ `has-elems-${ elems }`} id={'gallery-image-wrapper'} style={ `background-color: ${backgroundColor}` }>
			<div
				{ ...modifiedBlockProps.save( {
					className: `gallery-images`,
				} ) }
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}

// display: flex;
// margin: 0 -240px;
// width: calc(100% + 480px);
// max-width: none;
// position: relative;
// height: 0;

// display: flex;
// position: absolute;
// top: -210px;
