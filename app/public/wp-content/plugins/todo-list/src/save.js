/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

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
	const { content, heading, para, urlImg, logoUrl, images } = attributes;

	// console.log(para);

	return (
		<>
			{ urlImg && <img src={ images[0].url } alt={ images[0].alt } /> }
			{ logoUrl && <img alt="company logo" src={ logoUrl } />}
			<InnerBlocks.Content />
			<RichText.Content { ...useBlockProps.save() }
							  tagName="h3"
							  value={ heading }
			/>
			{/*<RichText.Content { ...useBlockProps.save() }*/}
			{/*				  tagName="div"*/}
			{/*				  value={ content }*/}
			{/*				  className="ttttt"*/}
			{/*/>*/}
		</>
	);
}
