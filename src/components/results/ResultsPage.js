// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import Popup from "reactjs-popup";
//import Popup from 'react-popup';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import 'react-responsive-ui/style.css'


class ResultsPage extends React.Component {
	constructor(props) {
	  super(props);
		//console.log(this.props.location.state);
		this.state = this.props.location.state;
		this.state = {
			width: 0,
			height: 0,
			first: "",
			second: "",
			make: this.props.location.state.make,
			model: this.props.location.state.model,
			year: this.props.location.state.year,
			mileage: this.props.location.state.mileage,
			maintenance: [["5,000", "Minor Service", "Replace engine oil and filter \n lubricate locks and hinges"],
										["10,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["15,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["20,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["25,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["30,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace spark plugs  \n   inspect idle speed adjustment  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges"],
										["35,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["40,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["45,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["50,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["55,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["60,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace timing belt  \n Replace spark plugs  \n   inspect idle speed adjustment  \n Replace fuel filter  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges  \n   inspect A/C refrigerant amount and compressor"],
										["65,000","Minor Service", "Replace engine oil and filter \n lubricate locks and hinges"],
										["70,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["75,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["80,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["85,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["90,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace spark plugs  \n   inspect idle speed adjustment  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges"],
										["95,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["100,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["105,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["110,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["115,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["120,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace timing belt  \n Replace spark plugs  \n   inspect idle speed adjustment  \n Replace fuel filter  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges  \n   inspect A/C refrigerant amount and compressor"],
										["125,000","Minor Service", "Replace engine oil and filter \n lubricate locks and hinges"],
										["130,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["135,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["140,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["145,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["150,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace spark plugs  \n   inspect idle speed adjustment  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges"],
										["155,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["160,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["165,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["170,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["175,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["180,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace timing belt  \n Replace spark plugs  \n   inspect idle speed adjustment  \n Replace fuel filter  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges  \n   inspect A/C refrigerant amount and compressor"],
										["185,000","Minor Service", "Replace engine oil and filter \n lubricate locks and hinges"],
										["190,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["195,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["200,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["205,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["210,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace spark plugs  \n   inspect idle speed adjustment  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges"],
										["215,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["220,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["225,000","Minor Service","Replace engine oil and filter \n inspect (or clean/replace) air filter element \n inspect brakes and pads \n tighten bolts and nuts on chassis and body \n lubricate locks and hinges"],
										["230,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["235,000","Minor Service","Replace engine oil and filter \n lubricate locks and hinges"],
										["240,000","Major Service","Replace engine oil and filter  \n   inspect drive belts  \n Replace air cleaner element  \n Replace timing belt  \n Replace spark plugs  \n   inspect idle speed adjustment  \n Replace fuel filter  \n   inspect fuel lines  \n   inspect cooling system and replace coolant  \n   inspect brake lines, hoses and connections  \n   inspect brakes and pads  \n   inspect steering operation and linkages  \n   inspect front suspension ball joints  \n Replace transmission oil  \n Replace rear axle (differential) oil  \n   tighten bolts and nuts on chassis and body  \n   inspect exhaust system heat shield  \n   lubricate locks and hinges  \n   inspect A/C refrigerant amount and compressor"]]
		}
		//console.log(this.props.location.state);
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.onlyNumbers = this.onlyNumbers.bind(this);
		this.saveState = this.saveState.bind(this);
		this.saveStateTwo = this.saveStateTwo.bind(this);
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

	onlyNumbers(e){
		 const re = /[1-7:]+/g;
		 if (!re.test(e.key)) {
			 e.preventDefault();
		 }
	}

	saveState() {
		var first = document.getElementById('first');
		var firstValue = first.value;

		//var second = document.getElementById('second');
		//var secondValue = second.value;

		this.setState({
			first: firstValue,
			//second: secondValue
		}, () =>
			console.log(
				this.state
			))
	}

	saveStateTwo() {
		var second = document.getElementById('second');
		var secondValue = second.value;

		//var second = document.getElementById('second');
		//var secondValue = second.value;

		this.setState({
			second: secondValue,
			//second: secondValue
		}, () =>
			console.log(
				this.state
			))
	}

	render() {
		var button1 = undefined;
		var button2 = undefined;
		var results = undefined;

		var maintenance = this.state.maintenance;
		var currentMileage = Number(this.props.location.state.mileage);
		var index = undefined;
		var numTimes = 0;

		const firstEnabled = (this.state.first.length === 1);
		const secondEnabled = (this.state.second.length === 14);

		//console.log(maintenance);
		//console.log(this.state);

		if (currentMileage > 240000) {
			while (currentMileage > 240000) {
				currentMileage -= 240000;
				numTimes++;
			}
		}

		for (var i = 0; i < maintenance.length; i++) {
			var current = maintenance[i][0];
			current = current.split(",").join("");
			//console.log(current);
			//console.log(currentMileage);
			//console.log(current % currentMileage);

			console.log(current);

			console.log(currentMileage - current);
			console.log(currentMileage);
			console.log(Math.abs(currentMileage - current));

			console.log(Math.abs(currentMileage - current) < 5000);
			console.log(currentMileage <= current);

			if (Math.abs(currentMileage - current) < 5000 && currentMileage <= current) {
				console.log("I got here");
				index = i;
				break;
			}
		}

		//console.log(near);
		//console.log(index);

		//if (near) {
		console.log(maintenance[index]);
			var maintenanceList = maintenance[index][2].split("\n");
			results = <div className="display-linebreak">
									<b><h1>Next maintenance item: </h1></b>
									<br/>
									<h2>{maintenance[index][1]}</h2>
									<div style={{width: "50%", marginLeft: "auto", marginRight: "auto", marginBottom: "10px", borderRadius: "7px", backgroundColor: "#D3D3D3", paddingBottom: "10px", paddingTop: "10px"}}>
											<ul style={{textAlign: "left", fontSize: "25px", width: "75%", marginLeft: "auto", marginRight: "auto"}}>
													{maintenanceList.map((el,j) => <li style={{fontSize: "15px"}}><h3 style={{fontSize: "25px"}}>{el}</h3></li> )}
											</ul>
									</div>
									<h2>Complete maintenance by {Number(maintenance[index][0].split(",").join("")) + 240000 * numTimes} miles</h2>
									<br/><br/>
									<Popup trigger={<button className="btn btn-primary btn-lg" style={{marginLeft: "auto", marginRight: "auto", width: "50%", backgroundColor: "green"}} >Sign Up For Text Reminders</button>} position="top center" style={{marginLeft: "auto", marginRight: "auto", width: "400"}} modal close>
									{close => (
										<div>
											<a className="close" onClick={close}>
												&times;
											</a>
											<h2>Tell us how often you drive your car</h2>
											<p>We'll use this information to tailor our reminders to your needs</p>
											<hr style={{marginLeft: "auto", marginRight: "auto", width: "75%"}}/>
											<br/>
											<p>Number of days per week:</p>
											<div style={{marginLeft: "auto", marginRight: "auto", width: "90%", display: "inline-block"}}>
											<input id="first" type="text" maxLength="1" min='1' max='7' style={{marginLeft: "10px", marginRight:"10px", width: '75%'}} onKeyPress={(e) => this.onlyNumbers(e)} onChange={this.saveState}></input>
											<Popup trigger={<button className="btn btn-primary btn-sm" style={{marginBottom:"10px", marginTop:"5px", height: "100%"}} onClick={this.close} disabled={!firstEnabled}>Next</button>} style={{marginLeft: "auto", marginRight: "auto", width: "400"}} modal>
												<a className="close" onClick={close}>
													&times;
												</a>
												<h2>Get reminders</h2>
												<p>Enter your phone number and we'll send reminders to perform maintenance</p>
												<hr style={{marginLeft: "auto", marginRight: "auto", width: "75%"}}/>
												<br/>
												<p>Phone number:</p>
												<div style={{marginLeft: "auto", marginRight: "auto", width: "90%", display: "inline-block"}}>
												<PhoneInput
													id="second"
													country="US"
												  value={ this.state.value }
												  onChange={this.saveStateTwo} maxLength="14"/>
													<Popup trigger={<button className="btn btn-primary btn-sm" style={{marginBottom:"10px", marginTop:"5px", height: "100%"}} disabled={!secondEnabled}>Sign Me Up!</button>} style={{marginLeft: "auto", marginRight: "auto", width: "400"}} modal>
														<a className="close" onClick={close}>
															&times;
														</a>
														<h2>Thank You!</h2>
														<p>We will send you reminders for future maintenance</p>
														<hr style={{marginLeft: "auto", marginRight: "auto", width: "75%"}}/>
														<br/>
														<p>You should receive a welcome text message in a few minutes.</p>
														<div style={{marginLeft: "auto", marginRight: "auto", width: "90%", display: "inline-block"}}>
														<button className="btn btn-primary btn-sm" style={{marginBottom:"10px", marginTop:"5px", height: "100%"}} onClick={close}>Close &times;</button>
														<br/>
														<br/>
														<br/>
														</div>
													</Popup>
												</div>
											</Popup>
											</div>

											</div>
									)}

  								</Popup>

									<br/><br/>
								</div>

		/*} else {
			results = <div>
				<b><h1>Congratulations!</h1></b>

				<br/>

				<h2>You have no upcoming maintenance in the next 1,000 miles.</h2>

				<br/> <br/>

				<p>Please check back in 1,000 miles for an update on upcoming maintenance</p>

				<br/> <br/>
			</div>
		}*/

		/**/

		//console.log(this.props.mileage);

		if (this.state.width > 666) {
			button1 = <Link to={{pathname: "../allResults",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginLeft: 40, marginRight: 40, marginBottom: 40, float: 'left', width: 320}}>View Full Maintenance Schedule</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, marginLeft: 40, marginBottom: 40, float: 'right', width: 320}}> Start Over</Link>
		} else {
			button1 = <Link to={{pathname: "../allResults",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'left', width: 320}}>View Full Maintenance Schedule</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginBottom: 40, float: 'right', width: 320}}> Start Over</Link>
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
