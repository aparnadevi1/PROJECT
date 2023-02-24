import React, { useState } from "react";
import ReactModal from "react-modal";
const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const [showVideo, setShowVideo] = useState(false);
  const showVideoHandler = () => {
    //console.log("showvideo1" + showVideo);
    setShowVideo(false);
    //console.log("showvideo2" + showVideo);
  };
  const openVideoHandler = () => {
    setShowVideo(true);
    //console.log("showvideo3" + showVideo);
  };

  return (
    <div className="p-2 m-2 w-72 shadow-md">
      <div
        onClick={() => {
          openVideoHandler();
        }}
      >
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="font-bold">{channelTitle}</div>
        <div>{title}</div>
      </div>

      <ReactModal
        ariaHideApp={false}
        isOpen={showVideo}
        onRequestClose={() => {
          showVideoHandler();
        }}
      >
        <div>
          <button onClick={() => showVideoHandler()}>Close</button>
          <div >
            <iframe
              width="100%"
              height="500px"
              src={"https://www.youtube.com/embed/" + info.id.videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; 
     autoplay; clipboard-write;
      encrypted-media; gyroscope;
       picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};
// const Watch = (props) => {lu
//   return (
//     <iframe
//       onFocus={() => {}}
//       onBlur={() => {}}
//       width="1200"
//       height="615"
//       src={"https://www.youtube.com/embed/" + props.videoId}
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowFullScreen
//     ></iframe>
//   );
// };
export default VideoCard;



// import React, { useState } from "react";
// import ReactModal from "react-modal";
// const VideoCard = ({ info }) => {
//   const { snippet } = info;
//   const { channelTitle, title, thumbnails } = snippet;
//   const [showVideo, setShowVideo] = useState(false);
//   const showVideoHandler = () => {
//     //console.log("showvideo1" + showVideo);
//     setShowVideo(false);
//     //console.log("showvideo2" + showVideo);
//   };
//   const openVideoHandler = () => {
//     setShowVideo(true);
//     //console.log("showvideo3" + showVideo);
//   };

//   return (
//     <div className="p-2 m-2 w-72 shadow-md">
//       <div
//         onClick={() => {
//           openVideoHandler();
//         }}
//       >
//         <img
//           className="rounded-lg"
//           alt="thumbnail"
//           src={thumbnails.medium.url}
//         />
//         <div className="font-bold">{channelTitle}</div>
//         <div>{title}</div>
//       </div>

//       <ReactModal
//         ariaHideApp={false}
//         isOpen={showVideo}
//         onRequestClose={() => {
//           showVideoHandler();
//         }}
//       >
//         <div class="card">
//           <button onClick={() => showVideoHandler()}>Close</button>
//           <div>
//             <iframe
//               width="100%"
//               height="100%"
//               src={"https://www.youtube.com/embed/" + info.id.videoId}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; 
//      autoplay; clipboard-write;
//       encrypted-media; gyroscope;
//        picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </ReactModal>
//     </div>
//   );
// };
// // const Watch = (props) => {lu
// //   return (
// //     <iframe
// //       onFocus={() => {}}
// //       onBlur={() => {}}
// //       width="1200"
// //       height="615"
// //       src={"https://www.youtube.com/embed/" + props.videoId}
// //       title="YouTube video player"
// //       frameBorder="0"
// //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //       allowFullScreen
// //     ></iframe>
// //   );
// // };
// export default VideoCard;
