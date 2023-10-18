import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({attributes, setAttributes}) {
	const {heading} = attributes;

	// const onChangeContent = (newContent) => {setAttribute()}

	return (
		<div {...useBlockProps()}>
			<RichText
				onChange={(val) => {setAttributes({heading: val})}}
				value={heading}
				placeholder={__('Input your sub-heading', 'gutenberg/multi-text-h4')}
				tagName="h3"
			/>
		</div>
	);
}

