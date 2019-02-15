import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import logo from './images/photo.png';

class App extends React.Component {

	render() {
		return (
			<div className="container-fluid" style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 100, paddingLeft: 0, paddingRight: 0, paddingTop: 0, marginBottom: 0, backgroundColor: 'white'}}>

				<nav className="navbar navbar-expand-sm fixed-top bg-color navbar-dark" style={{backgroundColor: '#4197AB', marginBottom: 20, paddingBottom: '20px', padding: '0 5rem 9'}}>
					<Link className="navbar-brand" to="/" activeclassname="active" style={{paddingBottom: '10px'}}>My Car Maintenance</Link>
					<p className="subtitle" to="/" activeclassname="active" style={{ color: 'black', marginTop: 'auto', marginBottom: 'auto', height: '75%' }}>Keep your car running smoothly</p>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
						</ul>
					</div>
				</nav>

				<div style={{overflow: 'scroll', height: 50, backgroundColor: 'white'}}>
				<img src={logo} className="center" alt="Logo" style={{height: 225, width: 300,  marginBottom: 20, marginTop: 2}}/>

				</div>

			</div>
		);
	}
}

export default App;
