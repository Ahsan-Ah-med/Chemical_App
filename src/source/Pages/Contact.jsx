import React from 'react';
import Header from '../component/header';
import Navbar from '../component/Navbar';
import pic from '../images/contact.jpg';
import './Page.css';
const Contact = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <img src={pic} className="pic" />
            <h1 className="Chead con">Contact us.</h1>
            <div className="cmain">
                <div className="j1">
                    <div className="jj1">
                        <p>PAKISTAN ADDRESS:</p>
                        <section>
                            <span>SUIT # C-I-43, Sector L-1, Surjani Industrial Area, Karachi – Pakistan.</span>
                            <p>PHONE # <span>+92 - 213–691 0085-87</span></p>
                            <p>CELL # <span> +92 - 321-8211330 - +92 - 333-2170827</span></p>
                            <p>FAX # <span>+ 92 213 691 0086</span></p>
                        </section>
                    </div>
                    <div>
                        <p>BANGLADESH ADDRESS:</p>
                        <span>Baridhara Dohs, Road #7, West House # 408/7, (4th Foor), Dhaka-1212, Bangladesh.</span>
                    </div>
                    <div>
                        <p>MARKETING</p>
                        <p>Domestic:</p>
                        <span>rizwan@chemcolorintl.com</span>
                        <p>Import:</p>
                        <span>import@chemcolorintl.com</span>
                        <p>Account:</p>
                        <span>accounts@chemcolorintl.com</span>
                        <p>Sales:</p>
                        <span>sales@chemcolorintl.com</span>
                        <p>Infomation:</p>
                        <span>info@chemcolorintl.com</span>

                    </div>
                </div>
                <div className="j2">
                    
                        <h2><a target="_blank" href="https://formsubmit.co/el/muvoma">Contact Via Mail</a></h2>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7233.387567154409!2d67.08956!3d24.976531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340cbf341da17%3A0xa781b1f2b38031b5!2sNorth%20Karachi%20Industrial%20Area%20Sector%2011%20G%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1628264447697!5m2!1sen!2s" style={{ width: "450px", height: "300px", marginTop: "15rem" }}></iframe>

                </div>
            </div>
        </div>
    )
};
export default Contact;