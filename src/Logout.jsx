
import React, { Component } from "react";
import { withRouter } from "react-router";
import fire from "./config/fire";
export class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        fire.auth().signOut().then(()=>{
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default withRouter(NavBar);
