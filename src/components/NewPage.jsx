import * as React from 'react';
import { Link } from 'react-router-dom';

export default class NewPage extends React.PureComponent {

	render() {
		return (
			<Link to={"/"}>GoToIndexPage</Link>
		);
	}
}
