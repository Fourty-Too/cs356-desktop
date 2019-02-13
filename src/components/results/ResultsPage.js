// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class ResultsPage extends React.Component {
	render() {
		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', display: 'inline-block', backgroundColor: "#D3D3D3", bottom: 0, position: 'absolute', height: '80%'}}>
			<h1>Your Car:  </h1> <h3>1997 Mazda MX-5 Miata 1.8L, 169000 miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '80%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', height: '425px'}}>

						<b><h1>Congratulations!</h1></b>

						<br/>

						<h2>You have no upcoming maintenance in the next 1,000 miles.</h2>

						<br/> <br/>

						<p>Check back at 170,000 miles for an update on upcoming maintenance</p>

						<br/> <br/>

						<Link to="allResults" className="btn btn-primary btn-lg" style={{marginLeft: 40, float: 'left', width: 500}}>Show Me All Maintenance For This Vehicle</Link>

						<Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, float: 'right', width: 230}}> Start Over</Link>


					</div>
			</div>
		);
	}
}

export default ResultsPage;
