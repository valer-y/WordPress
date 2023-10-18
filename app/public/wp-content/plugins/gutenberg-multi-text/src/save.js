import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
// import {RichText} from "@wordpress/block-editor/build/components";

export default function save({attributes}) {
	const {title, list} = attributes;

	return (
		<section {...useBlockProps.save()}>
			<RichText.Content
				tagName="h2"
				value={title}
			/>
			<RichText.Content
				value={list}
			/>
		</section>
	);
}
