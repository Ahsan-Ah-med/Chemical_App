import React, { useState } from 'react';
import './Navbar.css';
import './media.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import Home from '../Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact'
import Certificate from '../Pages/Certificate'
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [drop, setDrop] = useState(false)
  const [dropD, setDropD] = useState(false)
  const [dropF, setDropF] = useState(false)
  const [dropR, setDropR] = useState(false)
  const [dropDP, setDropDP] = useState(false)
  const [dropS, setDropS] = useState(false)
  

  return (
    <div>
      <div className={nav ? "topnav responsive" : "topnav"} id="myTopnav">
        <NavLink exact activeClassName="active" to="/" className="active">Home</NavLink>
        <NavLink exact activeClassName="active" to="/about">About Us</NavLink>
        <div className="dropdown">

          <button className="dropbtn" id="dropbtn" >Product
            {/* <i className="fa fa-caret-down"></i> */}
          </button>
          <div className="dropdown-content">
            <a href="#" style={{fontSize: "1.2rem"}}>All Product</a>
            <div className="dropdown">
              {/* TEXTILE CHEMICLA SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDrop(!drop)}>Textile Chemical
                <i className="fa fa-caret-down"></i>
                <div className={drop ? "dropdown-content d1" : "d1"}>
                  <a href="#">SODA ASH</a>
                  <a href="#">GLACIAL ACETIC ACID</a>
                  <a href="#">HYDROGEN PEROXIDE</a>
                  <a href="#">OXALIC ACID</a>
                  <a href="#">SODIUM HYDEOSULFITE</a>
                  <a href="#">FORMIC ACID</a>
                  <a href="#">SODIUM METABISULFATE</a>
                  <a href="#">SODIUM SULPHIDE FLAKES</a>
                </div>
              </button>
              <br />
              {/* DETERGEN CHEMICAL SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDropD(!dropD)}>DETERGENT CHEMICALS
                <i className="fa fa-caret-down"></i>
                <div className={dropD ? "dropdown-content d1" : "d1"}>
                  <a href="#">SODIUM DODECYL</a>
                  <a href="#">SODIUM LAURYL</a>
                  <a href="#">CAUSTIC LIQUID</a>
                  <a href="#">CAUSTIC SODA FLAKES</a>
                </div>
              </button>
              <br />
              {/* FOOD ADDITIVES SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDropF(!dropF)}>FOOD ADDITIVES
                <i className="fa fa-caret-down"></i>
                <div className={dropF ? "dropdown-content d1" : "d1"}>
                  <a href="#">MODIFIDE STARCH</a>
                  <a href="#">CORN STARCH</a>
                  <a href="#">SODIUM METABISULFATE</a>
                  <a href="#">SODIUM BICARBONATE</a>
                  <a href="#">CIRTRIC ACID ANHYDROUS</a>
                </div>
              </button>
              <br />
              {/* REACTIVE DYE ADDITIVES SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDropR(!dropR)}>REACTIVE DYE
                <i className="fa fa-caret-down"></i>
                <div className={dropR ? "dropdown-content d1" : "d1"}>
                  <a href="#">M TYPE REACTIVE DYES</a>
                  <a href="#">KN TYPE REACTIVE DYES</a>
                  <a href="#">ED TYPE REACTIVE DYES</a>
                  <a href="#">HE TYPE REACTIVE DYES</a>
                  <a href="#">E-XF TYPE REACTIVE DYES</a>
                  <a href="#">RGN TYPE REACTIVE DYES</a>
                  <a href="#">K TYPE REACTIVE DYES FOR PRINTING</a>
                </div>
              </button>
              <br />
              {/* DEPRESE DYE ADDITIVES SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDropDP(!dropDP)}>DEPRESE DYE
                <i className="fa fa-caret-down"></i>
                <div className={dropDP ? "dropdown-content d1" : "d1"}>
                  <a href="#">GENERAL SERIES</a>
                  <a href="#">MICRO FABRICS DYEING SERIES</a>
                  <a href="#">RAPID DYEING (HRD)SERIES</a>
                  <a href="#">HIGH WASHING FASTNESS(HXF)SERIES</a>
                  <a href="#">NN SERIES</a>
                  <a href="#">DYESTUFFS FOR ACETATE FIBERS</a>
                  <a href="#">DIRECT PRINTING SERIES</a>
                  <a href="#">HIGH-TEMPERATURN DARK PRIMARY COLORS</a>
                  <a href="#">GENERAL-PURPOSN SERIES</a>
                </div>
              </button>
              <br />
              {/* SULPHUR DYE ADDITIVES SECTION START */}
              <button className="dropbtn" id="subdown" onClick={() => setDropS(!dropS)}>SULPHUR DYE
                <i className="fa fa-caret-down"></i>
                <div className={dropS ? "dropdown-content d1" : "d1"}>
                  <a href="#">SULPHUR BLACK</a>
                  <a href="#">SULPHUR BRILLIANT</a>
                </div>
              </button>
              <a href="#" style={{fontSize: "1.2rem"}}>INDIGO DYE</a>
            </div>
          </div>
        </div>
        <div className="dropdown">

          <button className="dropbtn">Message
            {/* <i className="fa fa-caret-down"></i> */}
          </button>
          <div className="dropdown-content">
            <NavLink exact to="/Chairman" id="subdown">CHAIRMAN</NavLink>
            <a href="#" id="subdown">DIRECTOR</a>
          </div>
</div>
        <NavLink exact to="/Certificate" activeClassName="active">Certificate</NavLink>
        <NavLink exact to="/contact" activeClassName="active" >Contact</NavLink>
        
        <a to="javascript:void(0)" onClick={() => setNav(!nav)} className="icon"> <i className="fa fa-bars"></i></a>
        <div className="social">
          <div><FaFacebookSquare className="facebook" /></div>
          <div><FaInstagramSquare className="instagram" /></div>
          <div className="twitter"><FaTwitterSquare /></div>
        </div>


      </div>
    </div>
  )
}
export default Navbar;