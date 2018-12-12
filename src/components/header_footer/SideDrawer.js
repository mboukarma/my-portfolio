import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -150
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement('bio')}>
					BIO
				</ListItem>
				<ListItem button onClick={() => scrollToElement('formation')}>
					FORMATIONS ET DIPLÔMES
				</ListItem>

				<ListItem
					button
					onClick={() => scrollToElement('experienceprof')}
				>
					EXPÉRIENCES PROFESSIONNELLES
				</ListItem>

				<ListItem button onClick={() => scrollToElement('info')}>
					À PROPOS DE MOI
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;
