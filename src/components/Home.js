import React, { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        document.title="Home || Student Courses"
        document.getElementById("home").classList.add('active')
        return()=>{
            document.getElementById('home').classList.remove('active')
        }
    }, []);

    return (

        <div className='text-center m-5'  >

            <h2 className='text-light bg-primary fst-italic' style={{ position: "relative", top: "60px", left: "0px",fontSize:"xxx-large" }} >Welcome to Student Courses</h2>

            <img src="https://picsum.photos/300/200"
                alt='abc'
                width="100%" 
                height="500px"
                style={{ position:"relative",top:"80px",background:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"}}/>



        </div>

    );

}
export default Home;