/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

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
	const {backgroundColor, categoryColor, categoryName, color, bulletColor, title, urlImage, urlImageAlt, urlImageId} = attributes;

	return (
		<section {...useBlockProps.save({
			style: {
				backgroundColor,
				color
			},
			className: 'multi-text-notices__block'
		})}>
			<style>{`
					:root {
						--marker: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='Ellipse 774' cx='7' cy='7.5' r='5.5' stroke='${bulletColor.replace('#', '%23')}' stroke-width='3'/%3E%3C/svg%3E%0A");
					}`}
			</style>
			<div className={`multi-text-notices__block-wrapper ${categoryName ? '' : 'simple-text-notices__block'}`}>
				<div className="multi-text__image">
					{ urlImage && <img src={ urlImage } alt={ urlImageAlt } className={`wp-image-${ urlImageId }`} /> }
				</div>

				<div className={'wp-block-gutenberg-multi-text-notices multi-text-notices__wrapper'}>
					{categoryName && <p className={'wp-block-gutenberg-multi-text-notices block-category'} style={`color: ${categoryColor}`} >{ __(categoryName, "multi-text")}</p>}
					<RichText.Content
						tagName="h2"
						value={title}
						className={"wp-block-gutenberg-multi-text-notices block-heading"}
					/>
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
