import React from "react"
import { ReactComponent as Like } from "../../../icons/like.svg"
import { ReactComponent as CommentIcon } from "../../../icons/comment.svg"
import { ReactComponent as Options } from "../../../icons/more.svg"
import { useState, useEffect } from "react"
import Comment from "./Comment"
import CommentInput from "./CommentInput"

export default function Post() {
  const [likeState, setLikeState] = useState(false)
  const [commentState, setCommentState] = useState(false)

  let likeColor = likeState ? "liked" : ""

  return (
    <div className="post">
      <div className="post-top">
        <div className="post-owner pointer">
          <div className="post-owner-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/62263505?v=4"
              className="avatar rounded pointer"
              alt="your profile picture"
              height="35"
              width="35"
            />
          </div>
          <div>
            <div className="post-owner-name">Cîrstoiu Bogdan-Florin</div>
            <div className="post-date">33m ago</div>
          </div>
        </div>
        <div className="post-options pointer">
          <Options />
        </div>
      </div>
      <div className="post-content">
        <div className="post-text">Description and stuff</div>
      </div>
      <div className="post-image-container">
        <img
          alt="post image"
          className="post-image"
          src="https://wallpaperaccess.com/full/172444.jpg"
        />
      </div>
      <div className="post-actions">
        <button
          className="like-button pointer"
          style={{ color: likeState ? "#fd4d4d" : "" }}
          onClick={() => {
            setLikeState(!likeState)
          }}
        >
          <Like style={{ fill: likeState ? "#fd4d4d" : "" }} />
          Like
        </button>
        <button
          className="comment-button pointer"
          onClick={() => {
            setCommentState(!commentState)
          }}
        >
          <CommentIcon />
          Comment
        </button>
      </div>
      <div
        className="post-comments"
        style={{ display: commentState ? "flex" : "none" }}
      >
        <CommentInput />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}
