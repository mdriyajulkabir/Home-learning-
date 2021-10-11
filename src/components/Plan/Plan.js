import React from 'react';
import plan1 from '../../images/plan-1.jpg';
import plan2 from '../../images/plan-2.jpg';
import plan3 from '../../images/plan-3.jpg';


const Plan = () => {
    return (
        <div className='container cart-container mt-5 pt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        {/* <img src={plan1} className="card-img-top" alt="..."> */}
                        <img src={plan1} className="card-img-top" alt="" />
                        <div class ="card-body">
                        <h5 class ="card-title">Success Needs a Plan</h5>
                        <p class ="card-text">Success in life is whatever you define it to be. Maybe for you, you want to determine how to be successful to achieve financial freedom or a flexible work schedule.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        {/* <img src={plan2} className="card-img-top" alt=""> */}
                        <img src={plan2} className="card-img-top" alt="" />
                        <div class ="card-body">
                        <h5 class ="card-title">Students Come First</h5>
                        <p class ="card-text">For those looking to live independently, look no further than our studios. Each studio benefits from having a private en-suite, kitchen, study area and a small double bed.  All providing the perfect environment to relax and study.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <img src={plan3} className="card-img-top" alt="" />
                        <div class ="card-body">
                        <h5 class ="card-title">The Best Tutors</h5>
                        <p class ="card-text">We start by matching you to the best tutor based on your child’s needs and learning style. Lessons are one-to-one, using our fully interactive platform which is easy to use, safe, secure using the latest cybersecurity and privacy protections to safeguard young learners..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Plan;