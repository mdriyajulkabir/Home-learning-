import React from 'react';
import ('./Footer.css')

const Footer = () => {
    return (
        <div className='row container my-5 mx-auto ps-5 pe-5 pt-5 text-white footer-container'>
            <div className='col-3'>
                <h2>Home Learning</h2>
                <h3><i class="fab fa-facebook"></i></h3>
                <h3><i class="fab fa-instagram-square"></i></h3>
                <h3><i class="fab fa-twitter"></i></h3>

            </div>
            <div className='col-3'>
                <h2>Support</h2>
                <p>Help</p>
                <p>Community</p>
                <p>Advisories</p>
                <p>Status</p>
                <p>Contact</p>
            </div>
            <div className='col-3'>
                <h2>Company</h2>
                <p>About</p>
                <p>Blog</p>
                <p>Press</p>
            </div>
            <div className='col-3'>
                <h2>Terms & Policies</h2>
                <p>Policies</p>
                <p>Terms of Use</p>
                <p>COde Of Conduct</p>
                <p>Privacy</p>
            </div>
        </div>
    );
};

export default Footer;