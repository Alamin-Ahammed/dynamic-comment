import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const PostHandler = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("fetching data");
    // fetching post data
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPosts(json.slice(0, 20)));
    // fetching comments data
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setComments(json.slice(0, 10)));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </div>
  );
};

export default PostHandler;

/**
 * \\ photos or post obj
 *  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
 */
