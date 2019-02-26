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
			var maintenanceList = item[2].split("\n");
			return (
							<div>
							 <tr class="collapsible" style={{display: "flex"}}>
								<td style={{width: "24%", marginLeft: "20px"}}>{item[0]}</td>
								<td style={{width: "44%"}}>{item[1]}</td>
								<td style={{width: "32%"}}></td>
							 </tr>
							 <div class="content">
								 <ul style={{textAlign: "left", fontSize: "25px"}}>
										 {maintenanceList.map((el,j) => <li style={{fontSize: "15px"}}><p style={{fontSize: "15px"}}>{el}</p></li> )}
								 </ul>
							 </div>
							 </div>
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

		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }
		  });
		}

		return (
			<div className="text-center" style={{padding: '2rem 5rem', width: "100%", marginLeft: 'auto', marginRight: 'auto', display: 'inline-block', backgroundColor: "#D3D3D3", height: '80%'}}>
			<h3><b style={{fontSize: "35px"}}>Your Car:</b> {this.props.location.state.year} {this.props.location.state.make} {this.props.location.state.model} {this.props.location.state.trim}, {this.props.location.state.mileage} miles</h3>

					<div className="jumbotron text-start" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#DBEEF4',   borderRadius: '5px',
						boxShadow: '10px 10px 10px grey', paddingBottom: 90, marginBottom: 20}}>

						<div style={{overflowX: "auto"}}>

						<table class="scroll">
							<thead>
								<tr className="top">
							    <th style={{width: "1%"}}>Mileage</th>
							    <th>Maintenance Type</th>
									<th></th>
							  </tr>
								</thead>
								<tbody>
							  {rows}
							</tbody>
						</table>
						</div>

						<br/> <br/>

						{button1}
						{button2}

					</div>
			</div>
		);
	}
}

export default AllResults;
