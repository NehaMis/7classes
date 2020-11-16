import React, { Component } from "react";
import fire from "../config/fire";
import { Navbar, Nav, NavDropdown, FormText, Row, Col, Form, Button, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import image from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import firebase from "firebase";
class Home extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            email: "",
            password: "",
            fName: "",
            lName: "",
            isLoginpage: true,
        };
    }

    login(e) {
        e.preventDefault();

        var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!email.test(this.state.email)) {
            alert("Enter a valid email");
            return false;
        }

        if (this.state.password.length < 6) {
            alert("Enter atleast 8 digit password");
            return false;
        }

        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                this.props.history.push("/transactions/");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleChange(e) {
        var { name, value } = e.target;
        // var reg = /^[0-9]*$/g;
        // if(name === "mobile" && !reg.test(value)){
        //     value = value.slice(0, value.length-2);
        // }

        if ((name === "fName" || name === "lName") && value !== "") {
            value = value[0].toUpperCase() + "" + value.slice(1, value.length);
        }

        this.setState({
            [name]: value,
        });
    }

    validate() {
        var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        var specialChar = /[!@#$%^&*(),.?":{}|<>]/g;
        if (!email.test(this.state.email)) {
            alert("Please Valdiate Email!");
            return false;
        }

        if (this.state.fName.length < 3 || this.state.lName.length < 3 || specialChar.test(this.state.fName) || specialChar.test(this.state.lName)) {
            alert("Please Valdiate Name!");
            return false;
        }

        if (this.state.mobile.length !== 10) {
            alert("Please validate mobile number!");
            return false;
        }

        if (this.state.password.length < 6) {
            alert("Please atleast 6 digit password!");
            return false;
        }

        return true;
    }

    signup(e) {
        if (this.validate()) {
            e.preventDefault();
            fire.auth()
                .createUserWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password)
                .then((u) => {
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(u.user.uid)
                        .set({
                            email: this.state.email.toLowerCase(),
                            f_name: this.state.fName,
                            l_name: this.state.lName,
                            contact_no: this.state.mobile,
                            created_date: new Date().toISOString(),
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    this.props.history.push("/transactions/");
                })
                .catch((err) => {
                    console.log(err);
                    if (err.code === "auth/email-already-in-use") {
                        alert("Email Already Exists!");
                    }
                });
        }
    }

    showSignUpPage() {
        this.setState({ isLoginpage: !this.state.isLoginpage, password: "" });
    }

    render() {
        var render = [];

        if (this.state.isLoginpage) {
            render.push(
                <Row className="loding">
                    <Col>
                        <br />
                        <br />
                        <br />
                        <center>
                            <Image src={image} style={{ width: "90%" }} />
                        </center>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Form style={{ width: "70%", marginLeft: "10%", textAlign: "left" }}>
                            <Form.Group>
                                <Form.Label style={{ Left: "0" }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                            </Form.Group>
                            <center>
                                <Button className="text-center px-4" onClick={(e) => this.login(e)}>
                                    Login
                                </Button>
                                <div className="text-center my-3" onClick={() => this.showSignUpPage()}>
                                    New User? <span style={{ color: "orange", fontWeight: "bold", cursor: "pointer" }}>Sign Up</span>
                                </div>
                            </center>
                        </Form>
                    </Col>
                </Row>
            );
        } else
            render.push(
                <Row className="loding">
                    <Col>
                        <br />
                        <br />
                        <br />
                        <center>
                            <Image src={image} style={{ width: "90%" }} />
                        </center>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Form style={{ width: "70%", marginLeft: "10%", textAlign: "left" }}>
                            <Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" name="fName" value={this.state.fName} onChange={(e) => this.handleChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={(e) => this.handleChange(e)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label style={{ Left: "0" }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" name="mobile" maxLength="10" placeholder="Mobile Number" value={this.state.mobile} onChange={(e) => this.handleChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                            </Form.Group>
                            <center>
                                <Button className="text-center px-4" onClick={(e) => this.signup(e)}>
                                    Sign Up
                                </Button>
                                <div className="text-center my-3" onClick={() => this.showSignUpPage()}>
                                    Registered User? <span style={{ color: "orange", fontWeight: "bold", cursor: "pointer" }}>Sign In</span>
                                </div>
                            </center>
                        </Form>
                    </Col>
                </Row>
            );

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    {/* <Navbar collapseOnSelect expand="lg" className="shadow-sm" style={{borderBottom: "2px solid grey", backgroundColor: "#171b36",}}> */}
                    <Navbar.Brand href="#Dashboard1">
                        <Image src={logo} width="30" height="30" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Plans</Nav.Link>
                            <Nav.Link href="#pricing">Features</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About Us</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {render}
            </div>
        );
    }
}

export default withRouter(Home);
