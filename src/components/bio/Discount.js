import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Line } from 'rc-progress';

class Discount extends Component {
	state = {
		discountStart: 0,
		reactStart: 0,
		reactNativeStart: 0,
		nodeStart: 0,
		discountEnd: 80,
		reactEnd: 90,
		reactNativeEnd: 70,
		nodeEnd: 85
	};

	porcentage = () => {
		if (this.state.discountStart < this.state.discountEnd) {
			this.setState({
				discountStart: this.state.discountStart + 1
			});
		}
		if (this.state.reactStart < this.state.reactEnd) {
			this.setState({
				reactStart: this.state.reactStart + 1
			});
		}
		if (this.state.reactNativeStart < this.state.reactNativeEnd) {
			this.setState({
				reactNativeStart: this.state.reactNativeStart + 1
			});
		}
		if (this.state.nodeStart < this.state.nodeEnd) {
			this.setState({
				nodeStart: this.state.nodeStart + 1
			});
		}
	};

	componentDidUpdate() {
		setTimeout(() => {
			this.porcentage();
		}, 30);
	}

	render() {
		return (
			<div className="center_wrapper_tech">
				<div className="discount_wrapper">
					<Fade onReveal={() => this.porcentage()}>
						<div className="discount_porcentage">
							<span>{this.state.discountStart}%</span>
						</div>
					</Fade>
					<div className="discount_description">
						<h3>TECHNOLOGIES QUE J'UTILISE ACTUELLEMENT</h3>
						<p>
							React {'  '}
							<span className="color_blue">
								{this.state.reactStart}%
							</span>
							<Line
								percent={this.state.reactStart}
								strokeWidth="2"
								strokeColor="#4b37c0"
								trailColor="#ff4800"
								trailWidth="2"
							/>
						</p>
						<p>
							React Native {'  '}
							<span className="color_blue">
								{this.state.reactNativeStart}%
							</span>
							<Line
								percent={this.state.reactNativeStart}
								strokeWidth="2"
								strokeColor="#4b37c0"
								trailColor="#ff4800"
								trailWidth="2"
							/>
						</p>
						<p>
							Node {'  '}
							<span className="color_blue">
								{this.state.nodeStart}%
							</span>
							<Line
								percent={this.state.nodeStart}
								strokeWidth="2"
								strokeColor="#4b37c0"
								trailColor="#ff4800"
								trailWidth="2"
							/>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Discount;
