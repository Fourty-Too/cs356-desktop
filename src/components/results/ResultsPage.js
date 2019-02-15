// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class ResultsPage extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		var button1 = undefined;
		var button2 = undefined;

		//console.log(this.props.mileage);

		if (this.state.width > 666) {
			button1 = <Link to="allResults" className="btn btn-primary btn-lg" style={{marginLeft: 40, marginRight: 40, marginBottom: 40, float: 'left', width: 140}}>View All</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, marginLeft: 40, marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>
		} else {
			button1 = <Link to="allResults" className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'left', width: 140}}>View All</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>
		}

		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', display: 'inline-block', backgroundColor: "#D3D3D3", height: '80%'}}>
			<h1>Your Car:  </h1> <h3>1997 Mazda MX-5 Miata 1.8L, 169000 miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', paddingBottom: 100, marginBottom: 20}}>

						<b><h1>Congratulations!</h1></b>

						<br/>

						<h2>You have no upcoming maintenance in the next 1,000 miles.</h2>

						<br/> <br/>

						<p>Check back at 170,000 miles for an update on upcoming maintenance</p>

						<br/> <br/>


						{button1}
						{button2}

					</div>
			</div>
		);
	}
}

export default ResultsPage;
