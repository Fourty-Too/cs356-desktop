import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class App extends React.Component {

	render() {
		return (
			<div className="container-fluid" style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 50, paddingLeft: 0, paddingRight: 0, paddingTop: 0, marginBottom: 0, backgroundColor: 'white'}}>

				<nav className="navbar navbar-expand-sm fixed-top bg-color navbar-dark" style={{backgroundColor: '#4197AB'}}>
					<Link className="navbar-brand" to="/" activeclassname="active">My Car Maintenance</Link>
					<p className="subtitle" to="/" activeclassname="active" style={{ color: 'black', marginTop: 'auto', marginBottom: 'auto', height: '75%' }}>Keep your car running smoothly</p>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
						</ul>
					</div>
				</nav>

			</div>
		);
	}
}

export default App;
