import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {content} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
			  value={content}
			/>
		</div>
	);
}

