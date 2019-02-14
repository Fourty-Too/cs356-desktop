import React from 'react';
import { Link } from 'react-router-dom';

function changeBackground(color) {
	document.body.style.background = color;
}

class HomePage extends React.Component {

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
					<h2> Enter Your Information To Get Maintenance Recommendations</h2>
					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey', paddingBottom: 35, paddingRight: 15}}>
					<form style={{width: '93%', marginLeft: 'auto', marginRight: 'auto'}}>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Make: </label>
							<br/>
							<select name="make">
								<option value="makeChoice">Choose a Make</option>
								<option value="mazda">Mazda</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Model: </label>
							<br/>
							<select name="model">
								<option value="modelChoice">Choose a Model</option>
								<option value="miata">MX-5 Miata</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Year: </label>
							<br/>
							<select name="year">
								<option value="yearChoice">Choose a Year</option>
								<option value="1997">1997</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', paddingTop: "10px"}}>
							<label htmlFor="name">Trim: </label>
							<br/>
							<select name="trim">
								<option value="trimChoice">Choose a Trim Level</option>
								<option value="1.8">1.8 Liter I4</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', textAlign: 'left', marginRight: 0, paddingTop: "10px"}}>
							<label htmlFor="name">Mileage: </label>
							<br/>
							<input id="mileageInput" type="text" style={{width: '100%'}}></input>
						</div>

					</form>

					<br/>

					<div class="text-right" style={{marginRight: 0, marginTop: "100px", paddingRight: 15, paddingTop: 30}}>
						<Link to="results" className="btn btn-primary btn-lg" style={{width: '120px'}}>Go</Link>
					</div>

					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;
