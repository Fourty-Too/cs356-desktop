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
			trim: "trimChoice",
			models: [<option key={0} value="modelChoice">Choose a Model</option>],
			years: [<option key={0} value="yearChoice">Choose a Year</option>],
			trims: [<option key={0} value="trimChoice">Choose a Trim Level</option>]
	 };

	 this.addOne = this.addOne.bind(this)
	 this.routeChange = this.routeChange.bind(this);
	 console.log(this.state);
	}

	routeChange(){
 		let path = "../results";
		this.setState({
			models: 0,
			years: 0,
			trims: 0
		}, () => this.props.history.push({
  		pathname: '../results',
  		state: this.state
		}))
 	}

	addOne() {
		var inputMake = document.getElementById('makeInput');
		var inputModel = document.getElementById('modelInput');
		var inputYear = document.getElementById('yearInput');
		var inputTrim = document.getElementById('trimInput');
		var inputMileage = document.getElementById('mileageInput');
    this.setState({
			make: inputMake.value,
			model: inputModel.value,
			year: inputYear.value,
			trim: inputTrim.value,
      mileage: inputMileage.value
    }, () =>
    console.log(
      this.state
    ))

		if (inputMake.value === "Mazda" && inputModel.value === "modelChoice") {
  		this.setState({
				models: [<option key={0} value="modelChoice">Choose a Model</option>,
								 <option key={1} value="MX-5 Miata">MX-5 Miata</option>]
			})
		} else if (inputModel.value === "MX-5 Miata" && inputYear.value === "yearChoice") {
			this.setState({
				years: [<option key={0} value="yearChoice">Choose a Year</option>,
								 <option key={1} value="1990">1990</option>,
							 <option key={2} value="1991">1991</option>,
						 <option key={3} value="1992">1992</option>,
					 <option key={4} value="1993">1993</option>,
				 <option key={5} value="1994">1994</option>,
			 <option key={6} value="1995">1995</option>,
		 <option key={7} value="1996">1996</option>,
	 <option key={8} value="1997">1997</option>]
			})
		} else if (inputYear.value === "1994" || inputYear.value === "1995"
		|| inputYear.value === "1996" || inputYear.value === "1997") {
			this.setState({
				trims: [<option key={0} value="trimChoice">Choose a Trim Level</option>,
								<option key={1} value="1.8L I4">1.8L I4</option>]
			})
		} else if (inputYear.value === "1990" || inputYear.value === "1991"
		|| inputYear.value === "1992" || inputYear.value === "1993") {
			this.setState({
				trims: [<option key={0} value="trimChoice">Choose a Trim Level</option>,
								<option key={1} value="1.6L I4">1.6L I4</option>]
			})
		}

		if (inputTrim.value !== "trimChoice" && inputMileage.value !== "") {
			var button = document.getElementById("submitButton");
			//button.disabled = {false};
		}
	}

	changeItem() {
		var input = document.getElementById('mileageInput');
		console.log(input.value);
		//this.setState({mileage: input.value})
		//console.log(this.miles);
		//this.addOne();
		//addOne();
		//console.log(this.state.mileage);
		//this.state.mileage;

		//
		//<button onClick={this.addOne}>Go</button>

		//								<option value="MX-5 Miata">MX-5 Miata</option>
		//								<option value="1997">1997</option>
		//								<option value="1.8 Liter I4">1.8 Liter I4</option>


	}


	render() {
		changeBackground("#D3D3D3");

		const isEnabled = (this.state.mileage !== "" || this.state.mileage > 0) && this.state.trim !== "trimChoice";

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
					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey', paddingBottom: 35, paddingRight: 15}}>
					<form style={{width: '93%', marginLeft: 'auto', marginRight: 'auto'}}>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Make: </label>
							<br/>
							<select id="makeInput" name="make" onChange={ this.addOne }>
								<option value="makeChoice">Choose a Make</option>
								<option value="Mazda">Mazda</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Model: </label>
							<br/>
							<select id="modelInput" name="model" onChange={ this.addOne }>
								{this.state.models}
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Year: </label>
							<br/>
							<select id="yearInput" name="year" onChange={ this.addOne }>
								{this.state.years}
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Trim: </label>
							<br/>
							<select id="trimInput" name="trim" onChange={ this.addOne }>
								{this.state.trims}
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', textAlign: 'left', marginRight: 0, paddingTop: "10px"}}>
							<label htmlFor="name">Mileage: </label>
							<br/>
							<input id="mileageInput" type="text" style={{width: '100%'}}  onChange={ this.addOne }></input>
						</div>

					</form>

					<br/>

					<div className="text-right" style={{marginRight: 0, marginTop: "100px", paddingRight: 15, paddingTop: 30}}>
					<button id="submitButton" className="btn btn-primary btn-lg" style={{width: '120px'}} onClick={this.routeChange} disabled={!isEnabled}>Go</button>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;
