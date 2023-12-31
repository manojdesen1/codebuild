import { React, useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button, Modal, Form, Card, Image, Container, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { getAllData } from "../../../../Services/ProxyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Footer/Footer";
import Flex from "../../../TemplateAssets/common/Flex";
import SimpleBarReact from "simplebar-react";
import MultiSelect from 'multiselect-react-dropdown';
import { Editor } from "@tinymce/tinymce-react";

function SellerList() {

    const [sellersList, setSellers] = useState([]);
    const editorRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getSellers = async () => {
        await getAllData('admin/users').then((res) => {
            var _response = res.data.users;
            var _sellers = _response.filter(x => x.role == "Freelancer");
            setSellers(_sellers);
        })

    }
    useEffect(() => {
        getSellers()
    }, [])
    // 

    // 
    const [selectedCounties, setSelectedCounties] = useState([]);

    const handleCountySelect = (selectedList) => {
        setSelectedCounties(selectedList);
    };

    const countyOptions = [
        { key: 'Bedfordshire', value: 'Bedfordshire' },
        { key: 'Berkshire', value: 'Berkshire' },
        { key: 'Bristol', value: 'Bristol' },
        { key: 'Buckinghamshire', value: 'Buckinghamshire' },
        { key: 'Cambridgeshire', value: 'Cambridgeshire' },
        { key: 'Cheshire', value: 'Cheshire' },
    ];

    // 
    const [layout, setLayout] = useState('list');
    const [isList, setIsList] = useState(true);
    // 
    // 
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToWishlist = () => {
        setIsAdded(true);
        const toastDanger = () => toast.success(<h6 className="text-sucess">Follower Added to Wishlist</h6>);

        toastDanger();
    };

    const handleRemoveFromWishlist = () => {
        setIsAdded(false);
        const toastDanger1 = () => toast.error(<h6 className="text-dark">Follower Removed from Wishlist</h6>)
        toastDanger1();
    };

    return (

        <>

            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="container">
                    <Row>
                        <Col lg={3} className="mb-3">
                            <div className="course-details-sticky-sidebar">
                                <Card className="mt-5 ">
                                    {/* <SimpleBarReact style={{ height: '100%' }}> */}
                                    <Card.Header className="bg-light d-flex justify-content-between pt-x1">
                                        <h4 className="mb-0 text-900 d-flex align-items-center">
                                            <FontAwesomeIcon icon="filter" className="fs-0 me-1" />
                                            <span className="fs-0">Filter</span>
                                        </h4>
                                        <div>
                                            <button
                                                className="btn btn-sm btn-outline-secondary">Reset
                                            </button>
                                        </div>

                                    </Card.Header>
                                    <Card.Body className="py-0 mt-2">

                                        <Flex wrap="wrap" className=" mb-3">
                                            <span
                                                // key={`filter_${i}`}
                                                //  onClick={() => removeFilter(i)} 
                                                className='badge mt-3 ms-1 me-1 mb-3  bg-secondary text-white'>
                                                {"Plumber"} <Icon className='cursor-pointer' icon="ic:sharp-close" color="white" width="14" height="14" />
                                            </span>
                                            <span
                                                // key={`filter_${i}`}
                                                //  onClick={() => removeFilter(i)} 
                                                className='badge mt-3 ms-1 me-1 mb-3  bg-secondary text-white'>
                                                {"Roofer"} <Icon className='cursor-pointer' icon="ic:sharp-close" color="white" width="14" height="14" />
                                            </span>


                                        </Flex>
                                        <ul className="list-unstyled">

                                            <li key="{`job_check_${i}`}">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="form-check d-flex ps-0"
                                                >
                                                    <Form.Check.Label
                                                        className="fs--1  flex-1 text-truncate"
                                                    >
                                                        Plumber
                                                    </Form.Check.Label>

                                                    <Form.Check.Input id="{`job_check_${i}`}" value="{x?.category}"
                                                        type={'checkbox'}
                                                        className='cursor-pointer'
                                                    />
                                                </Form.Check>
                                            </li>
                                            <li key="{`job_check_${i}`}">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="form-check d-flex ps-0"
                                                >
                                                    <Form.Check.Label
                                                        className="fs--1 flex-1 text-truncate"
                                                    >
                                                        Roofer
                                                    </Form.Check.Label>

                                                    <Form.Check.Input id="{`job_check_${i}`}" value="{x?.category}"
                                                        type={'checkbox'}
                                                        className='cursor-pointer'
                                                    />
                                                </Form.Check>
                                            </li>
                                            <li key="{`job_check_${i}`}">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="form-check d-flex ps-0"
                                                >
                                                    <Form.Check.Label
                                                        className="fs--1 flex-1 text-truncate"
                                                    >
                                                        Restoration
                                                    </Form.Check.Label>

                                                    <Form.Check.Input id="{`job_check_${i}`}" value="{x?.category}"
                                                        type={'checkbox'}
                                                        className='cursor-pointer'
                                                    />
                                                </Form.Check>
                                            </li>

                                        </ul>
                                        {/*  */}
                                        <div className="mb-3">
                                            <Form.Label className='fw-semibold fs--1'>Search County</Form.Label>
                                            <MultiSelect
                                                options={countyOptions}
                                                selectedValues={selectedCounties}
                                                onSelect={handleCountySelect}
                                                onRemove={handleCountySelect}
                                                displayValue="key"
                                                className='form-control cursor-default form-control-sm'
                                            />
                                        </div>
                                        {/*  */}
                                    </Card.Body>
                                    {/* </SimpleBarReact> */}
                                </Card>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Card className="mt-5">
                                <Card.Header className="bg-light position-relative">
                                    <h1 className="mb-0 mt-1">Service Provider Lists</h1>
                                </Card.Header>
                                <Card.Body className="pt-0 mt-3 pt-md-3">
                                    <Row className="g-3 align-items-center">
                                        <Col xs="auto" className="d-xl-none">
                                            <Button
                                                className="position-relative p-0"
                                                size="sm"
                                                variant="link"
                                            >
                                                <FontAwesomeIcon icon="filter" className="fs-0 " />
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Form className="position-relative">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Search..."
                                                    // onChange={(e) => mainSearch(e)}
                                                    size="sm"
                                                    aria-label="Search"
                                                    className="rounded search-input ps-4"
                                                />
                                                <FontAwesomeIcon
                                                    icon="search"
                                                    className="fs--1  text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
                                                />
                                            </Form>
                                        </Col>
                                        <Col xs="auto" className="col-md">
                                            <Row className="g-0 justify-content-end">

                                                <Col xs="auto" className="p-0">
                                                    <Row className="g-2 align-items-center">
                                                        <div className="d-flex align-items-center">

                                                            <small style={{ fontSize: '16px' }} className="fw-semi-bold ms-2 me-2 d-lg-block lh-1">View</small>
                                                            <div className="d-flex">
                                                                <div onClick={() => { setIsList(false) }}
                                                                    className={` ${layout === 'grid' ? '' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon className="cursor-pointer" icon="material-symbols:grid-on-sharp" width="22" height="22" />
                                                                </div>
                                                                <div onClick={() => { setIsList(true) }}
                                                                    className={`me-2 ${layout === 'list' ? '' : 'text-400 hover-700'
                                                                        }`}
                                                                >
                                                                    <Icon className="cursor-pointer" icon="material-symbols:format-list-bulleted-rounded" width="22" height="22" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            {sellersList.map((data, index) => {
                                return <Card className="mt-3 overflow-hidden">
                                    <Card.Body className="p-0">
                                        <Row className="g-0">
                                            <Col md={4} lg={3}>
                                                <Link to="/service-provider">
                                                    {data.attachments.length > 0 ?
                                                        <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> :
                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                    }
                                                </Link>
                                            </Col>
                                            <Col md={8} lg={9} className="p-x1">
                                                <Row className="g-0 h-100">
                                                    <Col lg={8}>
                                                        <Link className="text-900" to="/service-provider">
                                                            <h2 className="mt-3 product-name mb-2 product-name text-uppercase  mt-sm-0 fs-0 fs-lg-1">
                                                                {data.name}
                                                            </h2>
                                                        </Link>
                                                        <h3 className="mb-2 mt-2 fs-0 text-primary">
                                                            Roofer
                                                        </h3>
                                                        <p className="fs-0 mb-2">
                                                            <Icon icon="material-symbols:location-on" color="gray" width="22" height="22" /> Operates in <span>CAMBRIDGE</span>
                                                        </p>
                                                        <div className="fw-semi-bold fs--1 mb-2">
                                                            <span className="me-1 text-900 me-2">4.5</span>
                                                            <div className="d-inline-block ">
                                                                <span className="fa fa-star text-warning"></span>
                                                                <span className="fa fa-star text-warning"></span>
                                                                <span className="fa fa-star text-warning"></span>
                                                                <span className="fa fa-star text-warning"></span>
                                                                <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                            </div>
                                                            <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                        </div>
                                                        <div className="ms-0 mt-2 me-5 mb-2">

                                                            <p className=" mb-2 w-100" >
                                                                Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                Cambridge company that offers a variety of Plumbing
                                                                solutions and services.
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    <div class="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                        <div class="h-100 rounded border-lg border-1   justify-content-between p-lg-3">
                                                            {/* */}

                                                            <>
                                                                {isAdded ? (
                                                                    <button
                                                                        className="btn btn-md btn-falcon-danger w-100 mb-3 mt-3 fs--1 text-600"
                                                                        onClick={handleRemoveFromWishlist}
                                                                    >
                                                                        <span className="d-block">
                                                                            <Icon
                                                                                style={{ marginTop: '-2px' }}
                                                                                className="me-1"
                                                                                icon="icon-park-solid:like"
                                                                                color="#df2020"
                                                                                width="18"
                                                                                height="18"
                                                                            />
                                                                            <span className="">Remove from Wishlist</span>
                                                                        </span>
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className="btn btn-md btn-falcon-danger mt-3  w-100 mb-3 fs--1 text-600"
                                                                        onClick={handleAddToWishlist}
                                                                    >
                                                                        <span className="d-block">
                                                                            <Icon
                                                                                icon="icon-park-outline:like"
                                                                                className="me-1"
                                                                                style={{ marginTop: '-2px' }}
                                                                                width="18"
                                                                                height="18"
                                                                            />
                                                                            <span className="">Add to Wishlist</span>
                                                                        </span>
                                                                    </button>
                                                                )}
                                                            </>
                                                            {/*  */}
                                                            <Button
                                                                size="md"
                                                                className="fs--1 mb-3 text-white white-space-nowrap w-100"
                                                                as={Link}
                                                                to="/s/enquiry"
                                                                style={{ background: "#0d406b" }}
                                                            >
                                                                Request a Quote
                                                            </Button>
                                                            {/*  */}
                                                            <Button
                                                                onClick={handleShow}
                                                                className=" bg-transparent fs--1 mb-3 white-space-nowrap w-100"
                                                                style={{ color: "#0d406b", border: "1px solid #0d406b" }}
                                                            >Message Me
                                                            </Button>
                                                            {/*  */}
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>

                                    </Card.Body >
                                </Card>
                            })}
                            <div className="row mt-1 mb-3 g-3">
                                <article className="col-md-6 mt-3 col-lg-6 col-xl-4">
                                    <div className="card h-100 overflow-hidden">
                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div>
                                                <div>
                                                    <Link to="/service-provider">
                                                        {/* {data.attachments.length > 0 ? */}
                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                        {/* } */}
                                                    </Link>
                                                </div>
                                                <div className="p-3">
                                                    <Link className="text-900" to="/service-provider">
                                                        <h2 className="mt-3 product-name text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                            {/* {data.name} */}
                                                            JAGAN SELLER
                                                        </h2>
                                                    </Link>
                                                    <h3 className="mb-2 fs-0 text-primary">
                                                        Roofer
                                                    </h3>
                                                    <p className="mb-2">
                                                        <Icon icon="material-symbols:location-on" color="gray" width="22" height="22" />Operates in <span>CAMBRIDGE</span>
                                                    </p>
                                                    <div className="fw-semi-bold fs--1">
                                                        <span className="me-1 text-900 me-2">4.9</span>
                                                        <div className="d-inline-block ">
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                        </div>
                                                        <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                    </div>
                                                    <p className=" fs--1 mt-2 w-100 d-none d-lg-block" >
                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                        Cambridge company that offers a variety of Plumbing
                                                        solutions and services.
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="row g-0 mb-3 align-items-end">
                                                <div className="col ps-3">
                                                    <Link to="/s/enquiry">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                        >
                                                            Request a Quote
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div className="col-auto pe-3">
                                                    <>
                                                        {isAdded ? (
                                                            <a
                                                                onClick={handleRemoveFromWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Remove from Wishlist"
                                                                data-bs-original-title="Remove from Wishlist"
                                                            >
                                                                <Icon
                                                                    style={{ marginTop: '-5px' }}
                                                                    className="me-1"
                                                                    icon="icon-park-solid:like"
                                                                    color="#df2020"
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        ) : (
                                                            <a
                                                                onClick={handleAddToWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Add to Wishlist"
                                                                data-bs-original-title="Add to Wishlist"
                                                            >
                                                                <Icon
                                                                    icon="icon-park-outline:like"
                                                                    className="me-1"
                                                                    style={{ marginTop: '-5px' }}
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        )}
                                                    </>
                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                        <span className="fas fa-comment me-1"></span>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 mt-3 col-lg-6 col-xl-4">
                                    <div className="card h-100 overflow-hidden">
                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div>
                                                <div>
                                                    <Link to="/service-provider">
                                                        {/* {data.attachments.length > 0 ? */}
                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                        {/* } */}
                                                    </Link>
                                                </div>
                                                <div className="p-3">
                                                    <Link className="text-900" to="/service-provider">
                                                        <h2 className="mt-3 product-name text-uppercase  mt-sm-0 fs-0 fs-lg-1">
                                                            JAGAN SELLER
                                                        </h2>
                                                    </Link>
                                                    <h3 className="mb-2 fs-0 text-primary">
                                                        Roofer
                                                    </h3>
                                                    <p className=" mb-2">
                                                        <Icon icon="material-symbols:location-on" color="gray" width="22" height="22" /> Operates in <span>CAMBRIDGE</span>
                                                    </p>
                                                    <div className="fw-semi-bold fs--1">
                                                        <span className="me-1 text-900 me-2">4.9</span>
                                                        <div className="d-inline-block ">
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                        </div>
                                                        <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                    </div>
                                                    <p className=" fs--1 mt-2 w-100 d-none d-lg-block" >
                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                        Cambridge company that offers a variety of Plumbing
                                                        solutions and services.
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="row g-0 mb-3 align-items-end">
                                                <div className="col ps-3">
                                                    <Link to="/s/enquiry">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                        >
                                                            Request a Quote
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div className="col-auto pe-3">
                                                    <>
                                                        {isAdded ? (
                                                            <a
                                                                onClick={handleRemoveFromWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Remove from Wishlist"
                                                                data-bs-original-title="Remove from Wishlist"
                                                            >
                                                                <Icon
                                                                    style={{ marginTop: '-5px' }}
                                                                    className="me-1"
                                                                    icon="icon-park-solid:like"
                                                                    color="#df2020"
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        ) : (
                                                            <a
                                                                onClick={handleAddToWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Add to Wishlist"
                                                                data-bs-original-title="Add to Wishlist"
                                                            >
                                                                <Icon
                                                                    icon="icon-park-outline:like"
                                                                    className="me-1"
                                                                    style={{ marginTop: '-5px' }}
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        )}
                                                    </>
                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                        <span className="fas fa-comment me-1"></span>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 mt-3 col-lg-6 col-xl-4">
                                    <div className="card h-100 overflow-hidden">
                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div>
                                                <div>
                                                    <Link to="/service-provider">
                                                        {/* {data.attachments.length > 0 ? */}
                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                        {/* } */}
                                                    </Link>
                                                </div>
                                                <div className="p-3">
                                                    <Link className="text-900" to="/service-provider">
                                                        <h2 className="mt-3 product-name text-uppercase  mt-sm-0 fs-0 fs-lg-1">
                                                            {/* {data.name} */}
                                                            JAGAN SELLER
                                                        </h2>
                                                    </Link>
                                                    <h3 className="mb-2 fs-0 text-primary">
                                                        Roofer
                                                    </h3>
                                                    <p className=" mb-2">
                                                        <Icon icon="material-symbols:location-on" color="gray" width="22" height="22" /> Operates in <span>CAMBRIDGE</span>
                                                    </p>
                                                    <div className="fw-semi-bold fs--1">
                                                        <span className="me-1 text-900 me-2">4.9</span>
                                                        <div className="d-inline-block ">
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star text-warning"></span>
                                                            <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                        </div>
                                                        <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                    </div>
                                                    <p className=" fs--1 mt-2 w-100 d-none d-lg-block" >
                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                        Cambridge company that offers a variety of Plumbing
                                                        solutions and services.
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="row g-0 mb-3 align-items-end">
                                                <div className="col ps-3">
                                                    <Link to="/s/enquiry">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                        >
                                                            Request a Quote
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div className="col-auto pe-3">
                                                    <>
                                                        {isAdded ? (
                                                            <a
                                                                onClick={handleRemoveFromWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Remove from Wishlist"
                                                                data-bs-original-title="Remove from Wishlist"
                                                            >
                                                                <Icon
                                                                    style={{ marginTop: '-5px' }}
                                                                    className="me-1"
                                                                    icon="icon-park-solid:like"
                                                                    color="#df2020"
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        ) : (
                                                            <a
                                                                onClick={handleAddToWishlist}
                                                                className="btn btn-sm btn-falcon-default me-2 hover-danger"
                                                                href="#!"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                aria-label="Add to Wishlist"
                                                                data-bs-original-title="Add to Wishlist"
                                                            >
                                                                <Icon
                                                                    icon="icon-park-outline:like"
                                                                    className="me-1"
                                                                    style={{ marginTop: '-5px' }}
                                                                    width="20"
                                                                    height="20"
                                                                />
                                                            </a>
                                                        )}
                                                    </>
                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                        <span className="fas fa-comment me-1"></span>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            {/* Grid Ends */}
                            {/* pagination */}
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="row g-3 flex-center justify-content-md-between">
                                        <div className="col-auto">
                                            <form className="row gx-2">
                                                <div className="col-auto"><small>Show:</small></div>
                                                <div className="col-auto"> <select className="form-select form-select-sm" aria-label="Show courses">
                                                    <option selected="selected" value="9">9</option>
                                                    <option value="20">20</option>
                                                    <option value="50">50</option>
                                                </select></div>
                                            </form>
                                        </div>
                                        <div className="col-auto"> <button className="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Prev" data-bs-original-title="Prev">
                                            <span className="fas fa-chevron-left"></span></button><a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">1</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">2</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">3</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                                <span className="fas fa-ellipsis-h"></span></a><a className="btn btn-sm btn-falcon-default me-2" href="#!">303</a><button className="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next" data-bs-original-title="Next">
                                                <span className="fas fa-chevron-right">  </span></button></div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination */}
                        </Col>
                    </Row>

                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        className="m-3"
                    />

                </Col >
                <Col className="mt-3">
                    <Footer />
                </Col>
            </Row >

            {/*  */}

            {/* Message Me - Modal */}
            < div className='d-flex justify-content-between' >
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-lg modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Contact Reliant Plumbing and Heating</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="">
                                    What's the Message About ?
                                </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="">
                                    Message
                                </Form.Label>
                                {/* <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=""

                                    init={{

                                        height: 200,
                                        menubar: false,
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
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" className="mb-0 mt-3">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label
                                        className=" d-inline"
                                    >
                                        I Agree to the terms and conditions.
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                        </Form>
                        <Button className="m-2 border-0" style={{ background: '#003f6b' }}>
                            attachments
                        </Button>
                        <Button as={Link} to="/Project-owner/login" className="m-2 border-0" style={{ background: '#003f6b' }}>
                            Send
                        </Button>
                    </Modal.Body>
                </Modal>
                {/* Message Me */}
            </div >

        </>
    )
}
export default SellerList