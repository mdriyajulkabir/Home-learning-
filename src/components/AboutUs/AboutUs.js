import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import tutor1 from '../../images/tutor1.jpg';
import tutor2 from '../../images/tutor2.jpg';
import tutor3 from '../../images/tutor3.jpg';
import tutor4 from '../../images/tutor4.jpg';
import tutor5 from '../../images/tutor5.jpg';
import tutor6 from '../../images/tutor6.jpg';
import tutor7 from '../../images/tutor7.jpg';
import tutor8 from '../../images/tutor8.jpg';
import tutor9 from '../../images/tutor9.jpg';
import('./About.css')
const AboutUs = () => {
    return (
        <div className='about-container'>
            <MenuBar></MenuBar>

            <div className="tutor-container mt-4">
                <div className='mb-5'>
                    <h2>Our Top Tutors</h2>
                    <p>Our Tutors hardly try their best. They are doning well. </p>
                </div>
                <div className="row gap-3 ">
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor1} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Preston Marshall</h3>
                            <p>Assistant Professor</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor4} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Keith Taylor</h3>
                            <p>Assistant Professor</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor5} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Jennie King</h3>
                            <p>Assistant Professor</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor2} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Edward Bowman</h3>
                            <p>Teaching Assistant</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor6} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Jennifer Powell</h3>
                            <p>Teaching Assistant</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor7} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Dave Robbins</h3>
                            <p>Teaching Assistant</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor3} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>David Sanders</h3>
                            <p>Associate Professor</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor8} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Danis Wood</h3>
                            <p>Associate Professor</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center single-tutor">
                        <div>
                            <img className='tutor-img' src={tutor9} alt="" />
                        </div>
                        <div className='ms-2'>
                            <h3>Kathryn Webb</h3>
                            <p>Associate Professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;