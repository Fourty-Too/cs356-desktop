// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';
import { Link } from 'react-router-dom';

class AllResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
		this.state = {
			width: 0,
			height: 0,
			make: this.props.location.state.make,
			model: this.props.location.state.model,
			year: this.props.location.state.year,
			mileage: this.props.location.state.mileage,
			maintenance: this.props.location.state.maintenance
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

	render() {
		var button1 = undefined;
		var button2 = undefined;

		let rows = this.state.maintenance.map(item => {
			console.log(item);
			return (
							 <tr style={{borderBottom: "1px solid-black", borderCollapse: "collapse"}}>
								<td>{item[0]}</td>
								<td>{item[1]}</td>
								<hr/>
							 </tr>
)
		});

		if (this.state.width > 666) {
			button1 = <Link to={{pathname: "../results",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginLeft: 40, marginRight: 40, marginBottom: 40, float: 'left', width: 140}}>Back</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginRight: 40, marginLeft: 40, marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>

		} else {
			button1 = <Link to={{pathname: "../results",
				state: this.state}} className="btn btn-primary btn-lg" style={{marginLeft: 'auto', marginRight: 'auto', width: '75%', marginBottom: 40, float: 'left', width: 140}}>View All</Link>

			button2 = <Link to="home" className="btn btn-primary btn-lg" style={{marginLeft: 'auto', marginRight: 'auto', width: '75%', marginBottom: 40, float: 'right', width: 140}}> Start Over</Link>
		}

		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', display: 'inline-block', backgroundColor: "#D3D3D3", height: '80%'}}>
			<h1>Your Car:  </h1> <h3>{this.props.location.state.year} {this.props.location.state.make} {this.props.location.state.model} {this.props.location.state.trim}, {this.props.location.state.mileage} miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', paddingBottom: 100, marginBottom: 20}}>

						<table style={{width: "91%", marginLeft: "auto", marginRight: "auto", height: 214, textAlign: "left", borderBottom: "1px solid-black", overflow: "scroll", borderCollapse: "collapse"}}>
							<thead>
								<tr className="top">
							    <th>Mileage</th>
							    <th>Maintenance Item</th>
							  </tr>
								</thead>
								<tbody>
							  {rows}
							</tbody>
						</table>

						<br/> <br/>

						{button1}
						{button2}

					</div>
			</div>
		);
	}
}

export default AllResults;
