import { React, useState, useEffect, useCallback, useRef } from 'react';
import {
  Col,
  Form,
  Row,
  Button,
  Card,
  Dropdown,
  Image,
  Modal,
  Container,
  ListGroup
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import { Icon } from "@iconify/react";
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../../TemplateAssets/helpers/utils';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
import { createData, getAllData } from "../../../../Services/ProxyService";
import toast from 'react-hot-toast';
import { uploadImage } from "../../../../Services/ImageService";
import file from '../../Projectimages/BathroomFitting.jpg'
import Footer from '../../Footer/Footer';


const PostProject = () => {

  // Upload Img
  const [covers, setCovers] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Map the acceptedFiles to add the preview property
    const updatedCovers = acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));

    setCovers((prevCovers) => [...prevCovers, ...updatedCovers]);
  }, []);

  const removeCover = (cover) => {
    setCovers((prevCovers) => prevCovers.filter((c) => c !== cover));
  };


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });
  // Upload Img

  // 
  const editorRef = useRef(null);

  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadFiles, setUploadFile] = useState([]);

  const handleFileInput = (e) => {
    const files = e.target.files;
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push({
        name: files[i].name,
        url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${files[i].name}`,
        type: files[i].type
      });
    }
    setSelectedFile(fileArray);
    setUploadFile(files);
  };

  const uploadFile = () => {
    console.log('uploadFiles length', uploadFiles.length);
    for (let i = 0; i < uploadFiles.length; i++) {
      uploadImage(uploadFiles[i]);
    }
  };

  const [form, setform] = useState([])
  console.log(form)

  const handleChange = (e) => {
    const myData = { ...form };
    myData[e.target.name] = e.target.value;
    setform(myData);
    if (e.target.name == 'category') {
      console.log(e.target.value);
      SubCategory(e.target.value);
    }
  }

  const SubCategory = async (_category) => {
    var catg = cate.find(x => x.category == _category);
    setsubcate(catg.sub_category);
  }

  const AddJobs = async () => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    const productdata = {
      customer_email: _json?.email,
      category: form.category,
      sub_category: form.sub_category,
      project_title: form.project_title,
      project_description: form.project_description,
      budget_type: form.budget_type,
      currency: form.currency,
      budget: form.budget,
      max_budget: form.budget_type === "No Idea" ? form.max_budget : 0,
      location: form.location,
      job_status: form.job_status,
      status: form.status,
      visibility: form.visibility,
      project_duration: form.project_duration,
      expire_date: form.expire_date,
      attachments: selectedFile,
      terms_and_condition: true,
      postcode: form.postcode,
      startdate: form.startdate,
      created_by: _json?._id,
    }
    const response = await createData("job/new", productdata)
    if (response.status === 201) {
      toast.success('Successfully Product Added')
      history.push('/projects');
      cleardata()
    } else {
      toast.error('Something went wrong')
    }
    console.log(response)
  }

  const formsubmit = (e) => {
    e.preventDefault();
    uploadFile();
    AddJobs();
  }

  const cleardata = () => {
    setform({
      customer_email: "",
      category: "",
      sub_category: "",
      project_title: "",
      project_description: "",
      budget_type: "",
      currency: "",
      budget: "",
      max_budget: "",
      visibility: "",
      location: "",
      job_status: "",
      status: "",
      project_duration: "",
      expire_date: "",
      terms_and_condition: "",
      created_by: "",
      postcode: "",
      startdate: "",
    });
    setSelectedFile([]);
  }

  const [cate, setcate] = useState([])
  const [subcate, setsubcate] = useState([])
  const [selemail, setselemail] = useState([])


  const Jobslist = async () => {
    const response = await getAllData('master/job_category');
    setcate(response.data.master[0].data);
  }
  const selleremails = async () => {
    const response = await getAllData('admin/users');
    setselemail(response.data.users);
  }
  const removeImage = async (index) => {
    var selected = [...selectedFile];
    var uploads = [...uploadFiles];
    selected.splice(index, 1);
    uploads.splice(index, 1);
    setSelectedFile(selected);
    setUploadFile(uploads);
  }
  useEffect(() => {
    Jobslist()
    selleremails()
  }, [])

  // Cancel Modal
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  // 
  const [inputValue, setInputValue] = useState('');
  const [filteredCounties, setFilteredCounties] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = counties.filter((county) =>
      county.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCounties(filtered);
  };

  const handleCountySelect = (county) => {
    setInputValue(county);
    setFilteredCounties([]);
  };
  // 

  // 
  const counties = [
    'Bedfordshire',
    'Berkshire',
    'Bristol',
    'Buckinghamshire',
    // Add more UK counties here
  ];

  // 
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // 


  return (
    <>
      <Form onSubmit={(e) => { formsubmit(e) }}>
        <Row className="">
          {/* Header */}
          <Col lg={12} className='mb-5' >
            <NavbarStandard />
          </Col>

          {/* Header */}

          {/* <Col lg={12} className='mt-5 ms-3 me-3'> */}

          {/* Note */}

          <Container>
            <Card className="mt-5">
              <Card.Header className='bg-light  '>
                <h1>Note</h1>
              </Card.Header>
              <Card.Body className="">

                <ul>
                  <li style={{ width: '100%' }}>
                    The customers who have described their requirements with better clarity while uploading the project have always connected with the right professionals and received better proposals, and hence completed their projects on time.

                  </li>
                  <li style={{ width: '100%' }}>
                    To make it even better, we recommend that you upload as much relevant information (pictures, documents, specifications, etc) as possible to give clarity.
                  </li>

                </ul>
              </Card.Body>
            </Card>

            {/* Note */}

            {/* Post A Project */}
            <Card className="mb-3 mt-3">
              <Card.Header className='bg-light'>
                <h1 className=' '>Post A Project</h1>
                <p className='mt-2 mb-0'>Select a relevant category so that traders can find your project</p>
              </Card.Header>
              <Card.Body className="bg-white">
                <Row className="gx-2 gy-3">

                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        category <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select value={form.category}
                        required
                        className='cursor-pointer'
                        name="category"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        {cate.map((data) => (
                          <option value={data.category}>{data.category}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        sub-category <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        required
                        className='cursor-pointer'
                        value={form.sub_category}
                        name="sub_category"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        {subcate.map((data) => (
                          <option value={data.value}>{data.value}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2 '>
                    <Form.Group controlId="courseTitle">
                      <Form.Label className='text-700 '>
                        project title <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={form.project_title}
                        required
                        name="project_title"
                        onChange={(e) => handleChange(e)}
                        id="usr-prj-tit"
                        placeholder="e.g I Want to Make a New Kitchen"
                        minLength={30}
                        maxLength={150}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2'>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 '>Project Description <span className="text-danger">*</span> </Form.Label>
                      {/* <Form.Control
                        as="textarea"
                        value={form.project_description}
                        required
                        name="project_description"
                        onChange={(e) => { handleChange(e) }}
                        placeholder="Need a Fabricator who's Specialize in this field"
                        rows={8} /> */}
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
                      <p className='mt-2' style={{ fontSize: '14px' }}>Be Descriptive , Projects with good descriptions are more popular with our Traders</p>
                    </Form.Group>
                  </Col>
                  {/* Upload Samples */}
                  <Form.Label>
                    Upload Sample And Other Helpful
                  </Form.Label>
                  <Card>
                    <Card.Body>
                      <Col lg={12} className='me-2 mb-2 w-100'>
                        <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                          <input {...getInputProps()} multiple />
                          <div className="">
                            <img src={cloudUpload} alt="" width={20} className="me-2" />
                            <span className="d-none d-lg-inline">
                              Drag your images here
                              <br />
                              or,{' '}
                            </span>
                            <Button variant="link" size="sm" className="p-0 ">
                              Browse
                            </Button>
                          </div>
                        </div>

                        {covers.length > 0 &&
                          <div className="mt-3">
                            {covers.map((cover) => (
                              <div key={cover.path} className='d-flex btn-reveal-trigger align-items-center'>
                                <Image
                                  rounded
                                  width={40}
                                  height={40}
                                  src={cover.preview}
                                  alt={cover.path}
                                />
                                <div className='mx-2 flex-1 text-truncate flex-column d-flex justify-content-between'>
                                  <h6 className="text-truncate">{cover.path}</h6>
                                  <div className="d-flex align-items-center position-relative">
                                    <p className="mb-0  text-400 line-height-1">
                                      <strong>{getSize(cover.size)}</strong>
                                    </p>
                                  </div>
                                  <h6 className="mt-2 text-primary">01/05/2023</h6>
                                </div>
                                <CardDropdown>
                                  <div className="py-2">
                                    <Dropdown.Item
                                      className="text-danger"
                                      onClick={() => removeCover(cover)}
                                    >
                                      Remove
                                    </Dropdown.Item>
                                  </div>
                                </CardDropdown>
                              </div>
                            ))}
                          </div>
                        }

                        <p className='d-block mb-0 mt-3' style={{ fontSize: '14px' }}><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</p>
                        <p className='d-block mb-0 mt-2' style={{ fontSize: '14px' }}><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></p>
                      </Col>
                    </Card.Body>
                  </Card>
                  {/* Upload Samples */}
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Budget Type <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        value={form.budget_type}
                        required
                        className='cursor-pointer'
                        name="budget_type"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        <option value="Fixed Price">Fixed Price   </option>
                        <option value="Range">Range</option>
                        <option value="No Idea">No Idea</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Currency <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        value={form.currency}
                        required
                        className='cursor-pointer'
                        name="currency"
                        onChange={(e) => { handleChange(e) }}
                      >
                        <option value="">Select</option>
                        <option value="£ GBP">£ GBP </option>
                        <option value="£ EUR">£ EUR</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Budget <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.budget}
                        required
                        name="budget"
                        onChange={(e) => { handleChange(e) }}

                        placeholder="£ 0"
                        type="number"
                      />
                      <div className='row'>
                        <div className="col">
                          {form.budget_type == "No Idea" ? (
                            <>
                              <Form.Group className='mt-2'>
                                <Form.Label>Max Budget<span className="ms-1 text-danger">*</span></Form.Label>
                                <Form.Control className='d-block' value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} placeholder="£ 0" type="number" />
                              </Form.Group>
                            </>
                          ) : ("")}
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className=''>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 '>Project Location <span className="text-danger">*</span> </Form.Label>

                      {/* <Form.Control
                        value={form.location}
                        required
                        name="location"
                        onChange={(e) => { handleChange(e) }}
                      /> */}

                      <Form>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Search for UK county..."
                            value={inputValue}
                            onChange={handleInputChange}
                          />
                          {filteredCounties.length > 0 && (
                            <ListGroup className="mt-1">
                              {filteredCounties.map((county) => (
                                <ListGroup.Item
                                  key={county}
                                  action
                                  onClick={() => handleCountySelect(county)}
                                >
                                  {county}
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          )}
                        </Form.Group>
                      </Form>

                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Post Code<span className="ms-1 text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.postcode}
                        required
                        name="postcode"
                        onChange={(e) => { handleChange(e) }}

                        type='text'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 <'>
                        Starting Date<span className='text-danger'>*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.startdate}
                        required

                        name="startdate"
                        onChange={(e) => { handleChange(e) }}
                        type='date'
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group className='mb-3 mt-2'>
                      <Form.Label className='text-700 d-block '>
                        Project Visibility <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Check
                        className="mb-0 mt-3"
                        type='radio'
                        // id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="public"

                      >
                        <Form.Check.Input className='cursor-pointer' name="visibility" type="radio" />
                        <Form.Check.Label
                          className="d-inline"

                        >
                          <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span >(All Traders can view the project post and send proposals)</span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>

                    <Form.Group className=''>
                      <Form.Check
                        type='radio'
                        // id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="private"

                        className="mb-0 mt-3"
                      // className='d-inline-block'
                      >
                        <Form.Check.Input className='cursor-pointer' name="visibility" type="radio" />
                        <Form.Check.Label
                          className='d-inline'

                        >
                          <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span>(Only Traders that you specifically invite can view the project post and send proposal)</span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700  '>
                        Project Duration Time <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.project_duration}
                        required
                        disabled
                        name="project_duration"
                        onChange={(e) => { handleChange(e) }}
                        type='text'
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-700  '>
                        Expiry Date <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={form.expire_date}
                        required
                        name="expire_date"
                        onChange={(e) => { handleChange(e) }}
                        type='date'
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="auto">
                    <Form.Check type="checkbox" className="mb-0">
                      <Form.Check.Input
                        type="checkbox"
                        className="cursor-pointer "
                      />
                      <Form.Check.Label className="mb-0 text-700">
                        I Agree the
                        <Link to="/termsofuse">
                          <span className='ms-1'>Terms & Conditions</span>
                        </Link>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col lg={12} className=''>
                    <div className='d-flex justify-content-start'>
                      <Button
                        onClick={handleShow1}
                        className='d-block border-0 bg-success'>
                        Post Project
                      </Button>

                      <Button onClick={() => setShowModal(true)} className='d-block ms-3 border-0 bg-danger'>Cancel</Button>


                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card >

            {/* Post A Project */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className=''>
                  Are you sure you want to cancel without posting the project?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button as={Link} to="/dashboard/my-project" variant="danger" onClick={handleClose}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
            {/* Modal */}
            {/* ---------------- */}
            <Modal size="lg" show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Project Summary</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/*  */}
                <Row className="gx-2 gy-3">
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        category <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900 ">Attic</p>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        sub-category <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900 ">Worktop</p>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2 '>
                    <Form.Group controlId="courseTitle">
                      <Form.Label className='text-700 '>
                        project title <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900 ">WHITE ATTICA SUPERNATURAL QUARTZ</p>
                    </Form.Group>
                  </Col>
                  <Col lg={12} className='me-2'>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 '>Project Description <span className="text-danger">*</span> </Form.Label>
                      <p className="text-900 ">White Attica Supernatural Quartz has a crisp white base featured with an
                        intricate veiny pattern. This quartz slab has a super sleek look in polished
                        finish which
                        is more enhanced by the distinct black veins which have been manufactured to look fit for classy modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true
                        when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in
                        both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                      </p>
                    </Form.Group>
                  </Col>
                  {/* Upload Samples */}

                  <Form.Label className='text-700 '>
                    Upload Sample and Other Helpful
                  </Form.Label>
                  <div className="col-6">
                    <img src={file} width="50px" height="50px" className="pro-pre" />
                    <span className="text-900 ms-3 "><span className="d-block mt-3 ms-2">File Name </span><span className="ms-2 d-block">(540 KB)</span><span className="ms-2 d-block">01/01/2023</span></span>
                  </div>
                  <div className="col-6">
                    <img src={file} width="50px" height="50px" className="pro-pre" />
                    <span className="text-900 ms-3 "><span className="d-block mt-3 ms-2">File Name </span><span className="ms-2 d-block">(540 KB)</span><span className="ms-2 d-block">01/01/2023</span></span>
                  </div>
                  {/* Upload Samples */}
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Budget Type <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900">Fixed Price</p>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Currency <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900">£ GBP </p>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Budget <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900">£ 200 </p>

                    </Form.Group>
                  </Col>
                  <Col lg={12} className=''>
                    <Form.Group className="mb-3">
                      <Form.Label className='text-700 '>Project Location <span className="text-danger">*</span> </Form.Label>
                      <p className="text-900">Buckinghamshire </p>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Post Code<span className="ms-1 text-danger">*</span>
                      </Form.Label>
                      <p className="text-900">CD23BX </p>
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} className=''>
                    <Form.Group>
                      <Form.Label className='text-700 '>
                        Starting Date
                      </Form.Label>
                      <p className="text-900">01/01/2023 </p>
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group className='mb-3 mt-2'>
                      <Form.Label className='text-700 d-block '>
                        Project Visibility <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Check
                        type='radio'
                        id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="public"
                        className='d-inline-block'
                      >
                        <Form.Check.Input name="visibility" type="radio" />
                        <Form.Check.Label

                        >
                          <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All Traders can view the project post and send proposals)</span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                    {/* <Form.Group className=''>
                      <Form.Check
                        type='radio'
                        id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="private"
                        className='d-inline-block'
                      >
                        <Form.Check.Input name="visibility" type="radio" />
                        <Form.Check.Label
                          
                        >
                          <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only Traders that you specifically invite can view the
                            <p className="opt-span">project post and send proposal)</p></span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group> */}
                  </Col>

                  <Col lg={6} md={6} className=''>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-700  '>
                        Expiry Date <span className="text-danger">*</span>
                      </Form.Label>
                      <p className="text-900">01/01/2023 </p>
                    </Form.Group>
                  </Col>

                </Row>


                {/*  */}
              </Modal.Body>
              <Modal.Footer>

                <Button
                  onClick={handleClose1}
                  type="submit"
                  className='d-block border-0 bg-success'
                >Post Project
                </Button>

              </Modal.Footer>
            </Modal>
            {/* ---------------- */}
          </Container>
        </Row>
      </Form >
      <Col lg={12}>
        <Footer />
      </Col>
    </>
  );
};


export default PostProject;
