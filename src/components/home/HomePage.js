import React from 'react';
import { Link } from 'react-router-dom';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomePage extends React.Component {
	constructor(props) {
	 super(props);
	 this.state = {
			mileage: 0,
			year: ""
			//trim: "trimChoice",
			//models: [<option key={0} value="modelChoice">Choose a Model</option>],
			//years: [<option key={0} value="yearChoice">Choose a Year</option>],
			//trims: [<option key={0} value="trimChoice">Choose a Trim Level</option>]
	 };

	 //this.addOne = this.addOne.bind(this)
	 //this.getBeginning = this.getBeginning.bind(this);
	 this.saveState = this.saveState.bind(this);
	 this.routeChange = this.routeChange.bind(this);
	 //this.getMakes = this.getMakes.bind(this);
	 console.log(this.state);
	}

	routeChange(){
		this.setState({
			models: 0,
			years: 0,
			trims: 0
		}, () => this.props.history.push({
  		pathname: '../home2',
  		state: this.state
		}))
 	}

	saveState() {
		var inputYear = document.getElementById('yearInput');
		var yearValue = inputYear.value;

		this.setState({
			year: yearValue
		}, () =>
			console.log(
				this.state
			))
	}

	changeItem() {
		var input = document.getElementById('mileageInput');
		console.log(input.value);
	}


	render() {
		changeBackground("#D3D3D3");

		//const isEnabled = (this.state.mileage !== "" || this.state.mileage > 0) && this.state.trim !== "trimChoice";

		const isEnabled = (this.state.year !== "" && this.state.year !== 0);

		var inputText = <input id="yearInput" type="text" style={{width: '50%'}} onChange={this.saveState}></input>;
		var goButton = 	<button id="submitButton" className="btn btn-primary btn-lg text-center" onClick={this.routeChange} disabled={!isEnabled}>Go</button>;


		return (
			<div className="container-fluid" style={{backgroundColor: "#D3D3D3", overflow: "scroll", width: '100%', padding: 0, margin: 0, height: '100%'}}>
				<div className="text-center" style={{backgroundColor: "white", width: '100%', height: '100%', padding: 0, margin: 0}}>
					<h1>My Car Maintenance</h1>
					<hr width="50%">
					</hr>
					<br></br>
					<Link to="about" className="btn btn-primary btn-lg">About Us</Link>
					<br/><br/>
					<br/>
				</div>

				<br></br>

				<div className="text-center" style={{backgroundColor: "#D3D3D3", width: '100%', height: '100%', padding: 0, margin: 0}}>
					<h2> Enter Your Information To Get Maintenance Recommendations</h2>
					<div id="main" className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>

						<p>Enter your car's model year</p>

						{inputText}
					<br/>
					<br/>

					{goButton}
					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;
