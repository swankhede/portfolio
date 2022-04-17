import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'


export default function NavItem(props) {
    const {icon,linkTo,className,label}=props
    const param =useLocation()
    console.log("param",param.pathname);

    return (
        <Link className={className} to={linkTo} >
        
           <span className='nav-icons'>{icon}</span>
           <span className='nav-label'>{label}</span> 
          
        
        </Link>
       
  
    )
}
