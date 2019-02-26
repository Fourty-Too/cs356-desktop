import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './NoImage.jpeg';
import Acura from './Acura.png';
import AlfaRomeo from './AlfaRomeo.png';
import Audi from './Audi.png';
import AstonMartin from './AstonMartin.png';
import Bentley from './Bentley.png';
import BMW from './BMW.png';
import Bertone from './Bertone.png';
import Bugatti from './Bugatti.png';
import Buick from './Buick.png';
import Cadillac from './Cadillac.png';
import Chevrolet from './Chevrolet.png';
import Chrysler from './Chrysler.png';
import Daewoo from './Daewoo.png';
import Dodge from './Dodge.png';
import Ferrari from './Ferrari.png';
import Ford from './Ford.png';
import Honda from './Honda.png';
import Hyundai from './Hyundai.png';
import Infiniti from './Infiniti.png';
import Isuzu from './Isuzu.png';
import Jaguar from './Jaguar.png';
import Jeep from './Jeep.png';
import Kia from './Kia.png';
import Koenigsegg from './Koenigsegg.png';
import Porsche from './Porsche.png';
import Lamborghini from './Lamborghini.png';
import LandRover from './LandRover.png';
import Lexus from './Lexus.png';
import Lincoln from './Lincoln.png';
import Lotus from './Lotus.png';
import Peugeot from './Peugeot.png';
import Maserati from './Maserati.png';
import Mazda from './Mazda.png';
import MercedesBenz from './Mercedes-Benz.png';
import Mercury from './Mercury.png';
import Mitsubishi from './Mitsubishi.png';
import Nissan from './Nissan.png';
import Oldsmobile from './Oldsmobile.png';
import Pagani from './Pagani.png';
import Pininfarina from './Pininfarina.png';
import Plymouth from './Plymouth.png';
import Pontiac from './Pontiac.png';
import Renault from './Renault.png';
import RollsRoyce from './Rolls-Royce.png';
import Saab from './Saab.png';
import Saturn from './Saturn.png';
import Subaru from './Subaru.png';
import Suzuki from './Suzuki.png';
import Toyota from './Toyota.png';
import Volkswagen from './Volkswagen.png';
import Volvo from './Volvo.png';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomeTwo extends React.Component {
	constructor(props) {
	 super(props);

	 this.state = {
			mileage: 0,
			year: this.props.location.state.year,
			make: "",
	 };

	 this.routeChange = this.routeChange.bind(this);
	 this.getMakes = this.getMakes.bind(this);
	 this.setState = this.setState.bind(this);

	 console.log(this.state);
	}

	componentDidMount() {
		var button = document.getElementById("nextButton");
		button.setAttribute("disabled","true");
		this.getMakes();
    // set el height and width etc.
  }

	routeChange(){
		this.setState({}, () => this.props.history.push({
			pathname: '../home3',
			state: this.state
		}))
	}

	displaySelected() {
		var makes = document.getElementsByClassName("vertical");

		for (var i = 0; i < makes.length; i++) {
			var element = document.getElementById(i.toString());
			var make = element.children[1].innerHTML;

			if (make === this.state.make) {
				element.setAttribute("class","verticalSelected");

				this.state.done = "true";

				break;
			}
		}
	}

	getMakes() {
		var url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=";

		var yearNumber = this.props.location.state.year;

		url = url + yearNumber;

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

			console.log(xml);

			document.getElementById("main2").innerHTML = xml.getElementsByTagName("text")[1].childNodes[0].nodeValue;

			var newHTML = "";
			newHTML += "<div id=\"grids\" class=\"portfolio\">";

			if (length == 0) {
				newHTML += "<h2>No results found.</h2>";
			}

			newHTML += "</div>";
			newHTML += "<br/><br/>";

			document.getElementById("main2").innerHTML = newHTML;

			for (var i = 0; i < length; i++) {
				var div = document.createElement("div");
				div.setAttribute("class", "vertical");
				div.setAttribute("id", i.toString());
				div.onclick = function() {

					var makes = document.getElementsByClassName("vertical");

					for (var i = 0; i < makes.length; i++) {
						document.getElementById(i.toString()).setAttribute("style","");
					}

					this.setAttribute("style", "background-color: #007bff; color: white; border-radius: 7px");

					that.state.make = this.children[1].innerHTML;


					var nextButton = document.getElementById("nextButton");
					nextButton.disabled = false;
				}

				newHTML = "";

				console.log("THANKFSDF");
				console.log(that.state.make);
				console.log(elements[i].childNodes[0].nodeValue);

				if (elements[i].childNodes[0].nodeValue === "Acura") {
					newHTML += "<img src=" + Acura + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Alfa Romeo") {
					newHTML += "<img src=" + AlfaRomeo + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Audi") {
					newHTML += "<img src=" + Audi + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Bentley") {
					newHTML += "<img src=" + Bentley + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "BMW") {
					newHTML += "<img src=" + BMW + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Bugatti") {
					newHTML += "<img src=" + Bugatti + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Buick") {
					newHTML += "<img src=" + Buick + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Cadillac") {
					newHTML += "<img src=" + Cadillac + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Chevrolet") {
					newHTML += "<img src=" + Chevrolet + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Chrysler") {
					newHTML += "<img src=" + Chrysler + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Daewoo") {
					newHTML += "<img src=" + Daewoo + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Dodge") {
					newHTML += "<img src=" + Dodge + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Ferrari") {
					newHTML += "<img src=" + Ferrari + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Ford") {
					newHTML += "<img src=" + Ford + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Honda") {
					newHTML += "<img src=" + Honda + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Lamborghini") {
					newHTML += "<img src=" + Lamborghini + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Porsche") {
					newHTML += "<img src=" + Porsche + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Lotus") {
					newHTML += "<img src=" + Lotus + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Hyundai") {
					newHTML += "<img src=" + Hyundai + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Infiniti") {
					newHTML += "<img src=" + Infiniti + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Isuzu") {
					newHTML += "<img src=" + Isuzu + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Jaguar") {
					newHTML += "<img src=" + Jaguar + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Jeep") {
					newHTML += "<img src=" + Jeep + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Kia") {
					newHTML += "<img src=" + Kia + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Koenigsegg") {
					newHTML += "<img src=" + Koenigsegg + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Land Rover") {
					newHTML += "<img src=" + LandRover + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Lexus") {
					newHTML += "<img src=" + Lexus + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Lincoln") {
					newHTML += "<img src=" + Lincoln + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Mazda") {
					newHTML += "<img src=" + Mazda + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Mercedes-Benz") {
					newHTML += "<img src=" + MercedesBenz + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Mercury") {
					newHTML += "<img src=" + Mercury + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Mitsubishi") {
					newHTML += "<img src=" + Mitsubishi + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Nissan") {
					newHTML += "<img src=" + Nissan + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Oldsmobile") {
					newHTML += "<img src=" + Oldsmobile + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Pagani") {
					newHTML += "<img src=" + Pagani + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Plymouth") {
					newHTML += "<img src=" + Plymouth + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Pontiac") {
					newHTML += "<img src=" + Pontiac + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Rolls-Royce") {
					newHTML += "<img src=" + RollsRoyce + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Saab") {
					newHTML += "<img src=" + Saab + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Saturn") {
					newHTML += "<img src=" + Saturn + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Subaru") {
					newHTML += "<img src=" + Subaru + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Suzuki") {
					newHTML += "<img src=" + Suzuki + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Toyota") {
					newHTML += "<img src=" + Toyota + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Volkswagen") {
					newHTML += "<img src=" + Volkswagen + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Volvo") {
					newHTML += "<img src=" + Volvo + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Renault") {
					newHTML += "<img src=" + Renault + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Peugeot") {
					newHTML += "<img src=" + Peugeot + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Pininfarina") {
					newHTML += "<img src=" + Pininfarina + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Maserati") {
					newHTML += "<img src=" + Maserati + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Bertone") {
					newHTML += "<img src=" + Bertone + " class=\"image\" />"
				}
				else if (elements[i].childNodes[0].nodeValue === "Aston Martin") {
					newHTML += "<img src=" + AstonMartin + " class=\"image\" />"
				}
				else {
					newHTML += "<img src=" + LogoImg + " class=\"image\" />"
				}
				newHTML += "<p>" + elements[i].childNodes[0].nodeValue + "</p>";
				newHTML += "</div>";

				div.innerHTML = newHTML;

				document.getElementById("grids").appendChild(div);

			}

		})
		.catch(err => {
			console.log(err);
			var message = document.getElementById("loading");
			var newHTML = "<h2>No results found.</h2>";
			message.innerHTML = newHTML;
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

				<br></br>

				<div className="text-center" style={{backgroundColor: "#D3D3D3", width: '100%', height: '100%', padding: 0, margin: 0}}>
					<h3 style={{textAlign: "left", width: "75%", marginLeft: "auto", marginRight: "auto"}}><b style={{fontSize: "35px"}}>Your Car:</b> {this.props.location.state.year} . . .</h3>
					<div id="main" className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>

						<h2>Select a make</h2>

						<div id="main2">
						<h2 id="loading">Loading...</h2>
						</div>

						<Link to="home" className="btn btn-primary btn-lg" style={{marginLeft:40, marginRight:40, marginBottom:"30px", marginTop:"5px", float:"left", width:"100px"}} >Back</Link>
						<button id="nextButton" className="btn btn-primary btn-lg" style={{marginRight:40, marginLeft:40, marginBottom:"30px", marginTop:"5px", float:"right", width:"100px"}} onClick={this.routeChange}> Next</button>

						<br/>
					</div>
				</div>
			</div>

		);
	}
}

export default HomeTwo;
