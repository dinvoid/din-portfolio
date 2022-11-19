import React from 'react'
import {AiFillFacebook} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {GrPaypal} from "react-icons/gr";

const HeaderSocials = () => {
    return ( 
        <div className = "header_socials">
        <a href="https://www.facebook.com/eldin.betalmos.aydol"><AiFillFacebook/></a>
        <a href="https://www.linkedin.com/in/eldin-betalmos-ab048a240"><BsLinkedin/></a>
        <a href="https://www.paypal.me/eldin143"><GrPaypal/></a>
        </div>
    )
}


export default HeaderSocials