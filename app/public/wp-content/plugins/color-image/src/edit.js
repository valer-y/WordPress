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
import {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	PanelColorSettings,
	useBlockProps } from '@wordpress/block-editor';

import { ToolbarButton } from '@wordpress/components';

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
export default function Edit({attributes, setAttributes}) {
	const {urlImage, urlImageAlt, urlImageId, backgroundBottom, backgroundTop } = attributes;

	const onSelectImage = (m) => {setAttributes({urlImage: m.url, urlImageId: m.id, urlImageAlt: m.alt})}

	return (
		<>
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

			{ urlImage &&
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__('Replace image', 'cta')}
						onSelect = { onSelectImage }
						accept="image/*"
						allowedTypes={['image']}
						mediaId={ urlImageId }
						mediaURL={ urlImage }
					/>
					<ToolbarButton onClick={ () => setAttributes({ urlImage: undefined, urlImageId: undefined, urlImageAlt: '' }) }>
						{__('Remove image', 'cta')}
					</ToolbarButton>
				</BlockControls>
			}

			<section {...useBlockProps({
				className: 'color-image'
			})}>
				<style>{`
					:root {
						--color-image__top-bg_color: gray;
						--color-image__bottom-bg_color: green;
					}`}
				</style>

				<div className="color-image__color-bg">
					<div className="top-bg"></div>
					<div className="bottom-bg"></div>
				</div>
				<div className="color-image__wrapper">
					{ urlImage && <img src={ urlImage } alt={ urlImageAlt } className={`wp-image-${ urlImageId } cta-image`} /> }
				</div>

				<MediaPlaceholder
					icon={"format-image"}
					onSelect = { onSelectImage }
					accept="image/*"
					allowedTypes={['image']}
					disableMediaButtons = { urlImage }
				/>
			</section>
		</>
	);
}
