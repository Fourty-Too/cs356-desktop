import React from 'react';
import { Link } from 'react-router-dom';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomeFive extends React.Component {
	constructor(props) {
	 super(props);
	 this.state = {
		 year: this.props.location.state.year,
		 make: this.props.location.state.make,
		 model: this.props.location.state.model,
		 trim: this.props.location.state.trim,
		 mileage: 0
	 };

	 this.saveState = this.saveState.bind(this);
	 this.routeChange = this.routeChange.bind(this);
	 this.goBack = this.goBack.bind(this);
	 this.handleEnter = this.handleEnter.bind(this);
	 console.log(this.state);
	}

	routeChange(){
		this.setState({}, () => this.props.history.push({
  		pathname: '../results',
  		state: this.state
		}))
 	}

	routeChangeBack(){
		this.setState({}, () => this.props.history.push({
			pathname: '../home4',
			state: this.state
		}))
	}

	goBack() {
		console.log("Going back!");
  	window.history.back();
	}

	onlyNumbers(e){
		 const re = /[0-9:]+/g;
		 if (!re.test(e.key)) {
			 e.preventDefault();
		 }

		 this.handleEnter(e);
	}

	handleEnter(e) {
		if (e.key === 'Enter') {
			this.routeChange();
		}
	}

	saveState() {
		var inputMileage = document.getElementById('mileageInput');
		var mileageValue = inputMileage.value;

		this.setState({
			mileage: mileageValue
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

		var inputText = <input id="mileageInput" type="text" style={{width: '50%'}} onChange={this.saveState} onKeyPress={(e) => this.onlyNumbers(e)}></input>;


		return (
			<div className="container-fluid" style={{backgroundColor: "#D3D3D3", overflow: "scroll", width: '100%', padding: 0, margin: 0, height: '100%'}}>

				<br></br>

				<div className="text-center" style={{backgroundColor: "#D3D3D3", width: '100%', height: '100%', padding: 0, margin: 0}}>
					<h3 style={{textAlign: "left", width: "75%", marginLeft: "auto", marginRight: "auto"}}><b style={{fontSize: "35px"}}>Your Car:</b> {this.props.location.state.year} {this.props.location.state.make} {this.props.location.state.model} {this.props.location.state.trim}</h3>
					<div id="main5" className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: "100px", backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>

						<h2>Enter your car's mileage</h2>

						{inputText}
					<br/>
					<br/>

					<button className="btn btn-primary btn-lg" style={{marginLeft:40, marginRight:40, marginBottom:"40px", marginTop:"5px", float:"left", width:"100px"}} onClick={this.goBack}>Back</button>
					<button id="nextButton" className="btn btn-primary btn-lg" style={{marginRight:40, marginLeft:40, marginBottom:"40px", marginTop:"5px", float:"right", width:"140px"}} onClick={this.routeChange}> Get Results</button>
					</div>
				</div>
			</div>

		);
	}
}

export default HomeFive;
