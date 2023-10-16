import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {description, url, alt, id, logoUrl, backgroundColor} = attributes;

	return (
		<section {...useBlockProps.save({
			style: {
				backgroundColor
			}
		})}>
			{logoUrl && <img alt="company logo" src={ logoUrl } />}
			{url && <img alt={ alt } src={ url } className={`wp-image-${ id }`}/>}
			<RichText.Content tagName="p" value={description} />
		</section>
	);
}
