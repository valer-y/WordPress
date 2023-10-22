import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { backgroundColor } = attributes;

	return (
		<div {...useBlockProps.save({
			style: {
				backgroundColor
			},
			className: "gutenberg__color-spacer"
		})} >
		</div>
	);
}
