import React from "react"
import PopularPostItem from "./PopularPostItem"

export default function PopularPosts() {
  return (
    <div className="trending">
      <div className="trending-title">Trending</div>
      <div className="trending-list">
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
      </div>
    </div>
  )
}
