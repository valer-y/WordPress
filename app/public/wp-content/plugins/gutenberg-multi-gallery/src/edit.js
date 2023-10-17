import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { clientId, attributes, setAttributes } ) {
	const { elems, backgroundColor } = attributes;

	const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );


	const appenderToUse = () => {
		let elems = innerBlockCount.length;

		if ( elems < 6 ) {

			onChangeElems(elems);

			return (
				<InnerBlocks.ButtonBlockAppender className={'test'}/>
			);
		} else {
			return false;
		}
	}

	const onChangeElems = ( newElems ) => {
		setAttributes( { elems: newElems } );
		console.log(elems);
	};

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
				{/*<PanelBody title={__('Logo', 'cta')}*/}
				{/*		   icon={"buddicons-activity"}*/}
				{/*>*/}
				{/*	{ logoUrl && <img src={ logoUrl } alt="logo" /> }*/}
				{/*	<MediaPlaceholder*/}
				{/*		icon={"smiley"}*/}
				{/*		onSelect = { onSelectLogo }*/}
				{/*		accept="image/*"*/}
				{/*		allowedTypes={['image']}*/}
				{/*		disableMediaButtons = { logoUrl }*/}
				{/*	/>*/}
				{/*	<TextControl*/}
				{/*		label="Input link"*/}
				{/*		value={ link }*/}
				{/*	/>*/}
				{/*</PanelBody>*/}
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: `has-${ elems }-elems`,
				} ) }
			>
				<InnerBlocks
					allowedBlocks={ [ 'gutenberg/gallery-image' ] }
					orientation="horizontal"
					template={ [
						[ 'gutenberg/gallery-image' ],
						[ 'gutenberg/gallery-image' ],
						[ 'gutenberg/gallery-image' ],
					] }
					renderAppender={ () => appenderToUse() }
				/>
			</div>

		</>

	);
}
