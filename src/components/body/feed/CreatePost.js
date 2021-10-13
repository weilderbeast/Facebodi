import React from "react"
import { useState, useEffect } from "react"
import { ReactComponent as Close } from "../../../icons/cancel.svg"
import { ReactComponent as Photo } from "../../../icons/photo.svg"
import { ReactComponent as Emoji } from "../../../icons/emoji.svg"
import EmojiPicker from "./emoji/EmojiPicker"

export default function CreatePost(props) {
  useEffect(() => {
    props.setIsOpen(props.isOpen)
  }, [props.isOpen])

  let imageArray = []
  let done = false
  const [images, setImages] = useState([])
  
  
  function readAsync(file) {
    return new Promise((res, rej) => {
      let reader = new FileReader()
      reader.onload = () => {
        res(reader.result)
      }
      reader.readAsDataURL(file)
    })
  }



  async function handleImage(e){
    e.preventDefault()
    for (var i = 0; i < e.target.files.length;i++){
      imageArray.push(await readAsync(e.target.files[i]))
    }
    return imageArray
  }

  
  
  console.log(images)

  return (
    <div
      className="create-post-wrapper"
      style={{ display: props.isOpen ? "flex" : "none" }}
    >
      <div className="create-post-modal">
        <div className="create-post-top">
          <div className="create-post-title">Express yourself</div>
          <div
            className="create-post-cancel pointer"
            onClick={() => {
              props.setIsOpen(false)
            }}
          >
            <Close />
          </div>
        </div>
        <div className="create-post-center">
          <textarea
            className="create-post-textarea"
            placeholder="Share your thoughs"
          ></textarea>
          <div className="create-post-uploads">
            {
              images.map((image) => (
                <div className="create-post-image">
                  <img src={image} />
                  <div className="create-post-image-delete">
                    <Close/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="create-post-bottom">
          <button
            className="create-post-submit"
            onClick={() => {
              props.setIsOpen(false)
            }}
          >
            Create Post
          </button>
          <div className="create-post-actions">
            <EmojiPicker size={30}/>
            <label for="upload">
              <Photo />
            </label>
            <input
              multiple
              type="file"
              id="upload"
              onChange={async (e) => {
                let arr = await handleImage(e)
                setImages([...images, ...arr])
              }}
              accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" />
          </div>
        </div>
      </div>
    </div>
  )
}
