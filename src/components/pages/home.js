import React from "react";
import "../css/home.css"
import Cost from "../assets/cost.png"
import DocImage from "../assets/document.png"
import Time from "../assets/time.png"
function HomePage() {
    return (
        <>
            <div id="top">
                <div className="homeStyle">
                    <h1 className="headline-text">
                        Build
                        <span style={
                            {color: "#0dcaf0"}
                        }> trust</span><br/>
                        into your
                        <span> orgnization</span>
                    </h1>
                    <p className="text-light" id="tagline-text">
                        Blockchain is a shared, immutable ledger that facilitates the process
                        <br></br>of recording transactions and tracking assets in a business network.

                    </p>
                    <div className="buttonStyle">
                        <a href="/login">
                            <button type="button" className="btn btn-danger text-white">SignIn with OTP</button>
                        </a>
                        <a href="/defaultlist">
                            <button type="button" className="btn btn-success text-white">Display List</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* ------------------------INFORMATION---------------------- */}
            <div className="container-fluid"
                style={
                    {paddingTop: "2rem"}
            }>
                <div className="row text-light">
                    <div className="col-lg-4 text-center">
                        <img src={Cost}
                            width="150"
                            alt="less cost"/>
                        <h4>Less Cost</h4>
                        <p className="para-light">
                            Eliminates intermediaries,
                            <span className="text-warning">
                                reduces fees. 😮</span>
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={Time}
                            width="150"
                            alt="fast process"/>
                        <h4>Fast Process</h4>
                        <p className="para-light">
                            Verfying takes just
                            <span className="text-warning">few Second 😳
                            </span>
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={DocImage}
                            width="150"
                            alt="secure"/>
                        <h4>Secure</h4>
                        <p className="para-light">
                            100% Secure operations With
                            <span className="text-warning">Blockchain Technology 🔒
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
