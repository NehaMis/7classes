import React, { Component } from "react";
import fire from "./config/fire";
import NavBar from "./NavBar";
import Left from "./LeftPanel";
import Right from "./RightPanel";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id="wrapper">
                    <Left />
                    <Right />
                </div>
            </div>
        );
    }
}

export default Dashboard;
