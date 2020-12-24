import React, { useState, useEffect } from "react";
import Person from "./Person";
import { Button } from "react-materialize";

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  
  useEffect(() => {
    loadData(); // eslint-disable-next-line
  }, []);

  const loadData = async () => {
    const url = "https://randomuser.me/api/?results=6";
    const response = await fetch(url);
    const data = await response.json();
    setPeople(people.concat(data.results));
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="progress">
          <div className="indeterminate blue"></div>
        </div>
      ) : (
        <div className="center">
          <h3>Our Team</h3>
          <div className="row">
            {people.map((person) => {
              return (
                <Person
                  key={person.login.uuid}
                  fname={person.name.first}
                  lname={person.name.last}
                  img={person.picture.large}
                />
              );
            })}
          </div>
          <Button
            onClick={ ()=>{
                setLoading(true)
                loadData()}
            }
            
            node="button"
            style={{
              marginRight: "5px",
            }}
            waves="light"
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Team;
