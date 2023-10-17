import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from "@wordpress/components";
// import './editor.scss';

export default function Edit(attributes, setAttributes) {
	const {url, elems} = attributes

	return (
		<section {...useBlockProps()} >
			<p>Edit test</p>
		</section>
	);
}
