import React, { useState } from "react";
import { Button, Col, Modal, Row, Container, Form, Card } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";
import payment_methods from '../../Projectimages/payment_methods.png'
import Footer from "../../Footer/Footer";
function Checkout() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container className="mt-4">
                    <Col lg={12}>
                        <div className="row g-3">
                            <div className="col-xl-4 order-xl-1">
                                <div className="card">
                                    <div className="card-header bg-light btn-reveal-trigger d-flex flex-between-center">
                                        <h2 className="mb-0">Order Summary</h2>
                                        <Link to="/cart">
                                            <a className="btn btn-link btn-sm btn-reveal text-600" >
                                                <span className="fas fa-pencil-alt"></span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-borderless fs--1 mb-0">
                                            <tbody><tr className="border-bottom">
                                                <th className="ps-0 pt-0">Apple MacBook Pro 15" x 1<div className="text-400 fw-normal fs--2">Z0V20008N: 2.9GHz 6-core 8th-Gen Intel Core i9, 32GB RAM</div>
                                                </th>
                                                <th className="pe-0 text-end pt-0">£1345</th>
                                            </tr>
                                                <tr className="border-bottom">
                                                    <th className="ps-0">Apple iMac Pro x 1<div className="text-400 fw-normal fs--2">27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB</div>
                                                    </th>
                                                    <th className="pe-0 text-end">£2010</th>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <th className="ps-0">Subtotal</th>
                                                    <th className="pe-0 text-end">£3355</th>
                                                </tr>

                                                <tr className="border-bottom">
                                                    <th className="ps-0">Shipping</th>
                                                    <th className="pe-0 text-end">£20</th>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0 pb-0">Total</th>
                                                    <th className="pe-0 text-end pb-0">£3320</th>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light">
                                        <div className="fw-semi-bold">Payable Total</div>
                                        <div className="fw-bold">£3320</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card mb-3">
                                    <div className="card-header bg-light">
                                        <div className="row flex-between-center">
                                            <div className="col-sm-auto">
                                                <h2 className="mb-2 mb-sm-0">Your Shipping Address</h2>
                                            </div>
                                            <div className="col-sm-auto">
                                                <a onClick={handleShow} className="btn btn-falcon-default btn-sm" href="#!">
                                                    <span className="fas fa-plus me-2" data-fa-transform="shrink-2"></span>Add New Address </a></div>
                                        </div>
                                        {/*  */}

                                        {/* Edit Modal */}
                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            dialogClassName="modal-lg modal-90w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                                <h2 className="text-900 mb-0">Address</h2>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    {/* <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Email<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email Address"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Phone<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Phone Number"
                                                        />
                                                    </Form.Group> */}
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Shipping Address line 1<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            size="sm"
                                                            className="resize-none"
                                                            placeholder="For stone slabs, enter your mason's factory address [Refer T&C]
                                                            "
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Shipping Address line 2<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            className="resize-none"
                                                            size="sm"
                                                            placeholder="For stone slabs, enter your mason's factory address [Refer T&C]
                                                            "
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            PostCode<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="CB1 0SL"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Country<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Select>
                                                            <option>United Kingdom</option>
                                                            <option>Ireland</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <div className="form-check"><input className="form-check-input" id="flexCheckChecked" type="checkbox" value="" />
                                                        <label className="form-check-label" for="flexCheckChecked">Same as Shipping Address</label>
                                                    </div>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Billing Address line 1<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            size="sm"

                                                            className="resize-none"
                                                            placeholder="Address Line 1"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Billing Address line 2<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            className="resize-none"

                                                            size="sm"
                                                            placeholder="Address Line 2"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            PostCode<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="CB1 0SL"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">
                                                            Country<span className="text-danger">*</span>
                                                        </Form.Label>
                                                        <Form.Select>
                                                            <option>United Kingdom</option>
                                                            <option>Ireland</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <div className="d-flex justify-content-end gap-2">
                                                    <Button className="btn bg-success border-0">Save</Button>
                                                    <Button onClick={handleClose} className="btn bg-danger border-0">Cancel</Button>
                                                </div>
                                            </Modal.Footer>
                                        </Modal>
                                        {/* Edit Modal */}

                                        {/*  */}
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <div className="form-check mb-0 custom-radio radio-select">
                                                    <input className="form-check-input" id="address-1" type="radio" name="clientName" />
                                                    <label className="form-check-label mb-0 fw-bold d-block" for="address-1">Antony Hopkins<span className="radio-select-content"><span>
                                                        <span className="d-block">Address Line 1</span>
                                                        <span className="d-block">Address Line 2</span>
                                                        <span className="d-block">PostCode</span>
                                                        <span className="d-block">Country</span>
                                                    </span></span></label><a onClick={handleShow} className="fs--1" href="#!">Edit</a></div>
                                            </div>
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <div className="form-check mb-0 custom-radio radio-select">
                                                    <input className="form-check-input" id="address-2" type="radio" name="clientName" />
                                                    <label className="form-check-label mb-0 fw-bold d-block" for="address-1">Antony Hopkins<span className="radio-select-content"><span>
                                                        <span className="d-block">Address Line 1</span>
                                                        <span className="d-block">Address Line 2</span>
                                                        <span className="d-block">PostCode</span>
                                                        <span className="d-block">Country</span>
                                                    </span></span></label><a onClick={handleShow} className="fs--1" href="#!">Edit</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <Card className="mb-3">
                                    <Card.Header className="bg-light">
                                        <h2>Shipping Method</h2>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Check name="shippingCost" type="radio" label="A" />
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span className="fs--1 fw-semibold">£ 75.00</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Check name="shippingCost" type="radio" label="B" />
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span className="fs--1 fw-semibold">£ 75.00</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Check name="shippingCost" type="radio" label="C" />
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span className="fs--1 fw-semibold">£ 75.00</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Check name="shippingCost" type="radio" label="D" />
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span className="fs--1 fw-semibold">£ 75.00</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                {/*  */}
                                <div className="card mb-3">
                                    <div className="card-header bg-light">
                                        <h2 className="mb-0">Payment Method</h2>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Credit Card</label></div>
                                            <div className="row gx-0 ps-2 mb-4">
                                                <div className="col-sm-8 px-3">
                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label>
                                                            <input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                        <div className="">
                                                            <label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">
                                                                CVV
                                                                <span title="3 digit code at the back of your card" className="fa fa-question-circle text-primary ms-2"></span>
                                                            </label>
                                                            <input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                    <div className="rounded-1 p-2 mt-3 bg-100">
                                                        <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                    </div>
                                                </div>
                                                <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Debit Card</label></div>
                                                <div className="col-sm-8 px-3">
                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                        <div className="">
                                                            <label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">
                                                                CVV
                                                                <span title="3 digit code at the back of your card" className="fa fa-question-circle text-primary ms-2"></span>
                                                            </label>
                                                            <input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                    <div className="rounded-1 p-2 mt-3 bg-100">
                                                        <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                    </div>
                                                </div> */}
                                            </div>
                                            {/* <div className="form-check d-flex align-items-center"><input className="form-check-input" type="radio" value="" id="paypal" name="payment-method" /><label className="form-check-label mb-0 ms-2" for="paypal"><img src={paypal} height="20" alt="" /></label></div> */}
                                            <div className="border-bottom border-dashed my-5">
                                                <div className="row">
                                                    <div className="col-md-5 col-xl-12 col-xxl-5 ps-lg-4 ps-xl-2 ps-xxl-5 text-center text-md-start text-xl-center text-xxl-start">
                                                        <div className="border-bottom border-dashed d-block d-md-none d-xl-block d-xxl-none my-4"></div>
                                                        <div className="fs-2 fw-semi-bold">All Total: <span className="text-primary">£3320</span></div><button className="btn btn-success mt-3 px-5" type="submit">Confirm &amp; Pay</button>
                                                        <p className="fs--1 mt-3 mb-0">By clicking <span className="fw-semibold text-900 m-1">Confirm & Pay</span>button you agree to the <Link to="/termsofuse">Terms & Conditions</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default Checkout