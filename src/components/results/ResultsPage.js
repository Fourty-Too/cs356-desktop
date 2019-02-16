// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class ResultsPage extends React.Component {
	constructor(props) {
	  super(props);
		//console.log(this.props.location.state);
		this.state = this.props.location.state;
		this.state = {
			width: 0,
			height: 0,
			make: this.props.location.state.make,
			model: this.props.location.state.model,
			year: this.props.location.state.year,
			mileage: this.props.location.state.mileage,
			maintenance: [["5,000", "Replace engine oil and filter; lubricate locks and hinges"],
										["10,000","Replace engine oil and filter; lubricate locks and hinges"],
										["15,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["20,000","Replace engine oil and filter; lubricate locks and hinges"],
										["25,000","Replace engine oil and filter; lubricate locks and hinges"],
										["30,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],
										["35,000","Replace engine oil and filter; lubricate locks and hinges"],
										["40,000","Replace engine oil and filter; lubricate locks and hinges"],
										["45,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["50,000","Replace engine oil and filter; lubricate locks and hinges"],
										["55,000","Replace engine oil and filter; lubricate locks and hinges"],
										["60,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],
										["65,000", "Replace engine oil and filter; lubricate locks and hinges"],
										["70,000","Replace engine oil and filter; lubricate locks and hinges"],
										["75,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["80,000","Replace engine oil and filter; lubricate locks and hinges"],
										["85,000","Replace engine oil and filter; lubricate locks and hinges"],
										["90,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],
										["95,000","Replace engine oil and filter; lubricate locks and hinges"],
										["100,000","Replace engine oil and filter; lubricate locks and hinges"],
										["105,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["110,000","Replace engine oil and filter; lubricate locks and hinges"],
										["115,000","Replace engine oil and filter; lubricate locks and hinges"],
										["120,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],
										["125,000", "Replace engine oil and filter; lubricate locks and hinges"],
										["130,000","Replace engine oil and filter; lubricate locks and hinges"],
										["135,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["140,000","Replace engine oil and filter; lubricate locks and hinges"],
										["145,000","Replace engine oil and filter; lubricate locks and hinges"],
										["150,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],
										["155,000","Replace engine oil and filter; lubricate locks and hinges"],
										["160,000","Replace engine oil and filter; lubricate locks and hinges"],
										["165,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["170,000","Replace engine oil and filter; lubricate locks and hinges"],
										["175,000","Replace engine oil and filter; lubricate locks and hinges"],
										["180,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"],
										["185,000", "Replace engine oil and filter; lubricate locks and hinges"],
										["190,000","Replace engine oil and filter; lubricate locks and hinges"],
										["195,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["200,000","Replace engine oil and filter; lubricate locks and hinges"],
										["205,000","Replace engine oil and filter; lubricate locks and hinges"],
										["210,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace spark plugs; inspect idle speed adjustment; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges"],
										["215,000","Replace engine oil and filter; lubricate locks and hinges"],
										["220,000","Replace engine oil and filter; lubricate locks and hinges"],
										["225,000","Replace engine oil and filter; inspect (or clean/replace) air filter element; inspect brakes and pads; tighten bolts and nuts on chassis and body; lubricate locks and hinges"],
										["230,000","Replace engine oil and filter; lubricate locks and hinges"],
										["235,000","Replace engine oil and filter; lubricate locks and hinges"],
										["240,000","Major service: Replace engine oil and filter; inspect drive belts; replace air cleaner element; replace timing belt; replace spark plugs; inspect idle speed adjustment; replace fuel filter; inspect fuel lines; inspect cooling system and replace coolant; inspect brake lines, hoses and connections; inspect brakes and pads; inspect steering operation and linkages; inspect front suspension ball joints; replace transmission oil; replace rear axle (differential) oil; tighten bolts and nuts on chassis and body; inspect exhaust system heat shield; lubricate locks and hinges; inspect A/C refrigerant amount and compressor"]]
		}
		//console.log(this.props.location.state);
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
		var results = undefined;

		var near = false;
		var maintenance = this.state.maintenance;
		var currentMileage = this.props.location.state.mileage;
		var index = undefined;

		console.log(maintenance);
		console.log(this.state);

		for (var i = 0; i < maintenance.length; i++) {
			var current = maintenance[i][0];
			current = current.split(",").join("");
			//console.log(current);
			//console.log(currentMileage);
			//console.log(current % currentMileage);

			if (Math.abs(currentMileage - current) <= 1000) {
				near = true;
				index = i;
				break;
			}
		}

		console.log(near);
		console.log(index);

		if (near) {
			results = <div>
									<b><h1>Next maintenance item: </h1></b>
									<br/>
									<h2>Description:</h2>
									<p style={{width: "50%", marginRight: "auto", marginLeft: "auto"}}> {maintenance[i][1]}</p>
									<h2>Complete maintenance by: {maintenance[i][0]} miles</h2>
								</div>

		} else {
			results = <div>
				<b><h1>Congratulations!</h1></b>

				<br/>

				<h2>You have no upcoming maintenance in the next 1,000 miles.</h2>

				<br/> <br/>

				<p>Please check back in 1,000 miles for an update on upcoming maintenance</p>

				<br/> <br/>
			</div>
		}

		/**/

		//console.log(this.props.mileage);

		if (this.state.width > 666) {
			button1 = <Link to={{pathname: "../allResults",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginLeft: 40, marginRight: 40, marginBottom: 40, float: 'left', width: 140}}>View All</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, marginLeft: 40, marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>
		} else {
			button1 = <Link to={{pathname: "../allResults",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'left', width: 140}}>View All</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>
		}

		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', display: 'inline-block', backgroundColor: "#D3D3D3", height: '80%'}}>
			<h1>Your Car:  </h1> <h3>{this.props.location.state.year} {this.props.location.state.make} {this.props.location.state.model} {this.props.location.state.trim}, {this.props.location.state.mileage} miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', paddingBottom: 100, marginBottom: 20}}>

						{results}

						{button1}
						{button2}

					</div>
			</div>
		);
	}
}

export default ResultsPage;
