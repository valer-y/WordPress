import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({attributes, setAttributes}) {
	const {list} = attributes;

	return (
		<RichText {...useBlockProps()}
			onChange={(val) => {setAttributes({list: val})}}
			value={list}
			placeholder={__('Input your list elements', 'gutenberg/multi-text-list')}
			tagName="ul"
			multiline="li"
			className="wp-block-gutenberg-multi-text multi-text-list"
		/>
	);
}

