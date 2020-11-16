import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Dropdown, Row, Col, Form, Button, Image } from "react-bootstrap";
import $ from "jquery";
export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrRecords: [
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Captured",
                },
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Captured",
                },
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Captured",
                },
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Failed",
                },
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Captured",
                },
                {
                    payment_id: "xyz",
                    rp_order_id: "123",
                    amount: "101",
                    currency: "$",
                    email: "nehamishra@gmail.com",
                    contact: "+919090909090",
                    created_date: "06 Nov 2020, 11:26 AM",
                    status: "Failed",
                },
            ],
        };

        this.selectedTab = "";
    }

    componentDidMount() {
        this.onClickTab("payments");
    }

    onClickTab(id) {
        if ("" !== this.selectedTab) $("#" + this.selectedTab).removeClass("activeTab");
        this.selectedTab = id;
        $("#" + this.selectedTab).addClass("activeTab");
    }

    renderRecords(item) {
        return (
            <tr style={{ height: "40px" }}>
                <td>{item.payment_id}</td>
                <td>{item.rp_order_id}</td>
                <td>{`${item.currency} ${item.amount}`}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.created_date}</td>
                <td>
                    <div className={item.status === "Captured" ? "successStatus" : "failedStatus"}>{item.status}</div>
                </td>
            </tr>
        );
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSearch(e){

    }

    onClear(){
        this.setState({
            payment_id: "",
            count: "",
            status: "",
            notes: "",
            email: ""
        })
    }

    render() {
        return (
            <div>
                <div style={{ display: "inline-flex" }}>
                    <div className="tabs" id="payments" onClick={() => this.onClickTab("payments")}>
                        Payments
                    </div>
                    <div className="tabs" id="refunds" onClick={() => this.onClickTab("refunds")}>
                        Refunds
                    </div>
                    <div className="tabs" id="batch_refunds" onClick={() => this.onClickTab("batch_refunds")}>
                        Batch Refunds
                    </div>
                </div>
                <Form style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Payment Id</Form.Label>
                            <Form.Control type="text"  name="payment_id" value={this.state.payment_id} onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text"  name="status" value={this.state.status} onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"  name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control type="text"  name="notes" value={this.state.notes} onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Count</Form.Label>
                            <Form.Control style={{ width: "50%" }} type="number"  name="count" value={this.state.count} onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Form.Group style={{ textAlign: "left", paddingTop: "25px" }} as={Col} controlId="formGridPassword" >
                            <Button  onClick={(e) => this.onSearch(e)}>
                                Search
                            </Button>
                            <Form.Label style={{marginLeft: "20px"}} onClick={()=>this.onClear()}>Clear</Form.Label>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <table className="w-100 my-3">
                    <thead>
                        <tr style={{ width: "100%", height: "30px", backgroundColor: "#eaeff0" }}>
                            <th>Payment Id</th>
                            <th>Razorpay Order Id</th>
                            <th>Amount</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Created At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arrRecords.map((item) => {
                            return this.renderRecords(item);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
