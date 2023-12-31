import { React, useState, useRef } from "react";
import { Card, Button, Col, Row, Container, Form, Modal, Dropdown } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile from '../Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import file from '../Projectimages/BathroomFitting.jpg'
import Footer from "../Footer/Footer";

function WorkStreamDetails() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const editorRef = useRef(null);

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="mb-3 overflow-hidden g-3 ms-3 me-3">
                        <Card.Header className="bg-light">
                            <h1 className="mb-3">Workstream with <span className="">Sonaes</span></h1>
                        </Card.Header>
                        <Card.Body>
                            <h2><span className="text-success me-2">#3901031</span>New Kitchen Worktops With Island</h2>
                        </Card.Body>
                    </Card>
                    <div className="row ms-3 g-3 me-3">
                        <div className="col-md-6 order-2 order-md-0 col-lg-8">
                            <Card className="mb-3">
                                <Card.Header className="bg-light">
                                    <h2 className="">Message</h2>
                                </Card.Header>
                                <Card.Body>
                                    <Form className="mt-3">
                                        <Form.Group className="mb-3">
                                            {/* <Form.Control
                                                            as="textarea" id="ask_question"
                                                            
                                                            rows={5} /> */}
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue=""

                                                init={{

                                                    height: 200,
                                                    menubar: false,
                                                    placeholder: 'Send Your Message',
                                                    // plugins: [
                                                    //     'advlist autolink lists link image charmap print preview anchor',
                                                    //     'searchreplace visualblocks code fullscreen',
                                                    //     'insertdatetime media table paste code help wordcount'
                                                    // ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic  | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat ',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                            <Form.Check.Input type="checkbox" />
                                            <Form.Check.Label className="mb-0 text-900">
                                                I acknowledge that all billing regarding this Project (including follow on work) has to be conducted through PPH in order to
                                                comply with MAI policy
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <div className="d-flex gap-1 mt-3 mb-2  justify-content-center justify-content-lg-end">
                                            <Button style={{ background: '#003f6b' }} className="border-0 Home-btns-1">
                                                Attachments
                                            </Button>
                                            <Button style={{ background: '#003f6b' }} className="border-0 Home-btns-1">
                                                send
                                            </Button>
                                        </div>
                                    </Form>
                                    <div class="kanban-items-container scrollbar" tabindex="0">
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fw-medium font-sans-serif " >Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fw-medium font-sans-serif " >Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fw-medium font-sans-serif " >Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fw-medium font-sans-serif " >Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 order-1 order-md-0 col-lg-4 ">
                            <Card className="mb-3">
                                <Card.Body>
                                    <div className="d-flex justify-content-start">
                                        <div>
                                            <Link to="profile_publicview">
                                                <img src={profile} className="mb-3 me-4 rounded-circle" width="100px" height="100px" />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className="fw-bold  mt-3 text-900">Soanes IT</p>
                                            <p className="fw-semibold  text-900">Fabricator</p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '16px' }} className="fw-semibold text-900 text-secondary mt-2 ">United Kingdom</p>
                                    <Card style={{ border: '1px solid #003f6b' }}>
                                        <Card.Body>
                                            <p className="fw-bold text-900" >Project Status</p>
                                            <span style={{fontSize:'16px'}} className="badge p-2 bg-success mt-2 d-block">Accepted</span>
                                            <Button as={Link} to="/new-invoice" style={{ background: '#003f6b' }} className="Home-btns-1 mt-2 w-100">Create Invoice</Button>
                                        </Card.Body>
                                    </Card>

                                </Card.Body>
                            </Card>
                            {/*  */}
                            <Card className="mb-3">
                                <Card.Body>
                                    {/* <h4  className="text-700 fw-semibold">01 Apr 2023</h4> */}
                                    <h3 className="mb-3">New Proposal</h3>
                                    <p className="" >
                                        How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                        your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                        many gigs that we have done in our profile Deposit £200
                                        Many thanks David Soanes, Worthing BN11 4DT England
                                    </p>
                                    <p className=""  >
                                        Please see my cv at this link <a href="#">https://surl.link/q0Lck3 https://surl.link/accessRestricted.html?</a> Decline
                                        u=34452 password is abcdFor screen sharing:------------------Windows: Please search and open Quick
                                        Assist App and | will send you the codeApple Mac: | will send you a Zoom link. Please send your
                                        €MAl AAAESS. ~-mmmemmroem oo
                                        <h4 className="mt-3 mb-3">Team</h4>
                                        Our team of five experts consists of graphic artists, Office 365, IT Support, Wordpress and online
                                        marketing consultantsREFEREESReferees for email migration ( Please contact by email only )Mr
                                        Mark Bowen mark@supportedlivinggateway.comMr Colin McGregor colin@tranquilico.comMiss
                                        Tracie Mckenna tracie.mckenna@1stresponse.org.uk
                                    </p>
                                    <h4 className="mt-3 mb-3">Uploaded File</h4>
                                    <div>
                                    <img src={file} width="50px" height="50px"/>
                                    <p className="fs--1 mb-0 mt-2">File Name</p>
                                    <p className="fs--1">540KB</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    {/* </Card.Body>
                        </Card> */}
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
                {/* Modals */}
                < Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-lg modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h4 className="">
                                Please Type Your Message
                            </h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                    I Confirm That This Message Is Essential For The Submission Of My
                                    Proposal And | Understand That It Will Be Publicly Posted In The
                                    Project's Clarification Board And In Case It Is Used To Spam Or
                                    Solely Advertise My Skills, My Rankings Will Be Severely Affected.
                                </Form.Check.Label>
                            </Form.Check>
                        </Form.Group>
                        <div className="d-flex justify-content-end mb-3">
                            <Button onClick={handleClose} style={{ background: '#003f6b' }} className=" border-0">
                                Send
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal >
                {/* Modal Content */}

            </Row>

        </>
    )
}
export default WorkStreamDetails