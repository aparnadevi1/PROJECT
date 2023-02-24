import React, { Component } from "react";
import { BsAlarm } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Alarm from "./Alarm";
import Stopwatch from "./Stopwatch";
import Time from "./Time";
import Timer from "./Timer";
import Jokes from "./Jokes";
import Quotes from "./Quotes";
import VideoContainer from "./VedioContainer";
import WatchPage from "./WatchPage";
import Music from "./Music";
import ExerciseContainer from "./ExerciseContainer";

class App extends Component {
  render() {
    const myStyle = {
      color: "white",
      backgroundColor: "#395b63",
      textDecoration: "none",
      padding: "15px 10px",
      fontFamily: "Sans-Serif",
    };

    return (
      <Router>
        <div className="App">
          <div>
            <ul style={myStyle}>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "30px",
                  }}
                  to="/Quotes"
                >
                  Quotes
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "30px",
                  }}
                  to="/Jokes"
                >
                  Jokes
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "30px",
                  }}
                  to="/meditationVideos"
                >
                  Meditation videos
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "30px",
                  }}
                  to="/Music"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "30px",
                  }}
                  to="/ExerciseContainer"
                >
                  Exercises
                </Link>
              </li>
              <li>
                <Link to="/Time">
                  <BsClock color="white" fontSize="2.5em" />
                </Link>
              </li>
              <li>
                <Link to="/Timer">
                  <MdTimer color="white" fontSize="2.5em" />
                </Link>
              </li>
              <li>
                <Link to="/Stopwatch">
                  <BsStopwatch color="white" fontSize="2.5em" />
                </Link>
              </li>
              <li>
                <Link to="/Alarm">
                  <BsAlarm color="white" fontSize="2.5em" />
                </Link>
              </li>
            </ul>
            <Route path="/Alarm">
              <Alarm />
            </Route>
            <Route path="/Time">
              <Time />
            </Route>
            <Route path="/Timer">
              <Timer />
            </Route>
            <Route path="/Stopwatch">
              <Stopwatch />
            </Route>
            <Route exact path="/">
              <Quotes/>
            </Route>
            <Route exact path="/Quotes">
              <Quotes />
            </Route>
            <Route path="/Jokes">
              <Jokes />
            </Route>
            <Route path="/meditationVideos">
              <VideoContainer />
            </Route>
            <Route path="/watch">
              <WatchPage />
            </Route>
            <Route path="/Music">
              <Music />
            </Route>
            <Route path="/ExerciseContainer">
              <ExerciseContainer />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

// import  React,{ Component } from "react";
// import { BsAlarm } from "react-icons/bs";
// import { BsClock } from "react-icons/bs";
// import { BsStopwatch } from "react-icons/bs";
// import { MdTimer } from "react-icons/md";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import Alarm from "./Alarm";
// import Stopwatch from "./Stopwatch";
// import Time from "./Time";
// import Timer from "./Timer";
// import Jokes from "./Jokes";
// import Aparna from "./Aparna";
// import VideoContainer from "./VedioContainer";
// import WatchPage from "./WatchPage";
// import Music from './Music';
// import ExerciseContainer from "./ExerciseContainer";

// class App extends Component {

//   render() {
//     return (
//       <Router>

//         <div className="App">
//           <div>
//           <ul>
//             <li>
//               <Link to="/Aparna">Quotes</Link>
//             </li>
//             <li>
//               <Link to="/Jokes">Jokes</Link>
//             </li>
//             <li>
//               <Link to="/meditationVideos">Meditation videos</Link>
//             </li>
//             <li>
//               <Link to="/Music">Music</Link>
//             </li>
//             <li>
//               <Link to="/ExerciseContainer">Exercises</Link>
//             </li>
//             <li>

//               <Link to="/Time">
//                 <BsClock color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Timer">
//                 <MdTimer color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Stopwatch">
//                 <BsStopwatch color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Alarm">
//                 <BsAlarm color="white" fontSize="2.5em" />
//               </Link>
//             </li>

//           </ul>
//           <Route path="/Alarm">
//             <Alarm />
//           </Route>
//           <Route path="/Time">
//             <Time />
//           </Route>
//           <Route path="/Timer">
//             <Timer />
//           </Route>
//           <Route path="/Stopwatch">
//             <Stopwatch />
//           </Route>
//           <Route exact path="/">
//             <Aparna />
//           </Route>
//           <Route exact path="/Aparna">
//             <Aparna />
//           </Route>
//           <Route path="/Jokes">
//             <Jokes />
//           </Route>
//           <Route path="/meditationVideos">
//             <VideoContainer />
//           </Route>
//           <Route path="/watch">
//             <WatchPage />
//           </Route>
//           <Route path="/Music">
//             <Music />
//           </Route>
//           <Route path="/ExerciseContainer">
//             <ExerciseContainer />
//           </Route>

//         </div>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;

// import React, { Component } from "react";
// import { BsAlarm } from "react-icons/bs";
// import { BsClock } from "react-icons/bs";
// import { BsStopwatch } from "react-icons/bs";
// import { MdTimer } from "react-icons/md";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import Alarm from "./Alarm";
// import Stopwatch from "./Stopwatch";
// import Time from "./Time";
// import Timer from "./Timer";
// import Jokes from "./Jokes";
// import Aparna from "./Aparna";
// import VideoContainer from "./VedioContainer";
// import WatchPage from "./WatchPage";
// import Music from './Music';
// import ExerciseContainer from "./ExerciseContainer";

// class App extends Component {
//   render() {
//     const styles = {
//       color: 'white',
//       fontSize: '24px'
//     };

//     return (
//       <Router>
//         <div style={styles}className="App">
//           <ul>
//             <li>
//               {" "}
//               <Link to="/">
//                 <BsAlarm color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Time">
//                 <BsClock color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Timer">
//                 <MdTimer color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/Stopwatch">
//                 <BsStopwatch color="white" fontSize="2.5em" />
//               </Link>
//             </li>
//             <li>
//               {" "}
//               <Link to="/Aparna">Aparna</Link>
//             </li>
//             <li>
//               <Link to="/Jokes">Jokes</Link>
//             </li>
//             <li>
//               <Link to="/meditationVideos">Meditation videos</Link>
//             </li>
//             <li>
//               <Link to="/Music">Music</Link>
//             </li>
//             <li>
//               <Link to="/ExerciseContainer">Exercises</Link>
//             </li>
//           </ul>
//           <Route exact path="/">
//             <Alarm />
//           </Route>
//           <Route path="/Time">
//             <Time />
//           </Route>
//           <Route path="/Timer">
//             <Timer />
//           </Route>
//           <Route path="/Stopwatch">
//             <Stopwatch />
//           </Route>
//           <Route path="/Aparna">
//             <Aparna />
//           </Route>
//           <Route path="/Jokes">
//             <Jokes />
//           </Route>
//           <Route path="/meditationVideos">
//             <VideoContainer />
//           </Route>
//           <Route path="/watch">
//             <WatchPage />
//           </Route>
//           <Route path="/Music">
//             <Music />
//           </Route>
//           <Route path="/ExerciseContainer">
//             <ExerciseContainer />
//           </Route>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;
