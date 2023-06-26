import React from "react";
import worktops from '../../User-Portal/Components/Projectimages/Electric.jpg'
import logo from "../../User-Portal/Components/Projectimages/MAI_white.png"
import landscape from "../../Images/Landscape.png"
function AiLoginPage() {
    return (
        <>
            <div class="row min-vh-100 bg-100">
                <div class="col-6 d-none d-lg-block position-relative">
                    <div class="bg-holder" style={{ backgroundImage: `url(${worktops})`, backgroundPosition: '50% 20%' }}></div>

                </div>
                <div class="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
                    <div class="row justify-content-center g-0">
                        <div class="col-lg-9 col-xl-8 col-xxl-6">
                            <div class="card">
                                <div style={{ background: '#003f6b' }} class="card-header text-center p-2">
                                    <a class="font-sans-serif fw-bolder fs-4 z-index-1 position-relative link-light light" >
                                        <img src={logo} width="135px" />
                                    </a>
                                </div>
                                <div class="card-body p-4">
                                    <div class="row flex-between-center">
                                        <div class="col-auto">
                                            <h3>Admin Login</h3>
                                        </div>
                                        {/* <div class="col-auto fs--1 text-600"><span class="mb-0 fw-semi-bold">New User?</span> <span><a href="../../../pages/authentication/split/register.html">Create account</a></span></div> */}
                                    </div>
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label" for="split-login-email">Email address</label>
                                            <input placeholder="Email Address" class="form-control" type="email" />
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" >Password</label>
                                            </div>
                                            <input class="form-control" placeholder="Password" type="password" />
                                        </div>
                                        <div class="row flex-between-center">
                                            <div class="col-auto">
                                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="split-checkbox" /><label class="form-check-label mb-0" for="split-checkbox">Remember me</label></div>
                                            </div>
                                            <div class="col-auto"><a class="fs--1" >Forgot Password?</a></div>
                                        </div>
                                        <div class="mb-3"><button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Log in</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AiLoginPage