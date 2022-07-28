import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import IconButton from "@mui/material/IconButton";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, timestamp },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial ">
                  {verified && <VerifiedUserIcon className="post__badge" />}@
                  <span className="specialText">{username}</span>
                </span>
                <span className="timestampText">{timestamp}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <IconButton>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <RepeatIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <PublishIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
