import React from 'react';
import { Col, Row } from 'reactstrap';

import './App.css';
import AddCourse from './components/AddCourse';
// import AllCourses from './components/AllCourses';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Menu from './components/Menu';
import AllCourses from './components/AllCourses';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (


    <div id='main' className='' style={{ background: "#e2e2e2",height:"98vh" }}>
      
      <h2 style={{ background: "blue", padding: 20 ,position:'fixed',width:"100%", zIndex:"200"}} className=" text-capatalise fst-italic text-left text-light">Student Courses</h2>
      <Router>
        <ToastContainer
        pauseOnHover={false}
        autoClose={1000} />
        <Row>
          <Col md="3">
            {/* <Container className='text-center'> */}
              <Menu />
            {/* </Container> */}
          </Col>
          <Col md="9" style={{background:"#e2e2e2"}}>
            <Routes>

              <Route path='/' element={<Home />} exact />

              <Route path='add-course' element={<AddCourse />} exact />

              <Route path='all-course' element={<AllCourses />} exact />


            </Routes>
          </Col>
        </Row>
      </Router>

    </div>


  );
}

export default App;
