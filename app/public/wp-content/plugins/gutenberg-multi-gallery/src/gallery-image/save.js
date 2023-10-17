import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<section { ...useBlockProps.save() }>
			<p>Save</p>
		</section>
	);
}
