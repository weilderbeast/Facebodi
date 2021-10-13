import React from "react"
import CreatePost from "./CreatePost"
import Post from "./Post"
import { useState } from "react"

export default function Feed() {
  const [isOpen, setIsOpen] = useState(false)
  const [posts, setPosts] = useState([])

  return (
    <div className="feed">
      <div className="feed-top">
        <div className="feed-title">Feed</div>
        <button
          className="create-post-button pointer"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          Create a post
        </button>
      </div>
      <div className="feed-main">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <CreatePost setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  )
}
