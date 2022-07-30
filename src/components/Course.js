
import React from 'react';
import { Button, Card, CardBody,  CardImg, CardText, CardTitle } from 'reactstrap';
import axios from 'axios';
import baseUrl from '../Api/Url';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Course = ({ course , update}) => {

    const navigate=useNavigate()

    const deletecourse=(id)=>{
        axios.delete(`${baseUrl}/deleteCource/${id}`).then(
            (response)=>{
                toast.success('Course deleted successfully...!!!',{
                    position: "top-right",
                        autoClose: "1000",
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                })
                update(id);
            },
            (error)=>{
                toast.error('Course is not Deleted!! , Server Problem...!!!',{
                    position: "top-right",
                        autoClose: "1000",
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                })
            }
        )

        };
        
        const updateRecord=(course)=>{
            console.log('hello: ',course);
            localStorage.setItem("updatingCourse",JSON.stringify(course));
            navigate('/add-course')
        }
        
    return (
        // <div>
            
                <Card className='m-4 p-1 bg-primary'>
                <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/300/200"
                            top
                            width="100%"
                            // height="40%"
                            //className={course.css}
                        />
                    <CardBody className='bg-dark text-light'>
                        
                        <CardTitle className='fw-bold fs-2'>{course.cource}</CardTitle>
                        <CardText className="font-weight-bold">{course.description}</CardText>
                        <Button color="danger" onClick={()=>{
                            deletecourse(course.id)
                        }}>Delete</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button color="primary" onClick={()=>{
                            updateRecord(course)
                        }}>Update</Button>

                    </CardBody>

                </Card>
                
        // </div>
    );
}
export default Course;

