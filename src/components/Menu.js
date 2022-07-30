import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';


const Menu = () => {

    

    return (
        <div >
            <ListGroup style={{background:"white",position:"fixed",height:"100vh", width:"380px", top:"60px"}}>

                <h3 className='mt-5 text-center' style={{ position: "relative", top: "20px" }}>Sidebar</h3>

                <Link className='list-group-item list-group-item-action py-3 mt-5' tag="a" to="/" action id='home' >Home</Link>

                <Link className='list-group-item list-group-item-action py-3' tag="a" to="/add-course" action id='newCourse'>Add-courses</Link>

                <Link className='list-group-item list-group-item-action py-3' tag="a" to="/all-course" action id='allCourses'>All-courses</Link>

                <Link className='list-group-item list-group-item-action py-3' tag="a" to="#!" action id='about'>About</Link>

            </ListGroup>
        </div>
    );

}
export default Menu;