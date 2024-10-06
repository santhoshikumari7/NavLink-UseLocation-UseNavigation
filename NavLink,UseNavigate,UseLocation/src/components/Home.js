import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom';

function Home() {

  let locObj = useLocation(); 
  return (
    <div>
        <TopNavigation/>
     <h2>Home</h2>
     <h3>{locObj && locObj.state && locObj.state.msg ? locObj.state.msg:"No data passed to display here"}</h3>
    </div>
  );
}

export default Home
