import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
	return (
		<Fade>
			<div className="center_wrapper">
				<div className="bio_description">
					<p>
						Fort d'une solide expérience acquise dans différentes
						entreprises en tant que salarié, je suis depuis 1an en
						freelance à plein temps.
					</p>
					<p>
						Autonome et rapidement opérationnel, je m'intègre avec
						aisance dans une équipe et son produit. Mon attrait pour
						l'entreprenariat me pousse toujours à comprendre le
						produit sur lequel je travaille, son contexte et son
						positionnement sur un marché.{' '}
						<span className="bio_description_mclef">
							Développeur full-stack Javascript et PHP
						</span>
						, je possède plusieurs années d’expériences sur ces
						écosystèmes.{' '}
					</p>
					<p>
						Je suis en mesure de développer des{' '}
						<span className="bio_description_mclef">
							API REST (Node, PHP)
						</span>
						, des applications mobiles{' '}
						<span className="bio_description_mclef">
							(React-native)
						</span>
						, aussi bien que des interfaces utilisateurs complexes.
					</p>
					<p>
						J'ai la maitrise complète d'une application web :
						installation, développement ainsi que la maintenance
						aussi bien sur le côté logiciel pure que sa mise en
						ligne sur un serveur distant.
					</p>
					<p>
						Je me suis spécialisé ces dernières années dans le
						développement d’UI basé sur des lib Js, plus
						particulièrement{' '}
						<span className="bio_description_mclef">React</span>{' '}
						avec lequel je possède une forte expertise. J'accorde
						une place importante à l'UX lors de mes réalisation. Je
						suis capable d'intervenir sur toutes les étapes d'un
						workflow d'intégration continue, de l’intégration
						initiale jusqu'à la mise en production.
					</p>
				</div>
			</div>
		</Fade>
	);
};

export default Description;
