import React, { useState } from "react";
import postImg from "../../assets/post.jpg";
import person from "../../assets/person.png";
import "./Post.css";

const Post = ({ post: { name, body: postTitle }, comments: allComments, setComments }) => {
  const [show, setShow] = useState(false);
  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [localComments, setLocalComments] = useState(allComments.slice(0, 1));

  const showComments = () => {
    setShow((prevShow) => !prevShow);
    setLocalComments((prevComments) => (show ? ([...localComments,...allComments].slice(0,1)) : [...localComments,...allComments]));
  };

  const handleComments = () => {
    console.log("comment added");
    setIsCommentAdded(true);
  };

  // handle comment input
  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  // add comment
  const addComment = () => {
    if (commentInput.trim() !== "") {
      const newComment = {
        postId: 1,
        id: Math.round(Math.random() * 100),
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: commentInput,
      };

      // setComments([newComment, ...allComments]);
      setLocalComments([newComment, ...localComments]);
      setCommentInput('')
    }
    setIsCommentAdded(false);
  };

  return (
    <div className="post-container">
      <div className="name-image-of-post">
        <h1>{name}</h1>
        <p>{postTitle}</p>
        <img src={postImg} alt="Image" />
      </div>
      <div className="like-comment-section">
        <button>Like</button>
        <button onClick={handleComments}>Comment</button>
        <button>Share</button>
      </div>
      <div className="comment-displayer">
        {isCommentAdded && (
          <div>
            <input
            className="commentInput"
              type="text"
              placeholder="add your comment here"
              value={commentInput}
              onChange={(e) => handleCommentInput(e)}
            />
            <button onClick={addComment}>Add Comment</button>
          </div>
        )}
        {localComments.map((comment) => (
          <div className="commenter" key={comment.id}>
            <div className="commenter-profile">
              <img src={person} alt="image" />
              <h6>Commenter Name</h6>
            </div>
            <div className="comment">{comment.body}</div>
          </div>
        ))}

        <button className="button-2" onClick={showComments}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Post;


/**
 import React, { useState } from "react";
import postImg from "../../assets/post.jpg";
import person from "../../assets/person.png";
import "./Post.css";

const Post = ({ post: { name, body: postTitle }, comments: allComments, setComments }) => {
  const [show, setShow] = useState(false);
  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [localComments, setLocalComments] = useState(allComments.slice(0, 1));

  const showComments = () => {
    setShow((prevShow) => !prevShow);
    setLocalComments((prevComments) => (show ? allComments.slice(0, 1) : allComments));
  };

  const handleComments = () => {
    console.log("comment added");
    setIsCommentAdded(true);
  };

  // handle comment input
  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  // add comment
  const addComment = () => {
    if (commentInput.trim() !== "") {
      const newComment = {
        postId: 1,
        id: Math.round(Math.random() * 100),
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: commentInput,
      };

      setComments([newComment, ...allComments]);
      setLocalComments([newComment, ...localComments]);
      setCommentInput('')
    }
    setIsCommentAdded(false);
  };

  return (
    <div className="post-container">
      <div className="name-image-of-post">
        <h1>{name}</h1>
        <p>{postTitle}</p>
        <img src={postImg} alt="Image" />
      </div>
      <div className="like-comment-section">
        <button>Like</button>
        <button onClick={handleComments}>Comment</button>
        <button>Share</button>
      </div>
      <div className="comment-displayer">
        {isCommentAdded && (
          <div>
            <input
            className="commentInput"
              type="text"
              placeholder="add your comment here"
              value={commentInput}
              onChange={(e) => handleCommentInput(e)}
            />
            <button onClick={addComment}>Add Comment</button>
          </div>
        )}
        {localComments.map((comment) => (
          <div className="commenter" key={comment.id}>
            <div className="commenter-profile">
              <img src={person} alt="image" />
              <h6>Commenter Name</h6>
            </div>
            <div className="comment">{comment.body}</div>
          </div>
        ))}

        <button className="button-2" onClick={showComments}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Post;

 */