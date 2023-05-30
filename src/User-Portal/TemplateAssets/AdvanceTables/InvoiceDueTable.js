import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import InvoiceTable from "./InvoiceTable";
import file from '../../Components/Projectimages/BathroomFitting.jpg'
import RaiseInvoiceTable from "./OwnerInvoice";
const InvoiceTableCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);




    const columns = [
        {
            accessor: 'id',
            Header: 'Invoice Id'
        },
        {
            accessor: 'itemName',
            Header: 'Item Name'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'description',
            Header: 'Description'
        },
        {
            accessor: 'amount',
            Header: 'Amount'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        },
    ];
    const data = [
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-success">Paid</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-warning">New</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-danger">Rejected</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        }
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>
                <Row className="flex-between-center mb-3">
                    <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                        {/* <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5> */}
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                        {Object.keys(selectedRowIds).length > 0 ? (
                            <div className="d-flex">

                            </div>
                        ) : (
                            <div id="orders-actions">

                            </div>
                        )}
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <>
            <Card className="mb-3 mt-4 btn-reveal-trigger h-100">
                <Card.Header className="d-flex flex-between-center bg-light ">
                    <h5 className="text-capitalize">
                        Invoice
                    </h5>
                    
                </Card.Header>
                <Card.Body>
                    <AdvanceTableWrapper
                        columns={columns}
                        data={data}
                        sortable
                        pagination
                        perPage={5}
                        selection
                        selectionColumnWidth={30}
                    >
                        <BulAction table />
                        <AdvanceTable
                            table
                            headerClassName="bg-200 text-900 text-nowrap align-middle"
                            rowClassName="align-middle white-space-nowrap"
                            tableProps={{
                                striped: true,
                                className: 'fs--1 mb-0 overflow-hidden'
                            }}
                        />
                        <div className="mt-3">
                            <AdvanceTableFooter
                                rowCount={data.length}
                                table
                                rowInfo
                                navButtons
                                rowsPerPageSelection
                            />
                        </div>
                    </AdvanceTableWrapper>
                </Card.Body>
            </Card>

            {/* View Modal */}

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className="">
                    <h5>
                        Invoice :<span style={{ fontSize: '14px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>

                </Modal.Header>
                <Modal.Body>
                    <RaiseInvoiceTable />
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <Form.Group className="mt-3">
                                <Form.Label className="text-900">Message on Invoice</Form.Label>
                                <p className="w-75 text-justify text-900">
                                    It is a long estabcol-sm-12lished fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label className="text-900">Message on Statement</Form.Label>
                                <p className="w-75 text-justify text-900">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3">
                                <Form.Label className="text-900">Attachments</Form.Label>
                                <div className="row bg-pre mt-3">
                                    <div className="col ">
                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                    </div>
                                </div>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <tr>
                                <td>
                                    <h6 className="mt-3 fw-bold text-900 me-3">Sub Total:</h6>
                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 200</h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Discount (20%):</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 40</h6>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Shipping (20%):</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 40</h6>
                                    <Divider />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Total:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Deposit:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>
                                    <Divider />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Balance Due:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>

                                </td>
                            </tr>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button as={Link} to="/InvoiceCheckout" className="btn btn-success">Pay Now</Button>
                </Modal.Footer>
            </Modal>
            {/* View Modal */}
            {/* Modal */}
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="">
                    <h5>
                        New Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>
                    <Button className="bg-danger border-0" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <RaiseInvoiceTable/>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <tr>
                            <td>
                                <h6 className="mt-3 text-900 me-3">Invoice Total:</h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 200</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">Tax : <span className="fw-semibold ms-3 mt-2">20 %</span></h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 40</h6>
                                <Divider />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">Grand Total:</h5>

                            </td>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">£ 240</h5>
                                <Divider />
                            </td>
                        </tr>
                        <div className="mt-3 d-flex justify-content-end">
                            <span style={{ fontSize: '14px' }} onClick={handleClose} className="badge p-2 bg-danger ms-2 border-0">Cancelled</span>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*  */}
        </>
    )
}
export default InvoiceTableCard