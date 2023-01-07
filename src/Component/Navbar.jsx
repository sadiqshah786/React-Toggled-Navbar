import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const Navbar = () => {

  return (
   <div className="main_nav show-box">
    <ul>
        <li><HomeIcon/><span>Home</span></li>
        <li><Person2OutlinedIcon/><span>Profile</span></li>
        <li><BarChartOutlinedIcon/><span>Analytics</span></li>
        <li><LoginOutlinedIcon/><span>Logout</span></li>
        
    </ul>
   </div>
  )
}

export default Navbar