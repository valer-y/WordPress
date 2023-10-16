import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	PanelColorSettings,
	URLInput
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	TextControl,
	PanelBody,
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
				<PanelBody title={__('Logo Controls', 'cta')}
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
					<div>
						<button
							className={'clear-logo-button'}
							onClick={ () => {
							setAttributes({
								logoUrl: undefined
							});
						}}>
							Clear logo
						</button>

					</div>
					<TextControl
						label="Input link"
						value={ link }
						onChange={ (text) => setAttributes({ link: text }) }
						placeholder={__("Input URL for logo", 'cta')}
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
					className: `cta-admin`,
					style: {
						backgroundColor
					}
				})}>
				{ logoUrl && <div><img src={ logoUrl } /></div> }
				<RichText placeholder={__('Placeholder text', 'cta')}
						  tagname="p"
						  onChange={onChangeDescritption}
						  vaue = {description}
						  allowedFormats = {[
							  'core/bold',
							  'core/link'
						  ]}
						  className={'cta-description'}
				/>
				{ url && <div><img src={ url } alt={ alt } /></div> }
				<MediaPlaceholder
					  icon={"smiley"}
					  onSelect = { onSelectImage }
					  accept="image/*"
					  allowedTypes={['image']}
					  disableMediaButtons = { url }
				/>
			</section>
		</>
	);
}
