import React , { Component } from 'react';

//import RightTop from './right_top.jsx';
import Routing from './Routing.jsx';
// import Footer from './footer.jsx';

export default class RightPanel extends Component {
    
	render() {
		return (
			<div id="right-panel" className="d-flex flex-column">
				<div id="content">
					<Routing />             
				</div>
				
			</div>
		);  
	}
}


