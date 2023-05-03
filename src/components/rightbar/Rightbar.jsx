import "./rightbar.css"

export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/party.jpg" alt="" />
                    <span className="birthdayText"><b>Anish Krishna</b> and <b>2 other friends</b> have a birthday today</span>
                </div>
                <img className="rightbarAd" src="assets/posts/12.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person-pfp/4.png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}