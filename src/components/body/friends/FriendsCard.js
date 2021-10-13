import React from "react"
import FriendCardItem from "./FriendCardItem"

export default function FriendsCard() {
  return (
    <div className="friends-card">
      <div className="friends-title">Friends</div>
      <div className="friends-online">ONLINE</div>
      <div className="friends-list">
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
        <FriendCardItem />
      </div>
    </div>
  )
}
