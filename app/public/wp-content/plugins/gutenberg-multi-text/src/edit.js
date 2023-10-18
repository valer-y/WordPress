import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {title, list} = attributes;

	return (
		<section {...useBlockProps()}>
			<RichText
				onChange = {(newTitle) => setAttributes({title: newTitle})}
				placeholder={__("Input block title", "multi-text")}
				tagName="h2"
				allowedFormats={[]}
				value={title}
			/>
			<RichText
				onChange = {(newList) => setAttributes({list: newList})}
				placeholder={__("List area", "multi-text")}
				tagName="ul"
				multiline="li"
				value={list}
			/>
			<RichText
				onChange = {(newList) => setAttributes({list: newList})}
				placeholder={__("Input text there", "multi-text")}
				tagName="p"
				multiline= {true}
				value={list}
			/>

		</section>
	);
}
