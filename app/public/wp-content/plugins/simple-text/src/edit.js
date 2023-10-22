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
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

import { ColorPalette, PanelBody } from '@wordpress/components';
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

export default function Edit( {attributes, setAttributes} ) {
	const { backgroundColor, color, text } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Background color', 'simple-text')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (val) => setAttributes({ backgroundColor: val }),
							label: __('Color', 'tar'),
						},
					]}
				/>
				<PanelBody
					title="Font Color"
					opened={true}
				>
					<ColorPalette
						colors={[
							{ name: "dark", color: "#191B20"},
							{ name: "dark-alt", color: "#3E3465"},
							{ name: "light", color: "#FFFFFF"}
						]}
						disableCustomColors={ true }
						onChange={ (col) => {setAttributes({ color: col })}}
						value={ color }
						clearable={ false }
					/>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps({
				style: { backgroundColor },
				className: `simple-text`
			})}>
				<RichText {...useBlockProps({
					style: {color}
				})}
					onChange={(val) => { setAttributes({text: val})} }
					value={text}
					placeholder={__('Input your sub-heading', 'simple-text')}
					tagName="p"
					allowedFormats={[ "core/bold", "core/link" ]}
				/>
			</section>
		</>

	);
}
