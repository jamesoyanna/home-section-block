// Imports
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
//  Import CSS.
import './editor.scss';
import './style.scss';

/**
 * Register: The Gutenberg home-scetion-block.
 */
registerBlockType( 'cgb/homesection-block', {
	title: __( 'homesection-block' ), // Block title.
	description: 'Block to generate homesection',
	icon: 'universal-access-alt', // Block icon from Dashicons
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'homesection-block' ),
		__( 'home' ),
		__( 'block' ),
	],

	/**
	 * The edit function describes the structure of the block in the context of the editor.	 *
	 */
	// cutoms attributes
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: ( props ) => {
		// custom functions
		const {
			attributes: { content },
			setAttributes,
			className,
		} = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName={ className }
				onChange={ onChangeContent }
				value={ content }

			/>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined	 *
	 */

	save: ( props ) => {
		return (
			 <RichText.Content tagName="p" value={ props.attributes.content } />
			 );
	},

} );
