import "./App.css";
import { useEffect, useState } from "react";
import Data from './Data/Data'
import DashboardRoutes from "./DashboardRoutes";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
/**
 * student Namme
 * @type {Number}
 */
const abc = "test"

function App() {
  
  // user activity fetch
  // useEffect(()=>{

  //   axios.get('https://62d5fd44d4406e5235635206.mockapi.io/useractivity')
  //   .then (Response => {
  //    const data = Response.data;
  //    newdata = data.filter((item) => item.userId  === 12);
  //   setdata(newdata);
  //      })

  // },[])

  // user info fetch
  // useEffect(() => {
 
  //     axios
  //       .get("https://run.mocky.io/v3/e332015e-6aca-4cc9-a6e7-389f713934b7")
  //       .then((Response) => {
  //         const data = Response.data;
  //         newdata = data.filter((item) => item.id === 12);
  //         setUserInfo(newdata);
  //         setDataIsCharged(true)
  //         });
  
  // }, [DataIsCharged]);

  return (
    <div className="App">
   <DashboardRoutes> </DashboardRoutes>
     
   
{/* 
      <Barchart info={datas}> </Barchart> 
     <Userinfo UserInfoProps={userInfo}> </Userinfo> 
       <RadarIntenstite> </RadarIntenstite>  

<SessionEvolution />  */}

      {/* <Objectifs></Objectifs> */}
      </div>
  
  );
}

export default App;
