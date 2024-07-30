import React from 'react'
import Aplication from './Aplication';
import Teacher from './Teacher';
import Student from './Student';
import Resources from './Resourses';
import End from './End';
import Programes from '../ALLPrograme/Programes';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from '../Navbar';



function AllHome() {
  return (
    <div>
        <Navbar/>
        <Aplication></Aplication>
        <Teacher></Teacher>
        <Student></Student>
        <Programes></Programes>
        <Resources></Resources>
        <End></End>
        <ScrollToTop
          smooth
          component="return to top" 
          style={{ background:"#34a853",width:"150px"}}/>
    </div>
  )
}

export default AllHome;