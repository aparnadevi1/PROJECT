import React, { useState } from "react";
const Time = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (<div>
    <h1 style={{color:"#00d0ff",fontSize:'40px',fontWeight:'bold'}}>Time</h1>
    <h1 style={{color:"#00d0ff",fontSize:'40px',fontWeight:'bold'}}>{time}</h1></div>);
};

export default Time;
