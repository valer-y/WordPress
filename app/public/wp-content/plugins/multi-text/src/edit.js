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
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	ColorPalette
} from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody
} from '@wordpress/components';

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
	const { backgroundColor, bulletColor, categoryName, color, fontColor, title } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Category settings', 'multi-text' ) }
					icon="admin-appearance"
					initialOpen={true}
				>
					<TextControl
						label={__('Category elemnt\'s text', 'multi-text')}
						placeholder={__('Type block\'s category')}
						value={categoryName}
						onChange = { (n)=> {setAttributes({categoryName: n})} }
					/>
					<PanelColorSettings
						title={__('Element\'s color', 'multi-text')}
						colorSettings={[
							{
								value: color,
								onChange: (c) => setAttributes({ color: c }),
								label: __('Color', 'multi-text'),
							},
						]}
					/>
					<ColorPalette
						title={__('Font color', 'multi-text')}
						colors={[
							{ name: 'red', color: '#FFFFFF'},
							{ name: 'black', color: '#191B20'}
						]}
						disableCustomColors={true}
						value={fontColor}
						onChange={(newFontColor) => {setAttributes({fontColor: newFontColor})}}
						clearable={false}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Background color', 'multi-text')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Color', 'multi-text'),
						},
					]}
				/>
				<PanelColorSettings
					title={__('Bullet color', 'multi-text')}
					colorSettings={[
						{
							value: bulletColor,
							onChange: (newColorValue) => setAttributes({ bulletColor: newColorValue }),
							label: __('Color', 'multi-text'),
						},
					]}
				/>


			</InspectorControls>
			<section {...useBlockProps({
					style: {
						backgroundColor,
					},
					className: 'multi-text__block'
				}
			)}>
				<p {...useBlockProps({
					style: {
						color
					},
					className: "wp-block-gutenberg-multi-text block-category"
				})}>
					{ __(categoryName, "multi-text")}
				</p>

				<style>{`
					:root {
						--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${bulletColor.replace('#', '%23')}' stroke-width='3'/%3E%3C/svg%3E%0A");
						--multi-text__font-color: ${fontColor}
					}`}
				</style>

				<div className={'wp-block-gutenberg-multi-text multi-text__wrapper'}>
					<div className={'multi-text__content'}>
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
				</div>
			</section>
		</>
	);
}
