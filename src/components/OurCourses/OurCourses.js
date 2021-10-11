import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import ('./OurCourses.css')

const OurCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./output2.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    console.log(courses);
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="row row-cols-1 row-cols-md-3 g-5 ps-5 pe-5 mt-2 m-2">
                {
                    courses.map(course=> 
                    
                        
                        <div className="col" key={course.id}>
                          <div className="card h-100">
                            <img src={course.url} className='card-img-top' alt="" />
                            <div className="card-body">
                              <h5 className="card-title">Course Name: {course.courseName}</h5>
                              <p>by {course.tutor}</p>
                              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <footer className='mb-3'>
                            <div className=' d-flex justify-content-between mx-4'>
                                <h3><i class="fas fa-user-tie"></i> {course.currentStudent}</h3>
                                <h3><i class="fas fa-cart-plus"></i> {course.price}</h3>
                              </div>
                              <button className='enroll-btn'>Enroll Now &nbsp;<i class="fas fa-hand-point-up"></i></button>
                            </footer>
                          </div>
                          
                        </div>
                        
                    
                  
                        )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurCourses;