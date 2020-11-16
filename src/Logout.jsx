
import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "./config/fire";
export class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        firebase.auth().signOut().then(()=>{
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
