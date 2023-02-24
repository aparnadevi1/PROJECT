import React from "react";
import ExerciseVideoCard from "./ExerciseVedioCard";
import { YOUTUBE_VIDEOS_API_LIST_CONST } from "./constants2";


const ExerciseContainer = () => {
    const styles = {
        backgroundColor: 'fff',
        padding:'50px 200px'
        
      };
      const styles1 = {
        backgroundColor: '#00d0ff',
        display:'grid',
        gridTemplateColumns: '30%',
        padding:'20px 0px',
        color: 'white',
        justifyContent:'space-around',
        fontSize: '24px',
        
      };
  const videos = YOUTUBE_VIDEOS_API_LIST_CONST;

  if (!videos) return null;
  return (
    <div style={styles}>
      <div style={styles1}>
        {videos.map((video) => (
          <ExerciseVideoCard info={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseContainer;






// import React from "react";
// import VideoCard from "./VedioCard";
// import { YOUTUBE_VIDEOS_API_LIST_CONST } from "./constants";

// const VideoContainer = () => {
//   const videos = YOUTUBE_VIDEOS_API_LIST_CONST;

//   if (!videos) return null;
//   return (
//     <div>
//       <div className="flex flex-wrap">
//         {videos.map((video) => (
//           <VideoCard info={video} key={video.id.videoId} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoContainer;



// import React from "react";
// import ExerciseVideoCard from "./ExerciseVedioCard";
// import { YOUTUBE_VIDEOS_API_LIST_CONST } from "./constants2";

// const ExerciseContainer = () => {
//   const videos = YOUTUBE_VIDEOS_API_LIST_CONST;

//   if (!videos) return null;
//   return (
//     <div>
//       <div className="flex flex-wrap">
//         {videos.map((video) => (
//           <ExerciseVideoCard info={video} key={video.id.videoId} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExerciseContainer;
