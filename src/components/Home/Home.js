import React from "react";
import { Parallax } from "react-materialize";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Parallax
        image={
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt=""
            src="https://i.ibb.co/n3M8f2y/pic1.png"
          />
        }
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Just Practice React</h2>
          <p className="grey-text text-darken-3 lighten-3">
            This App consists of few components, which the main features of the
            React like states, hooks and fetch(api) are implemented
          </p>
          <p>Parallax on home page just for beauty btw 😊</p>
        </div>
      </div>
      <Parallax
        image={
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt=""
            src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/2592/react-materialize.jpg"
          />
        }
        options={{
          responsiveThreshold: 0,
        }}
      />
    </>
  );
};

export default Home;
