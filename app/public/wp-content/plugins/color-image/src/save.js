/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
	const { urlImage, urlImageAlt, urlImageId, backgroundBottom, backgroundTop } = attributes;

	return (
		<>
			<section {...useBlockProps.save({
				className: 'color-image'
			})} >
				<style>{`
					:root {
						--color-image__top-bg_color: ${backgroundTop};
						--color-image__bottom-bg_color: ${backgroundBottom};
					}`}
				</style>

				<div className="color-image__color-bg">
					<div className="top-bg"></div>
					<div className="bottom-bg"></div>
				</div>
				<div className="color-image__wrapper">
					{ urlImage && <img src={ urlImage } alt={ urlImageAlt } className={`wp-image-${ urlImageId } cta-image`} /> }
				</div>
			</section>

		</>
	);
}
