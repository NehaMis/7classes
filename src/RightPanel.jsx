import React , { Component } from 'react';
import Routing from './Routing.jsx';

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


