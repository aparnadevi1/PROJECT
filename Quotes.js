import React from "react";
import axios from "axios";

//import "./Aparna.css";

class  Quotes extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app" >
        <div style={{backgroundColor:'00d0ff'}}className="card">
          <h1 style={{color:"#00d0ff",fontSize:'30px',padding:"50px",height:'100%',backgroundColor:'#fff',borderRadius:'20px'}}className="heading">{this.state.advice}</h1>
          <button   style={{color:"#00d0ff",fontSize:'30px',padding:"20px",height:'100%',backgroundColor:'#fff'}} className="button" onClick={this.fetchAdvice}>
            <span>Give Me Advice</span>
          </button>
        </div>
      
      </div>
    );
  }
}

export default Quotes;
