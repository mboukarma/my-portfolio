import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class ExperienceProf extends Component {
	state = {
		dates: ['De février 2009 à juin 2018', 'De juin 2008 à janvier 2009'],
		fonctions: [
			'DÉVELOPPEUR CHEZ EXOSELL / EXPERTISECALL',
			'DÉVELOPPEUR C# CHEZ EXPERTIS DECISION '
		],
		societes: [],
		desc: [
			'Conception et Réalisation des applications intranet (PHP, Javascript, Mysql), Administration des bases de données Mysql, Installation, configuration et sécurisation des serveurs (Debian, Centos, Windows server 2008)',
			'Conception et Réalisation d’une plateforme de gestion des sinistres (C#.net, Sqlserver)'
		],
		delay: [0, 500]
	};

	showBoxes = () =>
		this.state.dates.map((box, i) => (
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>{this.state.dates[i]}</span>
							<span>{this.state.fonctions[i]}</span>
						</div>
						<div className="pricing_description">
							{this.state.desc[i]}
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_red">
				<div className="center_wrapper_formation pricing_section">
					<h2>EXPÉRIENCES PROFESSIONNELLES</h2>

					<div className="pricing_wrapper">{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}

export default ExperienceProf;
