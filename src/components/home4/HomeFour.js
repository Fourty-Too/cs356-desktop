import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './NoImage.jpeg';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomeFour extends React.Component {
	constructor(props) {
	 super(props);

	 this.state = {
			mileage: 0,
			year: this.props.location.state.year,
			make: this.props.location.state.make,
			model: this.props.location.state.model,
			trim: ""
	 };

	 this.routeChange = this.routeChange.bind(this);
	 this.routeChangeBack = this.routeChangeBack.bind(this);
	 //this.getMakes = this.getMakes.bind(this);
	 this.getTrims = this.getTrims.bind(this);
	 this.setState = this.setState.bind(this);

	 console.log(this.state);

	}

	componentDidMount() {
		var button = document.getElementById("nextButton");
		button.setAttribute("disabled","true");
		this.getTrims();
    // set el height and width etc.
  }

	routeChangeBack(){
		this.setState({trim: ""}, () => this.props.history.push({
  		pathname: '../home3',
  		state: this.state
		}))
 	}

	routeChange(){
		this.setState({}, () => this.props.history.push({
			pathname: '../home5',
			state: this.state
		}))
	}

	getTrims() {
		var url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=";

		var yearNumber = this.props.location.state.year;

		url = url + yearNumber;

		url = url + "&make=";

		var make = this.props.location.state.make;

		url = url + make;

		url = url + "&model=";

		var model = this.props.location.state.model;

		url = url + model;

		var that = this;

		url = url.split(" ").join("+");

		console.log(url);

		fetch(url)
		.then(function(response) {
			return response.text();
		})
		.then(function(text) {
			//console.log(that);
			const parser = new DOMParser();
			const xml = parser.parseFromString(text, 'text/xml');

			var elements = xml.getElementsByTagName("text");
			var length = elements.length;

			console.log(elements);
			console.log(length);

			var number = document.createElement("p");
			number.setAttribute("id", "length");
			number.setAttribute("text", length.toString());

			document.getElementById("main2").innerHTML = xml.getElementsByTagName("text")[0].childNodes[0].nodeValue;

			var newHTML = "";
			newHTML += "<div id=\"grids\" class=\"portfolio\">";

			newHTML += "</div>";
			newHTML += "<br/><br/>";

			document.getElementById("main2").innerHTML = newHTML;

			for (var i = 0; i < length; i++) {
				var div = document.createElement("div");
				div.setAttribute("class", "vertical");
				div.setAttribute("id", i.toString());
				div.onclick = function() {
					var trims = document.getElementsByClassName("vertical");

					for (var i = 0; i < trims.length; i++) {
						document.getElementById(i.toString()).setAttribute("style","");
					}

					this.setAttribute("style", "background-color: #007bff; color: white; border-radius: 7px");

					that.state.trim = this.children[1].innerHTML;


					var nextButton = document.getElementById("nextButton");
					nextButton.disabled = false;
				}

				newHTML = "";
				newHTML += "<img src=" + LogoImg + " class=\"image\" />"
				newHTML += "<p>" + elements[i].childNodes[0].nodeValue + "</p>";
				newHTML += "</div>";

				div.innerHTML = newHTML;

				document.getElementById("grids").appendChild(div);

			}

		})
		.catch(err => {
			return;
		})
	}

	changeItem() {
		var input = document.getElementById('mileageInput');
		console.log(input.value);
	}


	render() {
		changeBackground("#D3D3D3");

		//this.getTrims();

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
				<h3 style={{textAlign: "left", width: "75%", marginLeft: "auto", marginRight: "auto"}}>Your Car: {this.props.location.state.year} {this.props.location.state.make} {this.props.location.state.model} __</h3>
					<div id="main" className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>

						<p>Select a trim level</p>

						<div id="main2">
						</div>

						<button className="btn btn-primary btn-lg" style={{marginLeft:40, marginRight:40, marginBottom:"30px", marginTop:"5px", float:"left", width:"100px"}} onClick={this.routeChangeBack}>Back</button>
						<button id="nextButton" className="btn btn-primary btn-lg" style={{marginRight:40, marginLeft:40, marginBottom:"30px", marginTop:"5px", float:"right", width:"100px"}} onClick={this.routeChange}> Next</button>

						<br/>
					</div>
				</div>
			</div>

		);
	}
}

export default HomeFour;
