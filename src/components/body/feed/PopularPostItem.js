import React from "react"
import { ReactComponent as Like } from "../../../icons/like.svg"
import { ReactComponent as Comment } from "../../../icons/comment.svg"

export default function PopularPostItem() {
  return (
    <div className="popular-post pointer">
      <div className="popular-post-top">
        <div className="popular-post-owner">
          <div className="popular-post-owner-avatar" />
          <div className="popular-post-owner-name">Cîrstoiu Bogdan-Florin</div>
        </div>
        <div className="popular-post-actions">
          <div className="popular-post-likes">
            <Like /> 69
          </div>
          <div className="popular-post-comments">
            <Comment /> 420
          </div>
        </div>
      </div>

      <div className="popular-post-description">
        This is what shows up when u type some shit
      </div>
    </div>
  )
}
