import { useBlockProps, RichText } from '@wordpress/block-editor';

import "./style.css"

export default function Save({attributes}) {
	const {list} = attributes;

	return (
		<RichText.Content {...useBlockProps.save()}
		  value={list}
		  tagName="ul"
		  multiline="li"
		  className="wp-block-gutenberg-multi-text multi-text-list"
		/>
	);
}

