import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function Home() {
  
  return (
    <div>
     
      {/* <div className='container'>
      <div className='d-flex flex-column align-items-center '>
       
        
          <h2 className='fw-bold'>
            Hello, I am Shashank Wankhede
          </h2>
          <p>I am a React Native Developer</p>
         <p className='fw-bold text-dark mt-5 fs-2'>Shashank Wankhede</p>
          <p className='fw-bold text-secondary  fs-5'>React Native Developer</p>
          <span className='fw-bold text-secondary   fs-7'>
            <MdOutlineShareLocation size={30}/>
           
            </span>
            <span className='fw-bold text-secondary mx-1  fs-7'>
            Mumbai,India
           
            </span>
             
 


          
    
        </div> 
        </div> */}

        <div className='hero-container'>
          <div className='row mx-2'>
            <div className='col-6 '>
            <h1>Hello</h1>
          <h2>I am Shashank </h2>
          <h3>React Native Developer</h3>
          <a href='#about' className='btn btn-primary'>know more
          <AiOutlineArrowRight/>
          </a>
            </div>
            <div className='col-6'>
            <img
        className='avatar'
        src='https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
        />
            </div>
          </div>
          
         
        
        </div>
        <div className='row mt-5 mx-5' id='about' >
            <div className='col-lg-8 col-md-8 col-sm-12'>
            <div className='container p-lg-5 p-0'>

          <h3>About me</h3>
          
          <p className='text-secondary'>
            Hello,I am Shashank Wankhede,from Mumbai,India i am React native developer;
            I'm very passionate about technology and its use cases in the real world.
          I describe myself as fast learner and problem solver</p>
          <p className='text-secondary'>
            </p>
            </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60'
              className='rounded-circle'
              height={300}
              width={300}
              />
            </div>
            </div>
            
          </div>
 
  )
}
