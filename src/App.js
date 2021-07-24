import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Reports from './pages/Reports';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/reports' component={Reports} />
			</Switch>
		</Router>
	);
}

export default App;
