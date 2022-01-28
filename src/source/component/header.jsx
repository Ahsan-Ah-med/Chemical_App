import React from 'react';
import './main.css'
import './media.css'
import Logo from '../images/logo.png'
import QA from '../images/qa.png'
const Header = () => {
    return (
        <div>
            <div className="head">
                <div>
                    <div className="Hbox">
                        <div className="logo">
                            <img src={Logo} alt="" />
                            <img src={QA} alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Header;