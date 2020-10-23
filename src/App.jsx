import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DiagnosisForm, Report } from 'components/pages';
import 'static/css/global.css';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to='/report' />
				</Route>
				<Route exact path="/report" component={Report} />
				<Route
					exact
					path="/diagnosis"
					component={DiagnosisForm}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
