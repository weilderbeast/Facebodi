import React, { useState, useEffect } from "react"
import EmojiPicker from "./emoji/EmojiPicker"

export default function CommentInput() {
  const [commentState, setCommentState] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(commentState)
    setCommentState("")
    e.target.reset()
  }

  return (
    <div className="comment-input-container">
      <div className="comment-input-owner">
        <img
          src="https://avatars.githubusercontent.com/u/62263505?v=4"
          class="avatar rounded pointer"
          alt="your profile picture"
          height="30"
          width="30"
        />
      </div>
      <div className="comment-input-wrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="comment-input"
            placeholder="Share your thoughts .."
            onChange={(e) => setCommentState(e.target.value)}
          />
          <button style={{ display: "none" }} type="submit"></button>
        </form>

        <EmojiPicker />
      </div>
    </div>
  )
}
