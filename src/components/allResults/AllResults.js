// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class AllResults extends React.Component {
	render() {
		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', marginTop: 0, display: 'inline-block', backgroundColor: "#D3D3D3", bottom: 0, position: 'absolute'}}>
			<h1>Your Car:  </h1> <h3>1997 Mazda MX-5 Miata 1.8L, 169000 miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', width: '80%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', height: '425px'}}>

						<table style={{width: "91%", marginLeft: "auto", marginRight: "auto", height: 214, textAlign: "left", borderBottom: "1px solid-black", overflow: "scroll"}}>
						  <tr class="top">
						    <th>Mileage</th>
						    <th>Maintenance Item</th>
						  </tr>
						  <tr>
						    <td>5000</td>
						    <td>Maintenance Item 1</td>
						  </tr>
						  <tr>
						    <td>10000</td>
						    <td>Maintenance Item 2</td>
						  </tr>
							<tr>
								<td>20000</td>
								<td>Maintenance Item 3</td>
							</tr>
						</table>

						<br/> <br/>

						<Link to="results" className="btn btn-primary btn-lg" style={{marginLeft: 40, float: 'left', width: 500}}>Show Me Next Maintenance Item</Link>

						<Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, float: 'right', width: 230}}> Start Over</Link>


					</div>
			</div>
		);
	}
}

export default AllResults;
