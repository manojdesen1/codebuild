import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
import { getAllData } from "../../Services/ProxyService";
import ReactPaginate from 'react-paginate'


function AllJob() {

    const [jobs, setjobs] = useState([])

    const Jobslist = async () => {
        const response = await getAllData('jobs/all');
        setjobs(response.data.jobs);
    }
    useEffect(() => {
        Jobslist()
    }, [])

    const [listPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = jobs.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(jobs.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="row">
            <div className="col-2">
                <AiMenu />
            </div>
            <div className="col-10">
                <div>
                    <AiHeader />
                </div>
                <div>
                    <div className="product-adding-div">
                        <div>
                            <p className="ai-sub-title">product/product list</p>
                            <h4 className="ai-seller-title" >All Jobs <span id="badge-1" class="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the current seller on your store</p>
                        </div>

                        <div className="row">
                            <div class="dropdown col-6">
                                <button id="more_action" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-plus"></i> Add Product By CSV</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <Link to="addjobs" role="button"><button className="add-seller">Post Job</button></Link>
                            </div>
                        </div>
                    </div>
                    <p className="bulk-actions">Bulk Action :{' '}
                        <select className="select-opt">
                            <option>Select Options</option>
                        </select>
                    </p>
                    <p className="show-list">Show:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        {' '}
                        List
                    </p>
                    <div className="all-jobs-div">
                        <table className="allproducts-table">
                            <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                <td id="td">Job ID <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Category <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Title <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Budget <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Job Status <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Exp Date <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Status <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td" className="rounded-end">Option</td>
                            </tr>
                            {lists.map((data, key) => (
                                <tr key={key}>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">{data._id}</td>
                                    <td id="td">{data.category}</td>
                                    <td id="td">{data.project_title}</td>
                                    <td id="td">{data.budget}</td>
                                    <td id="td"><span className="pro-status-processing">Processing</span></td>
                                    {/* <td id="td">10 April 2023</td> */}
                                    <td id="td">{data?.expire_date}</td>
                                    <td id="td"><span className="pro-status-approved">Approved</span></td>
                                    <td id="td">
                                        <div class="dropdown">
                                            <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </table>

                        {/* <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i class="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i class="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                        </div> */}
                        
                            <div className="mt-5" >
                                <ReactPaginate
                                    style={{ padding: "5px", margin: "0px", border: "none" }}
                                    // previousLabel={""}
                                    // nextLabel={""}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"pagination"}
                                    // previousLinkClassName={"previousBttn"}
                                    // nextLinkClassName={"nextBttn"}
                                    disabledClassName={"disabled"}
                                    activeClassName={"active"}
                                    total={lists.length}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllJob