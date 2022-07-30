import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../Api/Url';
import { useNavigate } from 'react-router-dom';



const AddCourse = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setDataForUpdate();
        document.title = "Add Course || Student Courses"
        document.getElementById('newCourse').classList.add('active')
        return () => {
            document.getElementById('newCourse').classList.remove('active')
            
        }
        
    }, []);

    const [course, setCourse] = useState([])

    const AddCourse = (e) => {
        console.log(course);
        AddDataToDatabase(course)

        e.preventDefault();
        setCourse({ id: '', cource: '', description: '' });


    };


    const AddDataToDatabase = (data) => {
        // let data1 = JSON.parse(localStorage.getItem("updatingCourse"));

        // if(data1!=null){
        //     setCourse(data1)
        //     axios.put(`${baseUrl}/update`, data).then(
        //         (response) => {
        //             console.log(response);
    
        //             navigate('/all-course');
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     )
            
        // }
        axios.post(`${baseUrl}/add`, data).then(
            (response) => {
                console.log(response);

                navigate('/all-course');
                localStorage.removeItem('updatingCourse');
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const setDataForUpdate=()=>{
        let data1 = JSON.parse(localStorage.getItem("updatingCourse"));
        // console.log("data: ",JSON.parse(localStorage.getItem("updatingCourse")));
        console.log("course is: ", data1);
        if (data1!=null) {
            setCourse(data1)
            // AddDataToDatabase(data1)
        }else{
            setCourse({ id: '', cource: '', description: '' });
        }
    }
    return (


        <div style={{ position: "relative", top: "80px" }}>

            <Form className='m-5 text-right' onSubmit={AddCourse}>
                <h3 className='text-center text-light bg-primary p-2'>Add Courses</h3>
                <FormGroup>
                    <Label className='text-right' for='Id'>Course ID : </Label>
                    <Input required type='text' id='courseId' placeholder='Enter Your Course CourseId eg-01,02,03...'
                        value={course.id}
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label className='text-right' for='title'>Course Name : </Label>
                    <Input required type='text' id='title' placeholder='Enter Your Course title...'
                        value={course.cource}
                        onChange={(e) => {
                            setCourse({ ...course, cource: e.target.value })
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for='desc'>Description : </Label>
                    <Input required type='textarea' id='desc' rows='10' placeholder='Enter Your Course Description...'
                        value={course.description}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }} />
                </FormGroup>
                <Container className='text-center my-5'>
                    <Button type='submit' color='success'>Add Course</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color='primary'
                        onClick={(e) => {
                            setCourse({ id: '', cource: '', description: '' })
                        }}
                    >Reset All</Button>

                </Container>

            </Form>
        </div>


    );
}
export default AddCourse;