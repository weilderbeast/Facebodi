import React from "react"
import { ReactComponent as Dot } from "../../../icons/dot.svg"

export default function FriendCardItem() {
  return (
    <div className="friend pointer">
      <div className="friend-avatar">
        <div className="friend-profile">
          <Dot />
        </div>
        <div className="friend-name">Cîrstoiu Bogdan-Florin</div>
      </div>
    </div>
  )
}
