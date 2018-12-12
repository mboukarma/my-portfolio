import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_bac from '../../resources/images/icons/bac.png';
import icon_etude from '../../resources/images/icons/etude.png';

const Formation = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper_formation pricing_section">
				<h2>FORMATIONS ET DIPLÔMES</h2>
				<div className="vn_wrapper">
					<Zoom duration={500} delay={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yellow" />
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_etude})`
										}}
									/>
									<div className="vn_title">Juin 2012</div>
									<div className="vn_desc">
										ENSET - Mohammedia
									</div>
									<div className="vn_desc color_yellow">
										Licence Universitaire professionnelle en
										administration système et logiciel
									</div>
								</div>
							</div>
						</div>
					</Zoom>

					<Zoom duration={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_red" />
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_bac})`
										}}
									/>
									<div className="vn_title">Juin 2002</div>
									<div className="vn_desc">
										Lycée CHAKIB ARSALAN Mohammedia
									</div>
									<div className="vn_desc color_red">
										Baccalauréat, Série Sciences
										Expérimentales
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default Formation;
