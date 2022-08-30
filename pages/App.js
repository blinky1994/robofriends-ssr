import React, { useState, useEffect } from 'react';
import { setSearchField, setRequestRobots } from '../src/actions'
import Header from '../components/Header';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux'; 

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => setRequestRobots(dispatch)
	}
} 

function App(props) {

	const { robots, onRequestRobots, searchField , onSearchChange, isPending } = props;

	useEffect(() => {
		onRequestRobots();
	}, []);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return isPending ? <h1>Loading</h1> :
	(
		<div className = 'tc'>
		<Header />
		<SearchBox searchChange = {onSearchChange}/>
		<Scroll>
			<ErrorBoundary>
				<Cardlist robots={filteredRobots}/>
			</ErrorBoundary>
		</Scroll>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);