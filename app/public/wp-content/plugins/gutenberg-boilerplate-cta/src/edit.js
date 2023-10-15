import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder, BlockControls, MediaReplaceFlow } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {description, id, url, alt} = attributes;
	const onChangeDescritption = (newDescription) => {
		setAttributes({description: newDescription})
	}
	const onSelectImage = (image) => {
		if(!image || !image.url) {
			setAttributes( {url: undefined, id: undefined, alt: ''} );
			return;
		}
		setAttributes( { url: image.url, id: image.id, alt: image.alt } );
	}

	return (
		<BlockControls>
			<section {...useBlockProps()}>
				{ url && <img src={ url } alt={ alt } /> }
				<MediaPlaceholder icon={"smiley"}
								  onSelect = { onSelectImage }
								  onError = { (e) => console.log(e) }
								  accept="image/*"
								  allowedTypes={['image']}
								  disableMediaButtons = {url}

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
		</BlockControls>
	);
}
