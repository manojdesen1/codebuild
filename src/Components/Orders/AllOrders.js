import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
import { getAllData } from "../../Services/ProxyService";
import ReactPaginate from 'react-paginate';

function AllOrders() {

    const [orders, setorders] = useState([]);
    const ordersdata = async () => {
        const response = await getAllData('orders/all');
        setorders(response.data.orders);
    }
    useEffect(() => {
        ordersdata();
    }, [])

    const [listPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = orders.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(orders.length / listPerPage);
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
                <div className="page-bg">
                    <div className="product-adding-div">
                        <div>
                            <h4 className="ai-seller-title" >All Orders <span id="badge-1" class="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the All Orders on your store</p>
                        </div>

                        <div className="row">
                            <div class="dropdown col-12">
                                <button id="export-details" class="btn dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Export Details
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">Export From Date : <input type="date" /></li>
                                    <li class="dropdown-item">Export -To- Date :- <input type="date" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="bulk-actions">Bulk Action :{' '}
                        <select className="select-opt">
                            <option>Select Options</option>
                        </select>
                    </p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="text" id="all-order-search" placeholder="Search" />
                        </div>
                        <div>
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
                        </div>
                    </div>
                    <div className="all-jobs-div">
                        <table className="allproducts-table">
                            <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                <td id="td">Order ID <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Store Order ID<i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Seller Name <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Payment Mode<i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Payment Status<i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Tracking ID<i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Order Status <i class="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td" className="rounded-end">Action</td>
                            </tr>
                            {lists.map((data, key) => (
                                <tr key={key}>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">{data.order_id}</td>
                                    <td id="td">{data.store_order_id}</td>
                                    <td id="td">{data.seller}</td>
                                    <td id="td">{data.payment_mode}</td>
                                    <td id="td"><span className="pro-status-processing">{data.payment_stats}</span></td>
                                    <td id="td">{data.tracking_id}</td>
                                    <td id="td"><span className="pro-status-open">{data.order_status}</span></td>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllOrders