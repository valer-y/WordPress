import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {url, alt, id} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{url && <img src={ url } alt={ alt } className={`wp-image-${ id }`} />}
		</div>
	);
}
