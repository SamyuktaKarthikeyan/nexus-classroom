import  { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Content from './Content'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const DashBoard = () => {
  const navigate =useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const {userRoles, tokenExpiration, jwtToken}=auth;
  useEffect(()=>{
    if(userRoles!=="ADMIN" || jwtToken===null || Date.now() > tokenExpiration){
      navigate("/nexus");
    }
  })
  
  const [activeLink, setActiveLink] = useState("link1");

  return (
    <div className='flex h-full bg-gradient-to-b  from-slate-950  to-indigo-950'>
      <SideBar setActiveLink={setActiveLink} className="fixed"/>
      <Content activeLink={activeLink} />
    </div>
  )
}

export default DashBoard