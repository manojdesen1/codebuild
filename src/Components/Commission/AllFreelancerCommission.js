// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import pom from '../../Images/product_image.png'
// import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import { getAllData, deleteData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';
// import toast, { Toaster } from 'react-hot-toast';

// function AllCommission() {
//     const [form, setform] = useState([]);
//     const Catcomdata = async () => {
//         const response = await getAllData("commission/category/4")
//         setform(response.data.commission)
//     }

//     useEffect(() => {
//         Catcomdata()
//     }, [])

//     const commmissiondel = async (data) => {
//         const response = await deleteData('commission/' + data._id);
//         if (response.status === 201) {
//             toast.success('Successfully Commission Deleted')
//             Catcomdata()
//         } else {
//             toast.error('Something went wrong')
//         }
//     }

//     const [listPerPage] = useState(10);
//     const [pageNumber, setPageNumber] = useState(0);
//     const pagesVisited = pageNumber * listPerPage;
//     const lists = form.slice(pagesVisited, pagesVisited + listPerPage);
//     const pageCount = Math.ceil(form.length / listPerPage);
//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     }

//     return (
//         <div className="row">
//             <div className="col-2">
//                 <AiMenu />
//             </div>
//             <div className="col-10">
//                 <div>
//                     <AiHeader />
//                 </div>
//                 <div className="page-bg">
//                     <div className="product-adding-div">
//                         <div>

//                             <h4 className="ai-seller-title" >Freelancer Commission Settings <span className="badge-1 badge bg-secondary">#100</span></h4>
//                             <p className="ai-title-note">Here are the Freelancer Commission Setting on your store</p>
//                         </div>
//                         <div className="row">
//                             <div className="col-12">
//                                 <Link to="freelancercommission" role="button"><button className="add-commission">Add Commission to Freelancer</button></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <p className="bulk-actions">Bulk Action :{' '}
//                         <select className="select-opt">
//                             <option>Select Options</option>
//                         </select>
//                     </p>
//                     <p className="show-list">Show:
//                         <select>
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                             <option>6</option>
//                             <option>7</option>
//                             <option>8</option>
//                             <option>9</option>
//                             <option>10</option>
//                         </select>
//                         {' '}
//                         List
//                     </p>
//                     <div className="all-jobs-div">
//                         <table className="allproducts-table">
//                             <tr className="product-heading ">
//                                             <td className="table_data rounded-start"><input type='checkbox' /></td>
//                                             <td className="table_data">Freelancer ID <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Freelancer Profile<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Company Name<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Email ID <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>

//                                             <td className="table_data">Commission Type <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">First Commission<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Second Commission<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>

//                                             <td className="table_data">Created date<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">Modified date<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data rounded-end">Action</td>
//                                         </tr>
//                             {lists.map((data, key) => (
//                                 <tr key={key}>
//                                     <td classname="td"><input type='checkbox' /></td>
//                                     <td classname="td">2456781</td>
//                                     <td classname="td">Manikandan</td>
//                                     <td classname="td">Global Stone</td>
//                                     <td classname="td">{data.email}</td>
//                                     <td classname="td"> {data.commission_type}</td>
//                                     <td classname="td">{data.first_commission == "" || data.first_commission == undefined ? (
//                                         <span> -</span>
//                                     ) : (
//                                         <span> {data.first_commission}</span>
//                                     )}</td>
//                                     <td classname="td">{data.second_commission == "" || data.second_commission == undefined ? (
//                                         <span> -</span>
//                                     ) : (
//                                         <span> {data.second_commission}</span>
//                                     )}</td>
//                                     <td classname="td"><span >{(data.created_date).slice(0, 10)}</span></td>
//                                     <td classname="td"><span   >{(data.modified_date).slice(0, 10)}</span></td>
//                                     <td classname="td">
//                                         <div class="dropdown">
//                                             <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                 <i class="fa-solid fa-ellipsis"></i>
//                                             </a>
//                                             <ul class="dropdown-menu">
//                                                 <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
//                                                 <li><a class="dropdown-item" onClick={() => { commmissiondel(data) }}><i class="fa-solid fa-trash"></i> Delete</a></li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}

//                         </table>
//                         <span className="showing-tag-name">Showing 1-30 List</span>
//                         <div className="mt-5" >
//                             <ReactPaginate
//                                 style={{ padding: "5px", margin: "0px", border: "none" }}
//                                 // previousLabel={""}
//                                 // nextLabel={""}
//                                 pageCount={pageCount}
//                                 onPageChange={changePage}
//                                 containerClassName={"pagination"}
//                                 // previousLinkClassName={"previousBttn"}
//                                 // nextLinkClassName={"nextBttn"}
//                                 disabledClassName={"disabled"}
//                                 activeClassName={"active"}
//                                 total={lists.length}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AllCommission


import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card,InputGroup } from "react-bootstrap";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const columns = [
    {
        accessor: 'taderId',
        Header: 'Trader Id'
    },
    {
        accessor: 'traderProfile',
        Header: 'Trader Profile'
    },
    {
        accessor: 'bussinessName',
        Header: 'Bussiness Name'
    },
    {
        accessor: 'commissionType',
        Header: 'Commission Type'
    },
    {
        accessor: 'email',
        Header: 'Email ID',
        Cell: rowData => {
            const { email } = rowData.row.original
            return (
                <a href={'mailto:' + email}>
                    {email}
                </a>
            )
        }
    },
    {
        accessor: 'firstCommission',
        Header: 'First Commission'
    },
    {
        accessor: 'secondCommission',
        Header: 'Second Commission'
    },
    {
        accessor: 'createdDate',
        Header: 'Created Date        '
    },
    {
        accessor: 'modifiedDate',
        Header: 'Modified Date'
    },
    {
        accessor: 'action',
        Header: 'Action'
    }
];

const data = [
    {
        taderId: '643456',
        traderProfile: 'Peter Leverkus ',
        bussinessName: 'Worktops',
        commissionType: '10%',
        email: 'petergms@gmail.com',
        firstCommission: '10%',
        secondCommission: '20',
        createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        taderId: '643456',
        traderProfile: 'Peter Leverkus ',
        bussinessName: 'Worktops',
        commissionType: '10%',
        email: 'petergms@gmail.com',
        firstCommission: '10%',
        secondCommission: '20',
        createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        taderId: '643456',
        traderProfile: 'Peter Leverkus ',
        bussinessName: 'Worktops',
        commissionType: '10%',
        email: 'petergms@gmail.com',
        firstCommission: '10%',
        secondCommission: '20',
        createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
];

const AllFreelancerCommission = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h4 className="fs-0 mb-0 mt-2 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Trader Commissions'
                                :
                                ''
                        }
                    </h4>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        {/* <AdvanceTableSearchBox table /> */}
                    </Col>
                </Row>
                <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                    {Object.keys(selectedRowIds).length > 0 ? (
                        <div className="d-flex">
                            <Form.Select size="sm" aria-label="Bulk actions">
                                <option>Bulk Actions</option>
                                <option value="refund">Refund</option>
                                <option value="delete">Delete</option>
                                <option value="archive">Archive</option>
                            </Form.Select>
                            <Button
                                type="button"
                                variant="falcon-default"
                                size="sm"
                                className="ms-2"
                            >
                                Apply
                            </Button>
                        </div>
                    ) : (
                        <div id="orders-actions">
                            <Button variant="falcon-default"
                                size="sm" className="fs--1"><Icon icon="entypo:export" width="18" height="18" className="" /><span className="d-none ms-2 d-lg-inline">Export</span>
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h2>All Trader Commission<span className="ms-1 fs--1 badge bg-secondary">#100</span></h2>
                            <p className="mt-2">Here You Can See All Trader Commission</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-3">
                                <div className="col-md-6 d-flex justify-content-start">
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control size="sm" placeholder="Search.." type="search" />
                                            <Button variant="secondary" size="sm"><Icon icon="mdi:search" color="white" width="20" height="20" /></Button>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 d-flex  justify-content-end">
                                    <Button as={Link} to="/Tradercommission" variant="success">Add Commission to Trader</Button>
                                </div>
                            </div>
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
                                        className: 'mb-0 overflow-hidden'
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
                            </AdvanceTableWrapper >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AllFreelancerCommission
