import React, { useState } from 'react'
import { projectsList } from '../utils/projectsList'
function Projects() {
    
    const [end,setEnd]=useState(1)
    const [start,setStart]=useState(0)
    const handleScroll=()=>{
        console.log("callled",start,end);
        if(end<projectsList.length){
            setStart(start+1)
        
            setEnd(end+1)
        }else{
            setStart(0)
        
            setEnd(1)
        }
        
    }
  return (
    <div className='project-container' onWheel={handleScroll}>
        <h1 className='text-primary fw-bold'>Projects</h1>
        <div className='container project-hero' >
           {
               projectsList.slice(start,end).map(project=>
                <div className='row' key={project.id}>
                    <div className='col-sm-12 col-lg-4  col-md-4'>
                        <h2 className='text-dark fw-bold'>{project.Title}</h2>
                        <h5 className='text-secondary'>{project.Subtitle}</h5>
                        <p>
                            {project.Desciption}
                        </p>
                        {
                            project.technologies.map(tech=>
                                <img height={100} width={100} className='mx-1' src={tech.image} key={tech.id}/>
                            )
                        }
                    </div>
                    <div className='col-sm-12 col-lg-8 col-md-8'>
                       {
                           project.images.length>0?
                           project.images.map(img=>
                            <img src={img} className='img-thumbnail app-image' />):null
                       } 
                    </div>
                </div>
            )
           }
        </div>

    </div>
  )
}

export default Projects