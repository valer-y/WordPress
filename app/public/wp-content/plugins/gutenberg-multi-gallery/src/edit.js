import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { clientId, attributes, setAttributes } ) {
	const { columns } = attributes;

	const onChangeColumns = ( newColumns ) => {
		setAttributes( { columns: newColumns } );
	};

	console.log(clientId);

	return (
		<div
			{ ...useBlockProps( {
				className: `has-${ columns }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'team-members' ) }
						min={ 1 }
						max={ 6 }
						onChange={ onChangeColumns }
						value={ columns }
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'gutenberg/gallery-image' ] }
				orientation="horizontal"
				template={ [
					[ 'gutenberg/gallery-image' ],
					[ 'gutenberg/gallery-image' ],
					[ 'gutenberg/gallery-image' ],
				] }
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</div>
	);
}
