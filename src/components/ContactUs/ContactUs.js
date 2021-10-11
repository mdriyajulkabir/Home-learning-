import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import('./ContactUs.css')

const ContactUs = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <h2>Contact Form</h2>
            <div>
                <div className="row container form-container">
                    <div className="col-4 text-start form-first p-5">
                        <h5>Let's get in touch</h5>
                        <p>We are open for any suggestion or just to have a chat</p>
                        <div className='d-flex'>
                            <i class="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
                            <p>Address: 198 West 21th Street, suite 721 New York NY 10016</p>
                        </div>
                        <div className='d-flex'>
                            <i class="fas fa-phone"></i> &nbsp;&nbsp;
                            <p>
                                Phone: +1235 2355 98
                            </p>
                        </div>
                        <div className='d-flex'>
                            <i class="fas fa-paper-plane"></i>  &nbsp; &nbsp;
                            <p>
                                Email: info@yoursite.com
                            </p>
                        </div>
                        <div className='d-flex'>
                            <i class="fas fa-globe-asia"></i> &nbsp;&nbsp;
                            <p>
                                wevsite yoursite.com
                            </p>
                        </div>

                    </div>
                    <div className='col-6 ps-5'>
                        <div className="row">
                            <div className='col-6 text-start'>
                                <h2>Get In Touch</h2> <br />
                                <span>Full Name</span> <br /> <br />
                                <input type="text" placeholder='Name' /> <br /> <br />
                                <span>Subject</span> <br /> <br />
                                <input type="text" placeholder='Subject' /> <br /> <br /> <br /> <br /> <br /> <br />
                                <button className='ms-5 px-5 py-2 bg-success'>Massage</button>
                            </div>
                            <div className='col-6'>
                                <br /> <br /> <br />
                                <span>Email Address</span> <br /> <br />
                                <input type="email" name="" id="" placeholder='Your Email' /> <br /> <br />
                                <span>Massage</span> <br /> <br />
                                <input type="text" placeholder='Massage' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;