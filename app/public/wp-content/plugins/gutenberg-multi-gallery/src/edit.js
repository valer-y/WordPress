import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<section { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={['core/image']}/>
		</section>
	);
}
