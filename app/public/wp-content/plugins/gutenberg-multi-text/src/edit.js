import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody
} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {title, backgroundColor, categoryName} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={__('Category', 'multi-text')}
						placeholder={__('Type block\'s category')}
						value={categoryName}
						onChange = {(newCategoryName)=> {setAttributes({categoryName: newCategoryName})}}
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
			</InspectorControls>
			<section {...useBlockProps({
					style: {
						backgroundColor,
					},
					className: 'multi-text__block'
				}
			)}>
				<p className={'multi-text__block-category'}>{ __('Text', "multi-text")}</p>
				<div className={'multi-text__wrapper'}>
					<RichText
						onChange = {(newTitle) => setAttributes({title: newTitle})}
						placeholder={__("Input block title", "multi-text")}
						tagName="h2"
						allowedFormats={[]}
						value={title}
					/>
					<InnerBlocks
						allowedBlocks={[
							'gutenberg/multi-text-text',
							'gutenberg/multi-text-list',
							'gutenberg/multi-text-h3'
						]}
					/>
				</div>
			</section>
		</>
			);
}
