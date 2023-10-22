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
	RichText,
	useBlockProps  } from '@wordpress/block-editor';

import {
	ToolbarButton,
	TextControl,
	PanelBody } from '@wordpress/components';

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
export default function Edit({ attributes, setAttributes}) {
	const {
		backgroundColor,
		heading,
		link,
		urlImage,
		urlImageAlt,
		urlImageId,
		urlLogo } = attributes;

	const onSelectImage = (i) => {
		if(! i || ! i.url) {
			setAttributes( {
				urlImage: undefined,
				urlImageId: undefined,
				urlImageAlt: ''
			});
			return;
		}
		setAttributes( {urlImage: i.url, urlImageId: i.id, urlImageAlt: i.alt } );
	}

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Background color', 'tar')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Color', 'cta'),
						},
					]}
				/>
				<PanelBody title={__('Logo Controls', 'cta')}
						   icon={"buddicons-activity"}
				>
					{ urlLogo && <img src={ urlLogo } alt="logo" /> }
					<MediaPlaceholder
						onSelect = { (l) => {setAttributes( {urlLogo: l.url} )} }
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons = { urlLogo }
					/>
					<div>
						<button
							className={'clear-logo-button'}
							onClick={ () => {
								setAttributes({
									logoUrl: undefined
								});
							}}>
							Clear logo
						</button>
					</div>

					<TextControl
						label="Input link"
						value={ link }
						onChange={ (text) => setAttributes({ link: text }) }
						placeholder={__("Input URL for logo", 'cta')}
					/>
				</PanelBody>

			</InspectorControls>


			{ urlImage && <BlockControls group="inline">
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
			</BlockControls> }

			<section {...useBlockProps({
				className: `cta-admin`,
				style: {
					backgroundColor
				}
			})}>
				{ urlLogo && <img src={ urlLogo } alt="logo" /> }

				{/*{ urlImage && <img alt={urlImageAlt} src={urlImage} className={`wp-image-${ urlImageId } cta-image`} /> }*/}
				<RichText
					  placeholder={'Placeholder heading'}
					  onChange={ (c) => {setAttributes({heading: c})}}
					  value={ heading }
					  tagName="p"
					  allowedFormats = {[
						  'core/bold',
						  'core/link'
					  ]}
				/>

				{urlImage && <img alt={urlImageAlt} src={urlImage} className={`wp-image-${ urlImageId } cta-image`} />}
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
