import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db } from "./firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";
import BoltIcon from '@mui/icons-material/Bolt';
import IconButton from "@mui/material/IconButton";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <IconButton><BoltIcon className="bolt" /></IconButton>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(({ id, data: { displayName, username, verified, text, avatar, image, timestamp }}) => (
          <Post
            key={id}
            displayName={displayName}
            username={username}
            verified={verified}
            text={text}
            avatar={avatar}
            image={image}
            timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
