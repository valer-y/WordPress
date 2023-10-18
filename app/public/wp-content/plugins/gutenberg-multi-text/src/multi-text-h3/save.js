import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {heading} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
			  value={heading}
			  tagName="h3"
			/>
		</div>
	);
}

