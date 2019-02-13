import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import logo from './images/photo.png';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid" style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 100, paddingLeft: 0, paddingRight: 0, paddingTop: 0}}>

				<nav className="navbar navbar-expand-sm bg-color navbar-dark" style={{backgroundColor: '#4197AB'}, {padding: '0 5rem'}}>
					<Link className="navbar-brand" to="/" activeclassname="active" style={{paddingBottom: '10px'}}>My Car Maintenance</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
							data-target="#collapsibleNavbar">
						<span className="navbar-toggler-icon">
						</span>
					</button>
					<p className="subtitle" to="/" activeclassname="active" style={{ color: 'black', marginTop: 'auto', marginBottom: 'auto', height: '75%' }}>Keep your car running smoothly</p>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
						</ul>
					</div>
				</nav>

				<div>
				<img src={logo} className="center" alt="Logo" style={{height: 275, width: 300, paddingTop: 28, paddingBottom: 28}}/>
				</div>

			</div>
		);
	}
}

export default App;
