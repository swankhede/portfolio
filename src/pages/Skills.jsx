import React from 'react'
import { skillsList } from '../utils/skillsList'

function Skills() {

    
  return (
    <div className='project-container'>
    <h1 className='text-primary fw-bold'>Skills</h1>
    <div className='container project-hero' >
            {
                skillsList.map(tech=>
                    <div className='skill-container d-lg-inline-block w-sm-100'>
                        <p className='text-primary fw-bold ' key={tech.id}>{tech.skill}</p>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width:`${(tech.rating*10)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        {tech.rating*10}%
                        </div>
                        </div>
                        </div>)
            }
                </div>
            </div>
     
  )
}

export default Skills