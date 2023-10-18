import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({attributes, setAttributes}) {
	const {list} = attributes;

	// const onChangeContent = (newContent) => {setAttribute()}

	return (
		<div {...useBlockProps()}>
			<RichText
				onChange={(val) => {setAttributes({list: val})}}
				value={list}
				placeholder={__('Input your list elements', 'gutenberg/multi-text-list')}
				tagName="ul"
				multiline="li"
			/>
		</div>
	);
}

