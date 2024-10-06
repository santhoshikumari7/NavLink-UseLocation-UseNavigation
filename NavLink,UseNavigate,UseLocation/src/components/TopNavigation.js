import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation () {
  return (
    <div>
      <nav>
        <NavLink 
        style={(obj) => {
           if(obj.isActive === true){
            return{backgroundColor:"darkorange",
                color:"white"};
           

            }
           
        }} to="/home"
        >
          Home</NavLink>
        <NavLink style={(obj) => {
           if(obj.isActive === true){
             return{backgroundColor: "darkorange",
                color:"white"};
             } 
             }} to="/tasks">Tasks</NavLink>
        <NavLink style={(obj) => {
            if(obj.isActive === true){
             return{backgroundColor: "darkorange",
                color:"white"};
             } 
        }}to="/leaves"
        >
          Leaves</NavLink>
        <NavLink 
        style={(obj) => {
          if(obj.isActive === true){
           return{backgroundColor: "darkorange",
            color:"white"};
          }

        }}
         to="/editProfile"
         >
          Edit Profile</NavLink>
        <NavLink to="/">Signout</NavLink>
      </nav>
    </div>
  );
}

export default TopNavigation
