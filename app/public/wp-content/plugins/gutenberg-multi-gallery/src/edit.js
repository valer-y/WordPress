import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import {PanelBody, RangeControl} from "@wordpress/components";

export default function Edit( clientId, attributes, setAttributes) {
	const {url, elems} = attributes;

	console.log('TTTTTT === ');

	return (
		<section { ...useBlockProps({
			className: `has-${elems}-elems`
		}) }>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						icon={'admin-settings'}
						label={__('Elements qty', 'multi-gallery')}
						min={2}
						max={6}
						onChange={(newElems) => setAttributes({elems: newElems})}
						value={elems}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={['gutenberg/gallery-image']}
				template={[
					['gutenberg/gallery-image'],
					['gutenberg/gallery-image'],
					['gutenberg/gallery-image']
				]}
				// templateLock={}
			/>
		</section>
	);
}
