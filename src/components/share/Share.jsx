import "./share.css"
import {PermMedia} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person-pfp/4.png" alt="" />
            <input placeholder="What's in your mind Sai?" 
            className="shareInput" />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
              </div>

              <div className="shareOption">
                <PermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
              </div>

              <div className="shareOption">
                <PermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
              </div>

              <div className="shareOption">
                <PermMedia className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
