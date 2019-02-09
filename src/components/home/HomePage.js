import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	render() {
		return (
			<div className=" text-center">
				<div className="welcomSection">
					<h1>My Car Maintenance</h1>
					<hr width="50%">
					</hr>
					<p>Welcome to My Car Maintenance. Enter your information and get suggestions
					for factory-recommended maintenance.</p>
					<br></br>
					<Link to="about" className="btn btn-primary btn-lg">About Us</Link>
				</div>

				<br></br>

				<div style={{backgroundColor: "#D3D3D3", bottom: 0, position: 'absolute', width: '100%'}}>
					<br></br>
					<h2> Enter Your Information</h2>
					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '75%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
					  boxShadow: '10px 10px 10px grey'}}>
					<form style={{width: '93%', marginLeft: 'auto', marginRight: 'auto'}}>
						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left'}}>
							<label htmlFor="name">Year: </label>
							<br/>
							<select name="year">
								<option value="yearChoice">Choose a Year</option>
								<option value="1997">1997</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left'}}>
							<label htmlFor="name">Make: </label>
							<br/>
							<select name="make">
								<option value="makeChoice">Choose a Make</option>
								<option value="mazda">Mazda</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left'}}>
							<label htmlFor="name">Model: </label>
							<br/>
							<select name="model">
								<option value="modelChoice">Choose a Model</option>
								<option value="miata">MX-5 Miata</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left'}}>
							<label htmlFor="name">Model: </label>
							<br/>
							<select name="trim">
								<option value="trimChoice">Choose a Trim Level</option>
								<option value="1.8">1.8 Liter I4</option>
							</select>
						</div>

						<div style={{float: 'left', display: 'inline-block', marginRight: 25, textAlign: 'left', marginRight: 0, width: '40px'}}>
							<label htmlFor="name">Mileage: </label>
							<br/>
							<input id="mileageInput" type="text"></input>
						</div>

					</form>

					<br/>

					<div className="Go" style={{marginTop: '100px', marginLeft: '650px'}}>
						<Link to="results" className="btn btn-primary btn-lg" style={{width: '120px'}}>Go</Link>
					</div>

					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;
