import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { url, alt, id } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			{ url && (
				<img
					src={ url }
					alt={ alt }
					className={ id ? `wp-image-${ id }` : null }
				/>
			) }
		</div>
	);
}
