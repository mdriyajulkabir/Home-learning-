import React from 'react';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Plan from '../Plan/Plan';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Plan></Plan>
            <Course></Course>
            <Footer></Footer>
        </div>
    );
};

export default Home;