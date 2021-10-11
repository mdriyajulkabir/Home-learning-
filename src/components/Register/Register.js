import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import ('./Register.css')

const Register = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            {/* <h1>Register Here</h1> */}
            <h1>User Registration</h1> <br />
            <div>

            <input className='input-field' type="text" placeholder='First Name' /> <br /> <br />
            <input className='input-field' type="text" placeholder='Last Name' /> <br /> <br />
            <input type="email" name="" id=""  placeholder='Enter Your Email'/> <br /> <br />
            <input type="password" name="" id="" placeholder='Enter your password' /> <br /> <br />
            <input type="password" name="" id="" placeholder='Retype your password' /> <br /> <br />
            <button className='register-btn'>Register</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;