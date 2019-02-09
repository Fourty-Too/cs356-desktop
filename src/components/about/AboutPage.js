// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
	render() {
		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "50%", marginTop: 30, marginLeft: 'auto', marginRight: 'auto', backgroundColor: "#D3D3D3", borderRadius: '5px',
				boxShadow: '10px 10px 10px grey'}}>
				<h1>About Us</h1>
				<hr/>
				<p>Here at My Car Maintenance, we believe that everyone should be able to keep their car running well all of the time, regardless of their technical capability.</p>
				<p>You can enter information about your car into our system, and we’ll tell you what maintenance you should do on your car to keep it in top shape.</p>

				<br/><br/>

				<div style={{width: '25%', marginLeft: 'auto', marginRight: 'auto'}}>
				<Link to="home" className="btn btn-primary btn-lg" style={{width: '120px'}}>Back</Link>
				</div>
			</div>
		);
	}
}

export default AboutPage;
