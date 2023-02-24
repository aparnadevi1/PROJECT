import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const [showVideo, setShowVideo] = useState(false);
  const showVideoHandler = () => {
    setShowVideo(true);
  };
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    console.log("handleToClose");
    setOpen(false);
    console.log("setopen" - open);
  };

  return (
    <div className="p-2 m-2 w-72 shadow-md" onClick={handleClickToOpen}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="font-bold">{channelTitle}</div>
      <div>{title}</div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"How are you?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I am Good, Hope the same for you!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {showVideo && <Watch videoId={info.id.videoId} />}
    </div>
  );
};
const Watch = (props) => {
  return (
    <iframe
      width="1200"
      height="615"
      src={"https://www.youtube.com/embed/" + props.videoId}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
export default VideoCard;
