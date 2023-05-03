import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person-pfp/4.png" alt="" />
                    <span className="postUsername">Sai Tejas A R</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my First post :P</span>
                <img className="postImg" src="assets/posts/1.png" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="" />
                    <img className="likeIcon" src="/assets/love.png" alt="" />
                    <span className="postLikeCounter">69 People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
