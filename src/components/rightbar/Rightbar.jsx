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
            </div>
        </div>
    )
}