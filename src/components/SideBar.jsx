import React from 'react'
import { AiOutlineHome,AiOutlineProject } from 'react-icons/ai';
import{MdOutlineContacts} from'react-icons/md'
import{CgToolbox} from 'react-icons/cg'
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

function SideBar() {
  const icons=[
    {id:1,label:'Home',iconName:<AiOutlineHome/>,linkTo:'/'},
    {id:2,label:'Projects',iconName:<AiOutlineProject/>,linkTo:'/projects'},
    {id:3,label:'Skills',iconName:<CgToolbox/>,linkTo:'/skills'},
    {id:4,label:'Contact',iconName:<MdOutlineContacts/>,linkTo:'/contact'},
  ]
  const {pathname}=useLocation()
  return (
    <div className='sidebar-container'>
     
        <div className='navbar'>
            {
              icons.map((icon)=>
                <NavItem icon={icon.iconName} label={icon.label} linkTo={icon.linkTo} key={icon.id} className={pathname==icon.linkTo?'nav-text active':'nav-text'}/>
              )
            }

        </div>
    </div>
  )
}

export default SideBar