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
	ColorPalette,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder, MediaReplaceFlow,
	PanelColorSettings,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

import { PanelBody, TextControl, ToolbarButton } from "@wordpress/components";

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
	const {backgroundColor, bulletColor, color, categoryColor, categoryName, title, urlImage, urlImageAlt, urlImageId} = attributes;

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
				<PanelBody
					title={ __( 'Category settings', 'multi-text-notices' ) }
					icon="admin-appearance"
					initialOpen={true}
				>
					<TextControl
						label={__('Category elemnt\'s text-notices', 'multi-text-notices')}
						placeholder={__('Type block\'s category')}
						value={categoryName}
						onChange = { (n)=> {setAttributes({categoryName: n})} }
					/>
					<PanelColorSettings
						title={__('Element\'s color', 'multi-text-notices')}
						colorSettings={[
							{
								value: categoryColor,
								onChange: (c) => setAttributes({ categoryColor: c }),
								label: __('categoryColor', 'multi-text-notices'),
							},
						]}
					/>
					<ColorPalette
						title={__('Font color', 'multi-text-notices')}
						colors={[
							{ name: 'red', color: '#FFFFFF'},
							{ name: 'black', color: '#191B20'}
						]}
						disableCustomColors={true}
						value={color}
						onChange={( c ) => {setAttributes({color: c})}}
						clearable={false}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Background color', 'multi-text-notices')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Color', 'multi-text-notices'),
						},
					]}
				/>
				<PanelColorSettings
					title={__('Bullet color', 'multi-text-notices')}
					colorSettings={[
						{
							value: bulletColor,
							onChange: (newColorValue) => setAttributes({ bulletColor: newColorValue }),
							label: __('Color', 'multi-text-notices'),
						},
					]}
				/>


			</InspectorControls>


			<section {...useBlockProps({
					style: {
						backgroundColor,
						color
					},
					className: 'multi-text-notices__block'
				}
			)}>
				<div className="multi-text__image">
					{ urlImage && <img src={ urlImage } alt={ urlImageAlt } className={`wp-image-${ urlImageId }`} /> }
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
				</div>

				<style>{`
					:root {
						--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${bulletColor.replace('#', '%23')}' stroke-width='3'/%3E%3C/svg%3E%0A")
					}`}
				</style>

				<div className={'wp-block-gutenberg-multi-text-notices multi--notices__wrapper'}>
					<p {...useBlockProps({
						className: "wp-block-gutenberg-multi-text-notices block-category",
					})} >
						{ __(categoryName, "multi-text-notices")}
					</p>
					<div className={'multi--notices__content'}>
						<RichText
							onChange = {(t) => setAttributes({title: t})}
							placeholder={__("Input block title", "multi-text")}
							tagName="h2"
							// allowedFormats={[]}
							value={title}
							className={"wp-block-gutenberg-multi-text block-heading"}
						/>
						<InnerBlocks
							allowedBlocks={[
								'create-block/multi-text-text',
								'create-block/multi-text-list',
								'create-block/multi-text-h3'
							]}
						/>
					</div>

					<MediaPlaceholder
						icon={"format-image"}
						onSelect = { onSelectImage }
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons = { urlImage }
					/>
				</div>
			</section>
		</>
	);
}
