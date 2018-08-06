import * as React from 'react';
import './App.css';
import { TVChartContainer } from './components/TVChartContainer/index';
import { Link } from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<div className={ 'App' }>
				<header className={ 'App-header' }>
					<h1 className={ 'App-title' }>
						TradingView Charting Library and React Integration Example
					</h1>
				</header>
				<Link to={"/another"}>AnotherPage</Link>

				<TVChartContainer />
			</div>
		);
	}
}

export default App;
