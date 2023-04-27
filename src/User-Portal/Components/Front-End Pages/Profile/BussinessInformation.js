import React from "react";
import ProfileMenu from "./ProfileMenu";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import profile_img from '../../Project images/Handyman.jpg'
import Divider from "../../authentication/Divider";
function BussinessInformation() {
    return (
        <>
            <Row>
                <Col lg={2}>
                    <ProfileMenu />
                </Col>
                <Col lg={9}>
                    <Card className="mt-4 mb-4">
                        <Card.Body>
                            <h5 className="ms-5">Bussiness Setting</h5>
                            <Divider />
                            <h5 className="ms-5">Bussiness Information</h5>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        Bussiness Name
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rafiqur
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Bussiness Email Address
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        rr67@gmail.co
                                    </Form.Label>

                                    <Form.Label className="d-block">
                                        No.Of Employee
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Fabricator
                                    </Form.Label>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        Comapany Type
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rahman
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Landline
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        +44567890
                                    </Form.Label>
                                </div>
                                <div className="ms-5">
                                    <Button className="btn border-0 ms-2 bg-secondary">Edit</Button>
                                </div>
                            </div>
                            <Divider />
                            <h5 className="ms-5">Bussiness Address</h5>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Line
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        102
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Country
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        United Kingdom
                                    </Form.Label>
                                </div>
                                <div>
                                    <Form.Label className="d-block">
                                        County
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        De la la Way
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Post Code
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        CDEX323
                                    </Form.Label>
                                </div>
                                <div>
                                    <Button className="btn border-0 ms-2 bg-secondary">Edit</Button>
                                </div>
                            </div>
                            <Divider />
                            <h5 className="mt-3 mb-3 ms-5">Portfolio</h5>
                            <div className="d-flex mb-3 justify-content-end">
                                <Button className="btn border-0 bg-success m-2">Add</Button>
                                <Button className="btn border-0 bg-danger m-2">Remove</Button>
                            </div>
                            <div className="d-flex justify-content-between ms-5">
                                <div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <Form.Check />
                                        <img src={profile_img} width="150px" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default BussinessInformation