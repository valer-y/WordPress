import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {list} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
			  value={list}
			/>
		</div>
	);
}

