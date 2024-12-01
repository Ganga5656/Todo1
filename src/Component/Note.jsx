import React from 'react'
import { CiBoxList } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion"

function Note({ data, reference}) {
  const stars = [];
  const count = data.stars;
  for (let i = 0; i < count; i++) {
    stars.push(<FaRegStar key={i} />);

  }
  return (
    <motion.div drag dragConstraints={reference} className="mainnote">
      <h2 className="icon">
        {data.icon && <CiBoxList />} </h2>
      <h4 className="title">{data.title}</h4>
      <p className="text"> {data.text} </p>
      {data.bottom && (
        <div className="footer" style={{ backgroundColor: data.notecolor }}>
          <h4> {data.day} </h4>
          <h4> {stars} </h4>
        </div>
      )}
    </motion.div>
  );
}

export default Note;
