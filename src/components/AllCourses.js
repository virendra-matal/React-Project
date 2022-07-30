import React, { useEffect, useState } from 'react';
// import { CardGroup } from 'reactstrap';
import Course from './Course';
import axios from 'axios';
import baseUrl from '../Api/Url';
import { toast } from 'react-toastify';
import {  Row } from 'reactstrap';

const AllCourses = () => {

    const [courses, setCourse] = useState([]);

    useEffect(() => {
        document.title = "All Courses || Student Courses"
        GetAllStudentCourses();
        document.getElementById('main').style.background=null;
        document.getElementById('allCourses').classList.add('active')
        return () => {
            document.getElementById('allCourses').classList.remove('active')
            document.getElementById('main').style.background='#e2e2e2';
        }
    }, []);

    const GetAllStudentCourses = () => {
        axios.get(`${baseUrl}/all`)
            .then(
                (response) => {
                    console.log("data : ", response.data);
                    setCourse(response.data)
                    toast.success('Courses Loaded Successfully !!!')
                },
                (error) => {
                    console.log(error);
                    toast.error('Failed to Load Courses !!!')
                }
            )
    };

    console.log("Course", courses);

    const updateCourses=(id)=>{
        setCourse(courses.filter((c)=> c.id!==id))
    }

    return (
        <div className='ms-5 text-center' >
            <h2 className='mt-5 text-center text-light bg-primary p-2' style={{position:"relative" , top:"50px"}}>All Courses</h2>

           <div className='ms-5 '>
           <div className='ms-5'style={{position:"relative",top:"60px"}} >
            
            
            <Row className='row-cols-1 row-cols-md-3 g-6 ms-5 '>
                
                

                    {
                        courses.length > 0 ?
                            courses.map((item) => <Course course={item} update={updateCourses}/>
                            )
                            : 'No Courses available.'

                    }
               
            </Row>
            

           </div>
           </div>

        </div>

    );
}

export default AllCourses;