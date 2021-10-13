import React from "react"
import Feed from "./feed/Feed"
import PopularPosts from "./feed/PopularPosts"
import FriendsCard from "./friends/FriendsCard"
import ProfileCard from "./ProfileCard"

export default function Body() {
  return (
    <div className="body">
      <div className="body-left">
        <FriendsCard />
      </div>
      <div className="body-center">
        <Feed />
      </div>
      <div className="body-right">
        <ProfileCard />
        <PopularPosts />
      </div>
    </div>
  )
}
