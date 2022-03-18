import React from 'react';
import './Course.css';
import { faPerson,faMoneyBill,faCalendarCheck, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Course = (props) => {
    let x = props.x;
    let cartHandler=props.cartHandler;
    return (

        <div key={x._id} className="card" style={{ width: '22rem' }}>
            <img className="card-img-top" src={x.picture} alt="imageofcourse" />
            <div className="card-body">
                <h5 className="card-title">{x.coursename}</h5>
                <p className="card-text">{(x.about).slice(0, 35)}</p>

                {/* price area */}
                <div className="row justify-content-around">
                    <div className="col firstcol">

                        <p><FontAwesomeIcon icon={faMoneyBill} /> {x.cost}</p>
                        <p><FontAwesomeIcon icon={faPerson} /> {x.teacher}</p>

                    </div>
                    <div className="col secondcol">


                        <p><FontAwesomeIcon icon={faCalendarCheck} />{x.registered}</p>
                        <p><FontAwesomeIcon icon={faBuilding} /> {x.university}</p>

                    </div>
                </div>

                <div className='enrollButton'>
                    <button 
                    className="btn btn-primary"
                    onClick={()=>cartHandler(x)}
                    
                    >Enroll Now</button>
                </div>
                
            </div>
        </div>



    );
};

export default Course;