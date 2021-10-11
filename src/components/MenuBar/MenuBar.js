import React from 'react';
import { Link } from 'react-router-dom';
import('./MenuBar.css')

const MenuBar = () => {
    return (
        <div className="MenuBar-container pt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-2">
                        <div className='home'>
                            <i class="fas fa-home"></i>
                            <h3>Home Learning</h3>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to={`/home`}>
                                    <li className="items">Home</li>
                                </Link>

                                <Link to={`/ourcourses`}>
                                    <li className="items">Courses</li>
                                </Link>

                                <Link to={`/aboutus`}>
                                    <li className="items">About us</li>
                                </Link>

                                <Link to={`/contactus`}>
                                    <li className="items">Contact us</li>
                                </Link>

                                <Link to={`/register`}>
                                    <li className="items">Register</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;