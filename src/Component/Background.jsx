import React, {useRef} from "react";
import Note from './Note'

function Background() {
  const ref = useRef();
  const data = [  // {icon,title,text,bottom,notecolor,day,stars}
    {
      icon:true,
      title:"Today's Work",
      text:"- Get up",
      bottom:true,
      notecolor:"lightpink",
      day:"Tuesday",
      stars:1,
    },
    {
      icon:false,
      title:"Habbit",
      text:"- Take brush",
      bottom:false,
      notecolor:"pink",
      day:"Wednesday",
      stars:2,
    },
    {
      icon:true,
      title:"Work",
      text:"- Take bath",
      bottom:true,
      notecolor:"darkpink",
      day:"Thursday",
      stars:3,
    },
    {
      icon:false,
      title:"Exercise",
      text:"- Get ready",
      bottom:true,
      notecolor:"pink",
      day:"Friday",
      stars:4,
    },
  ];
 
  return (
    <>
      <div ref = {ref} className="bg">
      <h1 className="bgtext">Todo</h1>
      <div className="notebox">
        {data.map((item,index) => ( <Note data={item} reference={ref} />))} </div>
    </div>
    </>
  );
}

export default Background;
