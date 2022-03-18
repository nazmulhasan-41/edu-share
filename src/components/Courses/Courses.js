import React, { useState } from 'react';
import demoData from '../../demoData/jsondata.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    //setCourses(demoData);
    // console.log(demoData);
    const [cart,setCart]=useState([]);

    const cartHandler=(course)=>{
        let newCart=[...cart,course];
        setCart(newCart);
        console.log(cart.length);

    }
   
    return (
        <div className='fullBody'>

            <div className="container crscont">
                <div className="row justify-content-around">

                    {
                        demoData.map(x =>

                            <Course  cartHandler={cartHandler} key={x._id} x={x}></Course>
                        )
                    }

                </div>
            </div>

            <div className="container cartcont">

                <Cart cart={cart}></Cart>
                                

            </div>


        </div>
    );
};

export default Courses;