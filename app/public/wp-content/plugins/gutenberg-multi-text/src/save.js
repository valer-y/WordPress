import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
// import {RichText} from "@wordpress/block-editor/build/components";

export default function save({attributes}) {
	const {title, backgroundColor, categoryName} = attributes;

	return (
		<section {...useBlockProps.save({
			style: {
				backgroundColor,
			},
			className: 'multi-text__block'
		})}>
			 eslint-disable-next-line @wordpress/i18n-no-variables
			<p>{ __(categoryName, "multi-text")}</p>
			<RichText.Content
				tagName="h2"
				value={title}
			/>
			<InnerBlocks.Content />
		</section>
	);
}
