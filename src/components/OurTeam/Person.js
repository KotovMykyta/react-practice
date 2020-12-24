import React from "react";

const Person = ({ fname, lname, img }) => {
  return (
    <div className="col s4 l2">
      <p>
        {fname} 
        {lname}
      </p>
      <img src={img} rounded alt=""/>
    </div>
  );
};

export default Person;
