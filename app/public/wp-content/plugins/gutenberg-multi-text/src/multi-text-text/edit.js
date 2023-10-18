import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({attributes, setAttributes}) {
	const {content} = attributes;

	// const onChangeContent = (newContent) => {setAttribute()}

	return (
		<div {...useBlockProps()}>
			<RichText
				onChange={(val) => {setAttributes({content: val})}}
				value={content}
				placeholder={__('Input your text', 'gutenberg/multi-text-text')}
				multiline="p"
			/>
		</div>
	);
}

