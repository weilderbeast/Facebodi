import React from "react"
import NavItem from "./NavItem"
import { ReactComponent as Logo } from "../../icons/linux.svg"
import { ReactComponent as Search } from "../../icons/loupe.svg"

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <NavItem>
          <div className="logo-wrapper">
            <Logo className="logo pointer" />
            <b className="app-title pointer">Facebodi</b>
          </div>
        </NavItem>
      </div>
      <div className="nav-center">
        <NavItem>
          <div className="search-bar">
            <div className="search-icon">
              <Search className="pointer loupe" />
            </div>
            <input placeholder="Search..." className="search-input" />
          </div>
        </NavItem>
      </div>
      <div className="nav-right">
        <NavItem>
          <img
            src="https://avatars.githubusercontent.com/u/62263505?v=4"
            width="50"
            height="50"
            className="avatar rounded pointer"
            alt="your avatar"
          />
        </NavItem>
      </div>
    </div>
  )
}
