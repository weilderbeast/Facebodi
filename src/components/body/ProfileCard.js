import React from "react"

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <img
          src="https://avatars.githubusercontent.com/u/62263505?v=4"
          className="profile-pic rounded pointer"
          alt="your profile picture"
        />
        <div className="profile-user">
          <div className="profile-name">Cîrstoiu Bogdan-Florin</div>
          <div className="profile-username">@bogdanel</div>
        </div>
      </div>
      <div className="profile-pop">
        <div className="followers pointer">
          0 <span>followers</span>
        </div>
        <div className="following pointer">
          0 <span>following</span>
        </div>
      </div>
    </div>
  )
}
