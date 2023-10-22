/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
	const {
		backgroundColor,
		heading,
		link,
		urlImage,
		urlImageAlt,
		urlImageId,
		urlLogo} = attributes;

	return (
		<>
			<section {...useBlockProps.save({
				style: {
					backgroundColor
				},
			})} className={'cta-block'} >
				{urlLogo &&
					<a href={ link } className={'cta-logo'}>
						<img alt="company logo" src={ urlLogo }	alt={ __('company logo', 'cta') } className={'cta-logo__icon'} />
					</a>
				}
				{/*{ urlLogo && <img src={ urlLogo } alt={ __('company logo', 'cta') } /> }*/}
				<RichText.Content { ...useBlockProps.save() }
								  tagName="p"
								  value={ heading }
								  className={'cta-description'}
				/>
				{ urlImage && <img src={ urlImage } alt={ urlImageAlt } className={`wp-image-${ urlImageId } cta-image`} /> }
			</section>

		</>
	);
}
