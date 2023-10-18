import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<section {...useBlockProps()}>
			<RichText
				placeholder={__("Input block title", "multi-text")}
				tagName="h4"
				allowedFormats={[]}
			/>
		</section>
	);
}
