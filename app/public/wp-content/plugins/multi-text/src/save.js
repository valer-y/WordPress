/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	const { categoryName, color, backgroundColor, bulletColor, fontColor, title } = attributes;

	return (
		<section {...useBlockProps.save({
			style: {
				backgroundColor,
			},
			className: 'multi-text__block'
		})}>
			<style>{`
					:root {
						--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${bulletColor.replace('#', '%23')}' stroke-width='3'/%3E%3C/svg%3E%0A");
						--multi-text__font-color: ${fontColor}
					}`}
			</style>
			<div className={`multi-text__block-wrapper ${categoryName ? '' : 'simple-text__block'}`}>
				{categoryName && <p className={'wp-block-gutenberg-multi-text block-category'} style={`color: ${color}`} >{ __(categoryName, "multi-text")}</p>}
				<div className={'wp-block-gutenberg-multi-text multi-text__wrapper'}>
					<RichText.Content
						tagName="h2"
						value={title}
						className={"wp-block-gutenberg-multi-text block-heading"}
					/>
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
