import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const { backgroundColor } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Spacer Color', 'color-spacer')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Color', 'color-spacer'),
						},
					]}
				/>

			</InspectorControls>
			<section {...useBlockProps({
					className: `gutenberg__color-spacer`,
					style: {
						backgroundColor
					}
				})}>{__('Block Color Spacer', 'color-spacer')}
			</section>
		</>
	);
}
