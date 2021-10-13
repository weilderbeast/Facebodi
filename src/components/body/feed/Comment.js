import React from "react"
import { useState } from "react"

export default function Comment() {
  const [likeState, setLikeState] = useState(false)

  return (
    <div className="comment">
      <div className="comment-profile">
        <img
          src="https://avatars.githubusercontent.com/u/62263505?v=4"
          class="avatar rounded pointer"
          alt="your profile picture"
          height="35"
          width="35"
        />
      </div>
      <div className="comment-content">
        <div className="comment-top">
          <div className="comment-owner">Cirstoiu Bogdan-Florin</div>
          <div className="comment-timestamp">14 hours ago</div>
        </div>
        <div className="comment-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="comment-actions">
          <div
            className="comment-like"
            style={{ color: likeState ? "#fd4d4d" : "#5d7290" }}
            onClick={() => {
              setLikeState(!likeState)
            }}
          >
            {likeState ? "Liked" : "Like"}
          </div>
          <div className="comment-reply">Reply</div>
        </div>
      </div>
    </div>
  )
}
