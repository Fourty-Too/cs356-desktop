import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ResultsPage from "./components/results/ResultsPage";
import AllResults from "./components/allResults/AllResults";
import HomeTwo from "./components/home2/HomeTwo";
import HomeThree from "./components/home3/HomeThree";
import HomeFour from "./components/home4/HomeFour";
import HomeFive from "./components/home5/HomeFive";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<div>
			<Route path='/' component={App} />
			<Route exact path='/' component={HomePage} />
			<Route exact path='/about' component={AboutPage} />
			<Route exact path='/home' component={HomePage} />
			<Route exact path='/home2' component={HomeTwo} />
			<Route exact path='/home3' component={HomeThree} />
			<Route exact path='/home4' component={HomeFour} />
			<Route exact path='/home5' component={HomeFive} />
			<Route exact path='/results' component={ResultsPage} />
			<Route exact path='/allResults' component={AllResults} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
