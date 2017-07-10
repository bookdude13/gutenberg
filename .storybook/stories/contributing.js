/**
 * External dependencies
 */
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import readme from '../../CONTRIBUTING.md';

storiesOf( 'Gutenberg', module )
	.addDecorator( withKnobs )
	.add( 'Contributing', () => <ReactMarkdown source={ readme } /> );
