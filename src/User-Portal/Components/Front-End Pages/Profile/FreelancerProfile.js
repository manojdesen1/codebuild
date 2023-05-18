import React from "react";
import coverimg from '../../Projectimages/7.jpg'
import profile from '../../Projectimages/Handyman.jpg'
import { Col, Container, Row, Card, Table, Dropdown } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import CardDropdown from "../../../TemplateAssets/common/CardDropdown";
import { Link } from "react-router-dom";
import Chat from "../Chat";

function FreelancerProfile() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <Container>
                <div class="card mt-5 mb-3">
                    <div class="card-header position-relative min-vh-25 mb-7">
                        <div class="bg-holder rounded-3 rounded-bottom-0" style={{ backgroundImage: `url(${coverimg})` }}></div>

                        <div class="avatar avatar-5xl avatar-profile">
                            <img class="rounded-circle img-thumbnail shadow-sm" src={profile} width="200" alt="" /></div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h4 class="mb-1"> Peter Leverkus</h4>
                                {/* <span data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5rem 0.625rem" }}><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg></span></h4> */}
                                <h6 class="fs-0 text-primary fw-normal">petergms@gmail.com</h6>
                                <p class="text-900">+44 211 799</p>
                                {/* <button class="btn btn-falcon-primary btn-sm px-3" type="button">Following</button><button class="btn btn-falcon-default btn-sm px-3 ms-2" type="button">Message</button>
                                <div class="border-bottom border-dashed my-4 d-lg-none"></div> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* Next Row-2 */}
                <div class="row g-0 mb-3">
                    <div class="col-lg-8 pe-lg-2">
                        <div class="card mb-3">
                            <div class="card-header bg-light">
                                <h5 class="mb-0">Intro</h5>
                            </div>
                            <div class="card-body text-justify">
                                <p class="mb-0 text-1000">Milton Finger (born February 8, 1914), better known as Peter Leverkus, was an UK comic strip, comic book, film, and television writer who co-created the DC Comics superhero character Batman (along with Bob Kane).</p>
                                <div class="collapse" id="profile-intro" style={{}}>
                                    <p class="mt-3 text-1000">A young, promising writer and part-time shoe dealer Finger, joined Kane's fledgling studio in 1938. Despite his significant (and often iconic) contributions as an imaginative writer, visionary mythos/world builder, and illustration creator, Finger was frequently reduced to ghostwriter status on a number of comics, including Batman and Green Lantern (Original Version). </p>
                                    <p class="text-1000">It’s great that we live in an age where we can share so much with technology but I’m but I’m ready for the next phase of my career, with a healthy balance between the virtual world and a workplace where I help others face-to-face.</p>
                                    <p class="text-1000 mb-0">There’s always something new to learn, especially in IT-related fields. People like working with me because I can explain technology to everyone, from staff to executives who need me to tie together the details and the big picture. I can also implement the technologies that successful projects need.</p>
                                </div>
                            </div>
                            <div class="card-footer bg-light p-0 border-top">
                                <button class="btn btn-link d-block w-100 btn-intro-collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#profile-intro" aria-expanded="false" aria-controls="profile-intro">Show <span class="less">less
                                    {/* <svg class="svg-inline--fa fa-chevron-up fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg> */}
                                </span><span class="full">full
                                        {/* <svg class="svg-inline--fa fa-chevron-down fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg> */}
                                    </span></button></div>
                        </div>
                        {/* Bussiness Information */}
                        <Card className="mb-3 mb-lg-0 font-sans-serif">
                            <Card.Header as="h5" className="bg-white text-capitalize">
                                Bussiness Information
                            </Card.Header>
                            <Card.Body className="d-flex gap-3 flex-column flex-sm-row align-items-center">
                                {/* <img
                                                width="100px"
                                                src={student}
                                                alt="student profile image"
                                            /> */}
                                <Table borderless className="fs--1 fw-medium mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Name:
                                            </td>
                                            <td className="p-1 text-600">Worktops </td>
                                        </tr>

                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Email:
                                            </td>
                                            <td className="p-1">
                                                <Link to="mailto:goodguy@nicemail.com" className="text-600">
                                                    testworktops@gmail.com
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Phone No:
                                            </td>
                                            <td className="p-1">
                                                <Link to="tel:+01234567890" className="text-600">
                                                    +012-345-67890
                                                </Link>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                Bussiness Address:
                                            </td>
                                            <td className="p-1">
                                                <Link to="1 De La Warr Way, Cambridge, CB23 6DX" className="text-600">
                                                    1 De La Warr Way, Cambridge, CB23 6DX
                                                </Link>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                You Operate as:
                                            </td>
                                            <td className="p-1 text-600">
                                                <Link to="Limited Company" className="text-600">
                                                    Limited Company
                                                </Link>
                                                {/* <Form.Select className="w-25" style={{ height: '30px', fontSize: '12px' }}>
                                                                <option>Self-Employed/Sole Trader</option>
                                                                <option>Limited Company</option>
                                                                <option>Ordinary Partnership</option>
                                                                <option>Limited Partnership</option>
                                                            </Form.Select> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1" style={{ width: '35%' }}>
                                                No.Of Employee:
                                            </td>
                                            <td className="p-1 text-600">
                                                <Link to="Myself Only" className="text-600">
                                                    Myself Only
                                                </Link>
                                                {/* <Form.Select className="w-25" style={{height:'30px',fontSize:'12px'}}>
                                                                <option>Myself Only</option>
                                                                <option>2-5</option>
                                                                <option>5-10</option>
                                                                <option>10+</option>
                                                            </Form.Select> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="position-absolute top-0 end-0 m-3">
                                    <CardDropdown iconClassName="fs--1" drop="bottom">
                                        <div className="py-2">
                                            <Dropdown.Item href="#!">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#!">Save</Dropdown.Item>
                                        </div>
                                    </CardDropdown>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* Bussiness Information */}
                        
                        <div class="card mb-3 mb-lg-0">
                            <div class="card-header bg-light">
                                <h5 class="mb-0">Photos</h5>
                            </div>
                            <div class="card-body overflow-hidden">
                                <div class="row g-0">
                                    <div class="col-6 p-1"><a class="glightbox" href="../../assets/img/generic/4.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-6 p-1"><a class="glightbox" href="../../assets/img/generic/5.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><a class="glightbox" href="../../assets/img/gallery/4.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><a class="glightbox" href="../../assets/img/gallery/5.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                    <div class="col-4 p-1"><a class="glightbox" href="../../assets/img/gallery/3.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src={coverimg} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 ps-lg-2">
                        <div class="sticky-sidebar">
                            <div class="card mb-3">
                                <div class="card-header bg-light">
                                    <h5 class="mb-0">Experience</h5>
                                </div>
                                <div class="card-body fs--1">
                                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/g.png" alt="" width="56" /></a>
                                        <div class="flex-1 position-relative ps-3">
                                            <h6 class="fs-0 mb-0">Fabricator<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified">
                                                {/* <svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.625em" }}><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg> */}
                                            </span></h6>
                                            <p class="mb-1"> <a href="#!">Freelancer</a></p>
                                            <p class="text-1000 mb-0">4 Years</p>
                                            <p class="text-1000 mb-0">Cambridge, UK</p>
                                            <div class="border-bottom border-dashed my-3"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="../../assets/img/logos/apple.png" alt="" width="56" /></a>
                                        <div class="flex-1 position-relative ps-3">
                                            <h6 class="fs-0 mb-0">Kitchen Designer
                                                <span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified">
                                                    {/* <svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.625em" }}><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg> */}
                                                    {/* <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small>< */}
                                                </span></h6>
                                            <p class="mb-1"> <a href="#!">Worktops</a></p>
                                            <p class="text-1000 mb-0">4 Years</p>
                                            <p class="text-1000 mb-0">Cambridge, UK</p>
                                            <div class="border-bottom border-dashed my-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="card-header bg-light">
                                    <h5 class="mb-0">Awards & Rewards</h5>
                                </div>
                                <div class="card-body fs--1">
                                    <div class="d-flex">
                                        <div class="flex-1 position-relative ps-3">
                                            <ul>
                                                <li style={{ fontSize: "14px" }} class="text-1000 mb-0">1994-Jack Kirby Hall of Fame</li>
                                                <li style={{ fontSize: "14px" }} class="text-1000 mb-0">In 1999 Will Eisner Award Hall of Fame</li>
                                                <div class="border-bottom border-dashed my-3"></div>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                {/* Next Row-2 */}

                {/* Followers */}
                <div class="card mb-3 mt-3">
                    <div class="card-header bg-light">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="mb-0" id="followers">Followers <span class="d-none d-sm-inline-block">(4)</span></h5>
                            </div>
                            {/* Search */}
                        </div>
                    </div>
                    <div class="card-body bg-light px-1 py-0">
                        <div class="row g-0 text-center fs--1">
                            <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div class="bg-white dark__bg-1100 p-3 h-100"><a href="../../pages/user/profile.html"><img class="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={profile} alt="" width="100" height="100" /></a>
                                    <h6 class="mb-1"><a href="../../pages/user/profile.html">Emilia Clarke</a></h6>
                                    <p class="fs--2 mb-1"><a class="text-700" href="#!">Kitchen Designer</a></p>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div class="bg-white dark__bg-1100 p-3 h-100"><a href="../../pages/user/profile.html"><img class="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={profile} alt="" width="100" height="100" /></a>
                                    <h6 class="mb-1"><a href="../../pages/user/profile.html">Kit Harington</a></h6>
                                    <p class="fs--2 mb-1"><a class="text-700" href="#!">Plumber</a></p>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div class="bg-white dark__bg-1100 p-3 h-100"><a href="../../pages/user/profile.html"><img class="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={profile} alt="" width="100" height="100" /></a>
                                    <h6 class="mb-1"><a href="../../pages/user/profile.html">Sophie Turner</a></h6>
                                    <p class="fs--2 mb-1"><a class="text-700" href="#!">Roofer</a></p>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                <div class="bg-white dark__bg-1100 p-3 h-100"><a href="../../pages/user/profile.html"><img class="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={profile} alt="" width="100" height="100" /></a>
                                    <h6 class="mb-1"><a href="../../pages/user/profile.html">Peter Dinklage</a></h6>
                                    <p class="fs--2 mb-1"><a class="text-700" href="#!">Worktop Installer</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Followers */}
            </Container >
        </>
    )
}
export default FreelancerProfile