import React from "react";

// Import The Button Component from Button.js
import Button from "./Button";
import './Jokes.css'
//const rootElement = document.getElementById("root");

// Create a functional component
const Jokes = () => {
  // Declare a state variable
  const [Joke, setJoke] = React.useState("");

  const fetchApi = () => {
    // Fetching data from the API
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    // Return the Button Component with a conditional statement
    // <div>
    // <div style={{color:"#00d0ff"}}>
      
    //   <p style={{color:"#00d0ff"}} >{Joke}</p>
    //   <Button callApi={fetchApi} />
    // </div>

   <div className="app" >
        <div style={{backgroundColor:'00d0ff'}}className="card">
          <h1 style={{color:"#00d0ff",fontSize:'30px',padding:"50px",height:'100%',backgroundColor:'#fff',borderRadius:'20px'}}className="heading">{Joke}</h1>
          <button   style={{color:"#00doff",fontSize:'30px',padding:"20px",height:'100%',backgroundColor:'#fff'}} className="button"  onClick={fetchApi}>
            <span>Get a Joke</span>
          </button>
        </div>
      
      </div>
    
  );
};

// Rendering the App Component.

export default Jokes;
