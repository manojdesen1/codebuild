import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
function AllOrders() {
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Card Payment</td>
                                <td id="td"><span className="pro-status-processing">Processing</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-open">Open</span></td>
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Cash on Delivery</td>
                                <td id="td"><span className="pro-status-approval_pending">Not Hired</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-accepted">Accepted</span></td>
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Klarna Payment</td>
                                <td id="td"><span className="pro-status-approved">Completed</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-approval_pending">Cancelled</span></td>
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Card Payment</td>
                                <td id="td"><span className="pro-status-approved">Completed</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-approved">Delivered</span></td>
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Card Payment</td>
                                <td id="td"><span className="pro-status-processing">Processing</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-processing">Fullfilled</span></td>
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
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">#MAI-1027</td>
                                <td id="td">Global Stone</td>
                                <td id="td">Card Payment</td>
                                <td id="td"><span className="pro-status-approved">Completed</span></td>
                                <td id="td">1234567890</td>
                                <td id="td"><span className="pro-status-approved">Delivered</span></td>
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
                        </table>

                        <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i class="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i class="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllOrders