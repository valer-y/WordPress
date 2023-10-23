import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, RangeControl } from "@wordpress/components";
import { useSelect, } from '@wordpress/data';

export default function Edit( {clientId, attributes, setAttributes} ) {
	const {elems, backgroundBottom, backgroundTop } = attributes;

	const onChangeElems = ( newElems ) => {
		setAttributes( { elems: newElems } );
		console.log(elems);
	};

	const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );

	const appenderToUse = () => {
		let elems = innerBlockCount.length;

		if ( elems < 6 ) {

			onChangeElems(elems);

			return (
				<InnerBlocks.ButtonBlockAppender className={'test'}/>
			);
		} else {
			return false;
		}
	}


	return (
		<section { ...useBlockProps({
			className: `has-${elems}-elems`
		}) }>
			<InspectorControls>
				<PanelColorSettings
					title={__('Top Background Color', 'color-image')}
					colorSettings={[
						{
							value: backgroundTop,
							onChange: ( c ) => setAttributes({ backgroundTop: c }),
							label: __('Color', 'color-spacer'),
						},
					]}
				/>
				<PanelColorSettings
					title={__('Bottom Background Color', 'color-image')}
					colorSettings={[
						{
							value: backgroundBottom,
							onChange: ( c ) => setAttributes({ backgroundBottom: c }),
							label: __('Color', 'color-spacer'),
						},
					]}
				/>
			</InspectorControls>

			<div className="multi-gallery__color-bg">
				<div className="top-bg"></div>
				<div className="bottom-bg" ></div>
			</div>
			<div className="multi-gallery__wrapper">
				<InnerBlocks
					allowedBlocks={['gutenberg/gallery-image']}
					template={[
						['gutenberg/gallery-image'],
						['gutenberg/gallery-image'],
						['gutenberg/gallery-image']
					]}

					renderAppender={ () => appenderToUse() }
				/>
			</div>


		</section>
	);
}
