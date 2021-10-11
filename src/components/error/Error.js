import React from 'react';
import error404 from '../../images/error.jpg'
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Error.css'

const Error = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <img className='error-img' src={error404} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Error;