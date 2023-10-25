/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText} from '@wordpress/block-editor';

import "./style.css";

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
	const { heading, text } = attributes;

	return (
		<>
			<div {...useBlockProps.save({
				className: "block-text-card"
			})}>
				<RichText.Content
					tagName="h4"
					value={ heading }
				/>
				<RichText.Content
					tagName="p"
					value={ text }
				/>

			</div>
		</>
	);
}