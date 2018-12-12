import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import mhd_photo from '../../resources/images/mhd.JPG';

export default class Info extends Component {
	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper_formation info_section">
					<h2>À PROPOS DE MOI</h2>

					<div className="center_wrapper_tech">
						<div className="info_wrapper">
							<Fade>
								<div
									className="info_img"
									style={{
										background: `url(${mhd_photo})`,
										height: '330px',
										width: '160px',
										borderRadius: 40
									}}
								/>
							</Fade>

							<Slide right>
								<div className="qinfos">
									<p>Nom</p>
									<p>AGE</p>
									<p>EXPERIENCE</p>
									<p>TÉLÉPHONE</p>
									<p>EMAIL</p>
									<p>SITE</p>
									<p>PASSION</p>
								</div>
								<div className="rinfos">
									<p>Mohammed Boukarma</p>
									<p>35 ans</p>
									<p>10+</p>
									<p>+212662886543</p>
									<p>mr.boukarma@gmail.com</p>
									<p>
										https://mboukarma.github.io/my-portfolio/
									</p>
									<p>Informatique, Football</p>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
