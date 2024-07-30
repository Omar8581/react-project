import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useCart } from "react-use-cart";

function Navbar() {
  const { totalItems } = useCart()
  return (
    <div>
         <nav>  
        <div className="logo">
            <img src="img/logo.png.webp" alt=""/>
        </div>
      <div className="NavLinks">
        <ul className="list-unstyled">
            <li><NavLink to="/home">home</NavLink> </li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/programs">programs </NavLink> </li>
            {/* <li><NavLink to="/product">products</NavLink></li> */}
            <li><NavLink to="/shopping">shopping</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/cart"> <i class="fa-solid fa-cart-arrow-down" style={{position:'relative',left:'300px'}}></i><span style={{ position: "relative", bottom: "10px",left:'300px' }}>{totalItems}</span></NavLink></li>
            <li> <Link 
      activeClass="active" 
      to="stud" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      style={{position:"relative",right:"60px",cursor:"pointer"}}
    >
      smooth
    </Link>
</li>
           
           
        </ul>
        {/* <div className="p fs-5">
             <p><span>call us: </span>0 (78) 675 3674 | <i className="fa-brands fb fa-square-facebook"></i> <i className="fa-brands tw fa-square-twitter"></i> <i className="fa-brands in fa-NavLinkedin"></i> <i className="fa-brands tube fa-youtube"></i> <i className="fa-solid envolve fa-envelope"></i> </p>
             
        </div> */}
      </div>
    </nav> 

    </div>
  )
}

export default Navbar;