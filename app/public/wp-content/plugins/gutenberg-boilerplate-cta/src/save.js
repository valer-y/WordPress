import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {description, url, alt, id, logoUrl, backgroundColor, link} = attributes;

	return (
		<section {...useBlockProps.save({
			style: {
				backgroundColor
			},
		})} className={'cta-block'} >
			{logoUrl &&
				<a href={ link } className={'cta-logo'}>
					<img alt="company logo" src={ logoUrl }	className={'cta-logo__icon'} />
				</a>
			}
			<RichText.Content tagName="p" value={description} className={'cta-description'} />
			{url && <img alt={ alt } src={ url } className={`wp-image-${ id } cta-image`}/>}
		</section>
	);
}
