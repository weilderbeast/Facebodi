import React from "react"
import { useState } from "react"
import { ReactComponent as Emoji } from "../../../../icons/emoji.svg"
import emojiAsJson from "../../../../emojis.json"

export default function EmojiPicker(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  function load() {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    }

    let loadEmojis = JSON.parse(JSON.stringify(emojiAsJson))
    let headers = loadEmojis.emojis.map((emoji) => {
      let text = emoji.category
      return text.replace(/\(([^)]+)\)/, "")
    })
    let filteredHeaders = headers.filter(onlyUnique)

    const emojiList = filteredHeaders.map((category) => (
      <div className="emoji-category" key={category}>
        <div className="emoji-category-name">{category}</div>
        <div className="emoji-category-list">
          {loadEmojis.emojis.map((emoji, index) => {
            return emoji.category.includes(category) ? (
              <div className="emoji" key={index}>
                {emoji.emoji}
              </div>
            ) : (
              ""
            )
          })}
        </div>
      </div>
    ))

    return search ? (
      <div className="emoji-category-list">
        {loadEmojis.emojis.map((emoji, index) =>
          emoji.name.includes(search) ? (
            <div className="emoji" key={index}>
              {emoji.emoji}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    ) : (
      emojiList
    )
  }

  return (
    <div className="emoji-picker">
      <div
        className="emoji-picker-button"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <Emoji style={{height: props.size, width: props.size}}/>
      </div>
      <div
        className="emoji-picker-wrapper"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="emoji-picker-top">
          <span>Emojis</span>
          <input
            placeholder="Search.."
            onChange={(e) => {
              setSearch(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>
        <div className="emoji-picker-list">{isOpen ? load() : ""}</div>
      </div>
    </div>
  )
}
