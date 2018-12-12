import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from './header_footer/Header';
import Formation from './formation';
import Bio from './bio';
import ExperienceProf from './experienceprof';
import Info from './infos';
import Footer from './header_footer/Footer';

import '../styles/styles.css';

class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{ height: '1500px', background: 'cornflowerblue' }}
			>
				<Header />

				<Element name="bio">
					<Bio />
				</Element>

				<Element name="formation">
					<Formation />
				</Element>

				<Element name="experienceprof">
					<ExperienceProf />
				</Element>

				<Element name="info">
					<Info />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
