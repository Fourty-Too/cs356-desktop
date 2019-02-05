import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron text-center">
				<h1>My CS 356 React Website</h1>
				<p>I'm learning how to use React!</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;