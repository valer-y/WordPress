// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {description, url, alt, id} = attributes;

	return (
		<section {...useBlockProps.save()}>
			{url && <img alt={ alt } src={ url } className={`wp-image-${ id }`}/>}
			<RichText.Content tagName="p" value={description} />
		</section>
	);
}
