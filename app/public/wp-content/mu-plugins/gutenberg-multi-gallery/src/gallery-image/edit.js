import {useBlockProps, MediaPlaceholder, BlockControls, MediaReplaceFlow} from '@wordpress/block-editor';
import {ToolbarButton} from "@wordpress/components";
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { url, alt, id } = attributes

	const onSelectImage = (i) => {
		if(! i || ! i.url) {
			setAttributes( {
				url: undefined,
				id: undefined,
				alt: ''
			});
			return;
		}
		setAttributes( {url: i.url, id: i.id, alt: i.alt } );
	}

	return (

		<>
			{ url && <BlockControls group="inline">
				<MediaReplaceFlow
					name={__('Replace image', 'cta')}
					onSelect = { onSelectImage }
					accept="image/*"
					allowedTypes={['image']}
					mediaId={ id }
					mediaURL={ url }
				/>
				<ToolbarButton onClick={ () => setAttributes({ url: undefined, id: undefined, alt: '' }) }>
					{__('Remove image', 'cta')}
				</ToolbarButton>
			</BlockControls> }

			<div {...useBlockProps()} >
				{ url && <img src={ url } alt={ alt } className={`wp-image-${ id }`} /> }
				<MediaPlaceholder
					icon="admin-users"
					onSelect={ ( i ) => { setAttributes({ url: i.url}) } }
					// onSelectURL={ onSelectURL }
					// onError={ ( err ) => console.log( err ) }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					disableMediaButtons={ url }
				/>
			</div>
		</>

	);
}
