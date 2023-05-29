import { React, useState, useEffect } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import Menubar from '../Menubar/Menubar';
import SellerPortalHeader from '../Header/SellerPortalHeader';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { uploadImage } from "../../../Services/ImageService";
import { createData, getAllData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard';


const FrontendAddService = () => {
    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal1(false);
    };


    // Static data

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);

    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState({});
    console.log(selectedFile)
    const [actualFiles, setActualFile] = useState({});
    const [uploadFiles, setUploadFile] = useState([]);
    const [cate, setcate] = useState([])
    const [selemail, setselemail] = useState([])
    const [servitag, setServitag] = useState([])
    const [locations, setLocations] = useState([])
    console.log(locations)

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const url = reader.result;
                setActualFile(url);
            };

            reader.readAsDataURL(file);

            const fileObject = {
                "name": file.name,
                "url": `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${file.name}`,
                "type": file.type
            };
            setSelectedFile(fileObject);
        };
    };

    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };

    const removeImage = () => {
        console.log(selectedFile); // Check the data type and structure of selectedFile
        setSelectedFile({});
        setActualFile({});
        setUploadFile([]);
    };


    const [form, setform] = useState([])
    console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData);

    }

    const AddService = async () => {
        const Servicedata = {
            title: form.title,
            status: form.status,
            email: form.email,
            category: form.category,
            handle: form.handle,
            meta_field: {
                metatitle: form.metatitle,
                metadescription: form.metadescription,
            },
            description: form.description,
            service_tag: form.service_tag,
            price_type: form.price_type,
            price: form.price,
            offer_price: form.offer_price,
            display_price: form.display_price,
            terms_and_condition: form.terms_and_condition,
            attachment: JSON.stringify(selectedFile),
            created_by: _json._id,
        }
        const response = await createData("service/new", Servicedata)
        if (response.status === 201) {
            toast.success('Successfully Service Added')
            setform("")
            cleardata()
            history.push('/addservicecard');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault()
        uploadFile()
        AddService();
    }

    const cleardata = () => {
        setform({
            title: "",
            status: "",
            email: "",
            category: "",
            handle: "",
            metatitle: "",
            metadescription: "",
            description: "",
            service_tag: "",
            price_type: "",
            price: "",
            offer_price: "",
            display_price: "",
            terms_and_condition: "",
        })
    }

    const Jobslist = async () => {
        const response = await getAllData('master/service_category');
        setcate(response.data.master[0].data);
    }

    const selleremails = async () => {
        const response = await getAllData('admin/users');
        setselemail(response.data.users);
    }

    const ServiceTags = async () => {
        const response = await getAllData("master/service_tags");
        setServitag(response.data.master[0].data);
        const _selectList = response.data.master[0].data.map((x) => ({
            id: x.id,
            name: x.name,
            list: [],
        }));
        setLocations(_selectList);
    };

    useEffect(() => {
        Jobslist()
        selleremails()
        ServiceTags()
    }, [])


    return (
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Col lg={12} className='mt-5'>
                    <Form onSubmit={(e) => { formsubmit(e) }}>

                        <Container>
                            <div className='d-flex justify-content-end'>

                                <Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className="text-uppercase text-700">Status<span className="text-danger">*</span></Form.Label>
                                        <Form.Select value={form.status} required name="status" onChange={(e) => { handleChange(e) }}>
                                            <option value="">Select</option>
                                            <option value="Draft">Draft</option>
                                            <option value="Active">Active</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form.Group>
                            </div>
                            <Row>
                                <Col lg={7}>
                                    <Card className='mt-3'>
                                        <Card.Header className='bg-light'>
                                            <div>
                                                <h5 className='mt-2 text-uppercase'>Add Services</h5>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <h5 className='mb-2 text-uppercase'>Services Information</h5>

                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-uppercase text-700">Services Title<span className="text-danger">*</span></Form.Label>
                                                <Form.Control value={form.title} required name="title" onChange={(e) => { handleChange(e) }} type="text" className='w-100' />
                                            </Form.Group>
                                            <Row className='g-3 mb-3'>
                                                <Col sm={12} md={6} lg={6} xl={6}>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Services Category<span className="text-danger">*</span></Form.Label>
                                                        <Form.Select value={form.category} required name="category" onChange={(e) => { handleChange(e) }}>
                                                            <option value="">Select Option</option>
                                                            {cate?.map((data) => (
                                                                <option value={data.value}>{data.value}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={6}>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Services Email<span className="text-danger">*</span></Form.Label>
                                                        <Form.Select value={form.email} required name="email" onChange={(e) => { handleChange(e) }}>
                                                            <option value="">Select Option</option>
                                                            {selemail.map((data) => (
                                                                <option value={data.email}>{data.email}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-uppercase text-700">Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                <Form.Control value={form.description} required name="description" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Description....' rows={8} />
                                            </Form.Group>
                                            <Row className='g-3 mb-3'>
                                                <Form.Group as={Col} className='mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Services Location<span className="text-danger">*</span></Form.Label>
                                                    <Multiselect options={servitag[1]?.list} displayValue="value" className='form-control ' />
                                                </Form.Group>
                                                <Form.Group as={Col} className=' mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Services Range
                                                        <span className="text-danger">*</span></Form.Label>
                                                    <Multiselect options={servitag[2]?.list} displayValue="value" className='form-control' />
                                                </Form.Group>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                    <Form.Check type="checkbox" label="Shipping Requires" className="mb-0">
                                                        {/* <Form.Check.Input
                                                                    type="checkbox"
                                                                />  */}
                                                    </Form.Check>
                                                </Col>
                                                <Col>
                                                    <Form.Check type="checkbox" label="Charge Taxes on this product" className="mb-0">

                                                    </Form.Check>
                                                </Col>

                                            </Row>
                                            <Row className='g-3 mb-3'>
                                                <Form.Group as={Col} className='mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Price Type<span className="text-danger">*</span></Form.Label>
                                                    <Form.Select value={form.price_type} required name="price_type" onChange={(e) => { handleChange(e) }}>
                                                        <option value="">Select Option</option>
                                                        <option value="Per Hour Cost">Per Hour Cost</option>
                                                        <option value="Fixed Price">Fixed Price</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group as={Col} className=' mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Price<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.price} required name="price" onChange={(e) => { handleChange(e) }} type="text" />
                                                </Form.Group>
                                            </Row>
                                            <Row className='g-3 mb-3'>
                                                <Form.Group as={Col} className=' mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Offer Price <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.offer_price} required name="offer_price" onChange={(e) => { handleChange(e) }} type="text" />
                                                </Form.Group>
                                                <Form.Group as={Col} className=' mb-3'>
                                                    <Form.Label className="text-uppercase text-700">Display Price<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.display_price} required name="display_price" onChange={(e) => { handleChange(e) }} type="text" />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-uppercase text-700">Terms & Conditions<span className="text-danger">*</span></Form.Label>
                                                <Form.Control value={form.terms_and_condition} required name="terms_and_condition" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='' rows={8} />
                                            </Form.Group>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={5}>
                                    <Card className='mt-3'>
                                        <Card.Body>
                                            <h5 className='mb-2 text-uppercase'>Media</h5>
                                            {/* <Flex justifyContent={between}> */}
                                            {/* <div className='d-flex justify-content-between'>
                                                    <Button variant="primary" onClick={handleShow}>
                                                        Add Media from URL
                                                    </Button>

                                                    <Modal show={show} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Enter or Paste the URL</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Form.Control type='text' className='w-100 mb-3' />
                                                            <Button className='btn btn-outline-success text-light'>Submit</Button>
                                                        </Modal.Body>
                                                    </Modal>

                                                </div> */}
                                            {/* </Flex> */}
                                            <div className='mt-3 border-secondary w-100'>
                                                <small className='d-block text-align-center w-100'>
                                                    Drag and Drop
                                                    Your Files Here

                                                </small>
                                                <div className='d-flex justify-content-between'>
                                                    {/* <Button type='button' className='mt-3 btn text-light btn-outline-secondary'>Browse Files</Button> */}
                                                    {/* <Button type='button' className='mt-3 ms-5  btn text-light btn-outline-success'>Upload Images</Button> */}
                                                    <label htmlFor="select-basic" >
                                                        <Button className='mt-3 btn text-light btn-outline-secondary' onClick={() => document.getElementById('select-basic').click()}>Browse Files</Button>
                                                        <input
                                                            name="attachments"
                                                            // multiple
                                                            onChange={handleFileInput}
                                                            required
                                                            type="file"
                                                            id="select-basic"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                        />
                                                    </label>

                                                </div>
                                                {actualFiles.length == 0 || actualFiles.length == undefined ? (
                                                    ""
                                                ) : (<>
                                                    <img src={actualFiles} alt="product-img" className="attached-img_1 mt-3" /><br />
                                                    <button type="button" onClick={removeImage} className="btn btn-danger  mt-3">Remove</button>
                                                </>)}
                                                <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                                <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className='mt-3'>
                                        <Card.Body>
                                            <h5 className='mb-2 text-uppercase'>Services Handle and Metafields</h5>
                                            <Form.Group className='mb-4'>
                                                <Form.Label className="text-uppercase text-700">
                                                    Services handle
                                                    <span className="text-danger">*</span></Form.Label>
                                                <Form.Control value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                            </Form.Group>
                                            <h5 className='mb-2 text-uppercase'>Services Metafields</h5>
                                            <Form.Group className='mb-3'>
                                                <Form.Label className="text-uppercase text-700">
                                                    Title Tag Meta Field
                                                    <span className="text-danger">*</span></Form.Label>
                                                <Form.Control value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Label className="text-uppercase text-700">
                                                    Description Tag Meta Field
                                                    <span className="text-danger">*</span></Form.Label>
                                                <Form.Control value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={7} className='mb-3'>
                                    {/* <Link to='/addservicecard'> */}
                                    <Button type='submit' className='mt-3  btn text-light bg-success border-0'>Add Services</Button>
                                    {/* </Link> */}


                                    <Button onClick={() => setShowModal1(true)} className='mt-3  btn text-light border-0 ms-5 bg-danger '>Cancel</Button>

                                    {/*  */}
                                    <Modal show={showModal1} onHide={handleClose1}>
                                        <Modal.Header >
                                            <Modal.Title>Warning</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p className='text-capitalize'>
                                                Are you sure you want to cancel without adding service ?
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className='me-2' variant="secondary" onClick={handleClose1}>
                                                No
                                            </Button>
                                            <Link to="/addservicecard">
                                                <Button variant="danger" onClick={handleClose1}>
                                                    Yes
                                                </Button>
                                            </Link>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>
                            </Row>
                        </Container>

                    </Form>
                </Col>
                <Toaster />
            </Row>
        </>
    )
}
export default FrontendAddService;