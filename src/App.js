import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/dashboard' component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
