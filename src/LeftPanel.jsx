import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class LeftPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            links: [
                {
                    link: "/transactions/",
                    name: "Transactions",
                    img_url: ""
                },
                {
                    link: "/extras/",
                    name: "Extras",
                    img_url: ""
                }
            ]
        }
    }

    renderMenus(link){
        return(
            <div key={"menu_div_key" + link.name}>
                <NavLink
                    className={"nav-link "}
                    aria-expanded="false"
                    to={{
                        pathname: link.link,
                    }}
                    activeStyle={{ color: "white", paddingLeft: "17px", borderLeft: "3px solid green", backgroundColor: "#272639" }}
                    style={{ color: "#707f8f", paddingLeft: "20px" }}
                >
                    <div style={{ display: "inline-flex" }}>
                        {link.img_url !== "" ? <img src={link.img_url} alt="" className="leftMenuIcons" /> : <i className="fas fa-fw fa-cog"></i>} &nbsp;
                        <span key={link.name} id={link.name} className="LeftMainMenu">
                            {link.name}
                        </span>
                    </div>
                </NavLink>
            </div>
        )
    }
    
	render() {
		return (
			<ul className="navbar-nav sidebar" id="accordionSidebar" >
                {this.state.links.map(links =>{
                    return this.renderMenus(links)
                })}
			</ul>
		);  
	}
}

