import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { DiagnosisForm, Report } from 'components/pages';
import 'static/css/global.css';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/report" component={Report} />
				<Route path="/" component={DiagnosisForm} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
