/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';


import { useSelect, } from '@wordpress/data'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, clientId, setAttributes}) {
	const {backgroundColor, elems} = attributes;

	const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );

	const onChangeElems = ( newElems ) => {
		setAttributes( { elems: newElems } );
	};

	const appenderToUse = () => {
		let elems = innerBlockCount.length;

		onChangeElems(elems);

		if ( elems < 6 ) {

			return (
				<InnerBlocks.ButtonBlockAppender className={'test'}/>
			);
		} else {
			return false;
		}
	}

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Background Color', 'text-cards-gallery')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: ( b ) => setAttributes({ backgroundColor: b }),
							label: __('Color', 'text-cards-gallery'),
						},
					]}
				/>
			</InspectorControls>

			<section { ...useBlockProps({
				className: "text-cards-gallery",
				style: {
					backgroundColor
				}
			}) }>
				<div className="text-cards-gallery__wrapper">
					<InnerBlocks
						allowedBlocks={[
							'create-block/text-card'
						]}
						renderAppender={ () => appenderToUse() }
						template={[
							['create-block/text-card'],
							['create-block/text-card'],
							['create-block/text-card']
						]}
					/>
				</div>
			</section>
		</>
	);
}
