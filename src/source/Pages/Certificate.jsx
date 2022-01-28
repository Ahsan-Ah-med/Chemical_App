import React from 'react';
// import MainContant from '../component/MainContant';
import cert from '../images/certificate.jpg';
import qa from '../images/qa.png';
import Header from '../component/header';
import Navbar from '../component/Navbar';
import './Page.css';


const Certificate = () => {
    return (
        <div>
            {/* <MainContant /> */}
            <Header />
            <Navbar />
            <div className="certDiv">
                <img src={cert} className="cert" />
            </div>
            <div className="Cdiv">
                <h1 className="Chead">Certificate.</h1>
                <div className="imgdiv">
                    <img src={qa} className="qa" />
                    <p>We are ISO <span>9001:2008</span> certified for its quality management. The achievement is one we are particularly proud of as it demonstrates our commitment to providing the highest quality products and services to our clients.
                    </p>
                </div>

            </div>
        </div>
    )
};
export default Certificate;