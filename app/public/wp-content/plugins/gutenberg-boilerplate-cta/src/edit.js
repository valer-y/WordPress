import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	TextControl,
	PanelBody
} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {description, id, url, alt, backgroundColor, link, logoUrl} = attributes;
	const onChangeDescritption = (newDescription) => {
		setAttributes({description: newDescription})
	}

	const onSelectImage = (image) => {
		if(!image || !image.url) {
			setAttributes( {
				url: undefined,
				id: undefined,
				alt: ''
			});
			return;
		}
		setAttributes( { url: image.url, id: image.id, alt: image.alt } );
	}

	const onSelectLogo = (logo) => {
		if(!logo || !logo.url) {
			setAttributes( {
				url: undefined,
			});
			return;
		}
		console.log(logo);
		setAttributes( { logoUrl: logo.url} );
	}

	const removeImage = () => {
		setAttributes({
			url: undefined,
			id: undefined,
			alt: ''
		});
	}

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Background color', 'tar')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
							label: __('Color', 'tar'),
						},
					]}
				/>
				<PanelBody title={__('Logo', 'cta')}
						   icon={"buddicons-activity"}
					>
					{ logoUrl && <img src={ logoUrl } alt="logo" /> }
					<MediaPlaceholder
						icon={"smiley"}
						onSelect = { onSelectLogo }
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons = { logoUrl }
					/>
					<TextControl
						label="Input link"
						value={ link }
					/>
				</PanelBody>

			</InspectorControls>
			{ url && <BlockControls group="inline">
				<MediaReplaceFlow
					name={__('Replace image', 'cta')}
					onSelect = { onSelectImage }
					accept="image/*"
					allowedTypes={['image']}
					mediaId={ id }
					mediaURL={ url }
				/>
				<ToolbarButton onClick={ removeImage }>
					{__('Remove image', 'cta')}
				</ToolbarButton>
			</BlockControls> }
			<section {...useBlockProps({
					className: `test`,
					style: {
						backgroundColor
					}
				})}>
				{ url && <img src={ url } alt={ alt } /> }
				<MediaPlaceholder
					  icon={"smiley"}
					  onSelect = { onSelectImage }
					  accept="image/*"
					  allowedTypes={['image']}
					  disableMediaButtons = { url }
				/>
				<RichText placeholder={__('Placeholder text', 'cta')}
						  tagname="p"
						  onChange={onChangeDescritption}
						  vaue = {description}
						  allowedFormats = {[
							  'core/bold',
							  'core/link'
						  ]}
				/>
			</section>
		</>
	);
}
