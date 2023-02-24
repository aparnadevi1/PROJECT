import song from "./alert-sound.mp3";
import song1 from "./Flute.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import './snowfallingmusic.css';
import { Component } from "react";
const Snowflake = (props) =>{
  return(
      <p className='Snowflake' id={`item${props.id}`} style={props.style}>  
       *
      </p>
  );
}
class Music extends Component {
  // Create state
  state = {
    audio: new Audio(song),
    audio1: new Audio(song1),
    audio2: new Audio(song2),
    audio3: new Audio(song3),
    isPlaying: false,
  };
  snow=()=>{
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
            return arr.map((el, i)=>{
        animationDelay = `${(Math.random()*30).toFixed(2)}s`;
        fontSize = `${(Math.floor(Math.random()*50) + 10)}px`;
        let style = {
            animationDelay,
            fontSize
    }
    return (<Snowflake key={i} id={i} style={style}/>)
    })
    };    
  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  playPause1 = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio1.pause();
    } else {
      this.state.audio1.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause2 = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio2.pause();
    } else {
      this.state.audio2.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  playPause3 = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio3.pause();
    } else {
      this.state.audio3.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="body1">
        {/* Show state of song on website */}
        <div>
              
        </div>
        <div className='Appy'>
            {this.snow()}
            <div>
        <button onClick={this.playPause}>Play | Pause1</button>
        
        <button onClick={this.playPause1}>Play | Pause2</button>
        <button onClick={this.playPause2}>Play | Pause3</button>
        <button onClick={this.playPause3}>Play | Pause4</button>
        </div>
        </div>
        
        
        <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

        {/* Button to call our main function */}
      
      </div>
    );
  }
}

export default Music;


// import React, { Component } from "react";

// // Import your audio file
// import song from "./alert-sound.mp3";
// import song1 from "./Flute.mp3";
// import song2 from "./song2.mp3";
// import song3 from "./song3.mp3";
// class Music extends Component {
//   // Create state
//   state = {
//     audio: new Audio(song),
//     audio1: new Audio(song1),
//     audio2: new Audio(song2),
//     audio3: new Audio(song3),
//     isPlaying: false,
//   };
//   playPause = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio.pause();
//     } else {
//       this.state.audio.play();
//     }
//     this.setState({ isPlaying: !isPlaying });
//   };

//   playPause1 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio1.pause();
//     } else {
//       this.state.audio1.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };
//   playPause2 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio2.pause();
//     } else {
//       this.state.audio2.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };
//   playPause3 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio3.pause();
//     } else {
//       this.state.audio3.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };

//   render() {
//     return (
//       <div>
//         {/* Show state of song on website */}
//         <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

//         {/* Button to call our main function */}
//         <button onClick={this.playPause}>Play | Pause1</button>
//         <button onClick={this.playPause1}>Play | Pause2</button>
//         <button onClick={this.playPause2}>Play | Pause3</button>
//         <button onClick={this.playPause3}>Play | Pause4</button>
//       </div>
//     );
//   }
// }

// export default Music;

// import React, { useState} from "react";
// import useSound from "use-sound";
// import mySound from './alert-sound.mp3';
// // import Audio2 from "./Flute.mp3";

// // function Music() {
// //    const [hoverAudio1, setHoverAudio1] = useState(false);
// //    const [hoverAudio2, setHoverAudio2] = useState(false);

// //    const [playAudio1, { stop }] = useSound(Audio1, {
// //     volume: 0.5,
// //    });
// // //    const [playAudio2, { stop }] = useSound(Audio2, {
// // //     volume: 0.5,
// // //    });

// //    return (
// //     <>
// //       <div
// //           onMouseEnter={() => {
// //             setHoverAudio1(true);
// //             playAudio1();
// //           }}
// //           onMouseLeave={() => {
// //             setHoverAudio1(false);
// //             stop();
// //           }}
// //         >
// //       </div>

// //       {/* <div
// //           onMouseEnter={() => {
// //             setHoverAudio2(true);
// //             playAudio2();
// //           }}
// //           onMouseLeave={() => {
// //             setHoverAudio2(false);
// //             stop2();
// //           }}
// //         >
// //       </div> */}
// //       </>
// //     );
// // }
// // export default Music;
// function Music() {
//     const [play, { stop,isPlaying }] = useSound(mySound);
//     return (

//     //     <PlayButton
//     //     active={isPlaying}
//     //     size={60}
//     //     iconColor="var(--color-background)"
//     //     idleBackgroundColor="var(--color-text)"
//     //     activeBackgroundColor="var(--color-primary)"
//     //     play={play}
//     //     stop={stop}
//     //   />
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={stop}>Stop</button>
//       </div>
//     );
//   }
//   export default Music;


// import song from "./alert-sound.mp3";
// import song1 from "./Flute.mp3";
// import song2 from "./song2.mp3";
// import song3 from "./song3.mp3";
// import './snowfallingmusic.css';
// import { Component } from "react";
// const Snowflake = (props) =>{
//   return(
//       <p className='Snowflake' id={`item${props.id}`} style={props.style}>  
//        *
//       </p>
//   );
// }
// class Music extends Component {
//   // Create state
//   state = {
//     audio: new Audio(song),
//     audio1: new Audio(song1),
//     audio2: new Audio(song2),
//     audio3: new Audio(song3),
//     isPlaying: false,
//   };
//   snow=()=>{
//     let animationDelay = '0s';
//     let fontSize = '100px';
//     let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
//             return arr.map((el, i)=>{
//         animationDelay = `${(Math.random()*30).toFixed(2)}s`;
//         fontSize = `${(Math.floor(Math.random()*50) + 10)}px`;
//         let style = {
//             animationDelay,
//             fontSize
//     }
//     return (<Snowflake key={i} id={i} style={style}/>)
//     })
//     };    
//   playPause = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio.pause();
//     } else {
//       this.state.audio.play();
//     }
//     this.setState({ isPlaying: !isPlaying });
//   };

//   playPause1 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio1.pause();
//     } else {
//       this.state.audio1.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };
//   playPause2 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio2.pause();
//     } else {
//       this.state.audio2.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };
//   playPause3 = () => {
//     let isPlaying = this.state.isPlaying;
//     if (isPlaying) {
//       this.state.audio3.pause();
//     } else {
//       this.state.audio3.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };

//   render() {
//     return (
//       <div>
//         {/* Show state of song on website */}
//         <div>

//         </div>
//         <div className='Appy'>
//             {this.snow()}
//         </div>
//         <div>
//             <button onClick={this.playPause}>Play | Pause1</button>
//         <button onClick={this.playPause1}>Play | Pause2</button>
//         <button onClick={this.playPause2}>Play | Pause3</button>
//         <button onClick={this.playPause3}>Play | Pause4</button>
//         </div>
        
//         <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

//         {/* Button to call our main function */}
      
//       </div>
//     );
//   }
// }

// export default Music;


// // import React, { Component } from "react";

// // // Import your audio file
// // import song from "./alert-sound.mp3";
// // import song1 from "./Flute.mp3";
// // import song2 from "./song2.mp3";
// // import song3 from "./song3.mp3";
// // class Music extends Component {
// //   // Create state
// //   state = {
// //     audio: new Audio(song),
// //     audio1: new Audio(song1),
// //     audio2: new Audio(song2),
// //     audio3: new Audio(song3),
// //     isPlaying: false,
// //   };
// //   playPause = () => {
// //     let isPlaying = this.state.isPlaying;
// //     if (isPlaying) {
// //       this.state.audio.pause();
// //     } else {
// //       this.state.audio.play();
// //     }
// //     this.setState({ isPlaying: !isPlaying });
// //   };

// //   playPause1 = () => {
// //     let isPlaying = this.state.isPlaying;
// //     if (isPlaying) {
// //       this.state.audio1.pause();
// //     } else {
// //       this.state.audio1.play();
// //     }

// //     // Change the state of song
// //     this.setState({ isPlaying: !isPlaying });
// //   };
// //   playPause2 = () => {
// //     let isPlaying = this.state.isPlaying;
// //     if (isPlaying) {
// //       this.state.audio2.pause();
// //     } else {
// //       this.state.audio2.play();
// //     }

// //     // Change the state of song
// //     this.setState({ isPlaying: !isPlaying });
// //   };
// //   playPause3 = () => {
// //     let isPlaying = this.state.isPlaying;
// //     if (isPlaying) {
// //       this.state.audio3.pause();
// //     } else {
// //       this.state.audio3.play();
// //     }

// //     // Change the state of song
// //     this.setState({ isPlaying: !isPlaying });
// //   };

// //   render() {
// //     return (
// //       <div>
// //         {/* Show state of song on website */}
// //         <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

// //         {/* Button to call our main function */}
// //         <button onClick={this.playPause}>Play | Pause1</button>
// //         <button onClick={this.playPause1}>Play | Pause2</button>
// //         <button onClick={this.playPause2}>Play | Pause3</button>
// //         <button onClick={this.playPause3}>Play | Pause4</button>
// //       </div>
// //     );
// //   }
// // }

// // export default Music;

// // import React, { useState} from "react";
// // import useSound from "use-sound";
// // import mySound from './alert-sound.mp3';
// // // import Audio2 from "./Flute.mp3";

// // // function Music() {
// // //    const [hoverAudio1, setHoverAudio1] = useState(false);
// // //    const [hoverAudio2, setHoverAudio2] = useState(false);

// // //    const [playAudio1, { stop }] = useSound(Audio1, {
// // //     volume: 0.5,
// // //    });
// // // //    const [playAudio2, { stop }] = useSound(Audio2, {
// // // //     volume: 0.5,
// // // //    });

// // //    return (
// // //     <>
// // //       <div
// // //           onMouseEnter={() => {
// // //             setHoverAudio1(true);
// // //             playAudio1();
// // //           }}
// // //           onMouseLeave={() => {
// // //             setHoverAudio1(false);
// // //             stop();
// // //           }}
// // //         >
// // //       </div>

// // //       {/* <div
// // //           onMouseEnter={() => {
// // //             setHoverAudio2(true);
// // //             playAudio2();
// // //           }}
// // //           onMouseLeave={() => {
// // //             setHoverAudio2(false);
// // //             stop2();
// // //           }}
// // //         >
// // //       </div> */}
// // //       </>
// // //     );
// // // }
// // // export default Music;
// // function Music() {
// //     const [play, { stop,isPlaying }] = useSound(mySound);
// //     return (

// //     //     <PlayButton
// //     //     active={isPlaying}
// //     //     size={60}
// //     //     iconColor="var(--color-background)"
// //     //     idleBackgroundColor="var(--color-text)"
// //     //     activeBackgroundColor="var(--color-primary)"
// //     //     play={play}
// //     //     stop={stop}
// //     //   />
// //       <div>
// //         <button onClick={play}>Play</button>
// //         <button onClick={stop}>Stop</button>
// //       </div>
// //     );
// //   }
// //   export default Music;
