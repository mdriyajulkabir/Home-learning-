import React from 'react';
import BannerImg from '../../images/banner.png';
import ('./Banner.css')
const Banner = () => {
    return (
        <div className='container row'>
            <div className="col-md-6 d-flex align-items-center">
                <div className='ms-5 text-start'>
                <h1>
                    Enroll Our Courses <br />
                    Feel Like Bring Tutoring <br />
                    Right Your Home
                </h1>
                <p>
                Whether you’re an individual or scheduling training for your organization, we understand the challenges of fitting coursework into a busy schedule, so we offer several convenient delivery options including self-paced, instructor-led, blended learning, and private team training.
                </p>
                <button className='register-btn'>Register Now </button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;