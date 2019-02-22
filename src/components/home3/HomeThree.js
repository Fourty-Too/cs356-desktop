import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './NoImage.jpeg';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomeThree extends React.Component {
	constructor(props) {
	 super(props);

	 this.state = {
			mileage: 0,
			year: this.props.location.state.year,
			make: this.props.location.state.make,
			model: ""
	 };

	 this.routeChange = this.routeChange.bind(this);
	 this.routeChangeBack = this.routeChangeBack.bind(this);
	 //this.getMakes = this.getMakes.bind(this);
	 this.getModels = this.getModels.bind(this);

	 console.log(this.state);
	}

	componentDidMount() {
		var button = document.getElementById("nextButton");
		button.setAttribute("disabled","true");
		this.getModels();
    // set el height and width etc.
  }

	routeChangeBack(){
		this.setState({model: ""}, () => this.props.history.push({
  		pathname: '../home2',
  		state: this.state
		}))
 	}

	routeChange(){
		this.setState({}, () => this.props.history.push({
			pathname: '../home4',
			state: this.state
		}))
	}

	getModels() {
		var url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=";

		var yearNumber = this.props.location.state.year;

		url = url + yearNumber;

		url = url + "&make=";

		var make = this.props.location.state.make;

		url = url + make;

		url = url.split(" ").join("+");

		var that = this;

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

			var number = document.createElement("p");
			number.setAttribute("id", "length");
			number.setAttribute("text", length.toString());

			document.getElementById("main2").innerHTML = xml.getElementsByTagName("text")[1].childNodes[0].nodeValue;

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
					var models = document.getElementsByClassName("vertical");

					for (var i = 0; i < models.length; i++) {
						document.getElementById(i.toString()).setAttribute("style","");
					}

					this.setAttribute("style", "background-color: #007bff; color: white; border-radius: 7px");

					that.state.model = this.children[1].innerHTML;


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
				<h3 style={{textAlign: "left", width: "75%", marginLeft: "auto", marginRight: "auto"}}>Your Car: {this.props.location.state.year} {this.props.location.state.make} __</h3>
					<div id="main" className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>

						<p>Select a model</p>

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

export default HomeThree;
