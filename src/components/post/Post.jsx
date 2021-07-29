import { Divider } from 'antd'
import './Post.css'
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Post() {
    return (
        <div className="post">
            <img src="images/post1.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCategories">
                    <spna className="postCategory">sposts</spna>
                    <spna className="postCategory">Life</spna>
                    <spna className="postCategory">Music</spna>
                </div>
                <Link to="/post-details" className="postTitle">Lorem ipsum dolor omnis possimus ipsam facilis neque.</Link>
                <Divider />
                <span className="postTime">1 hour ago</span>
            </div>
            <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque cumque adipisci unde veritatis iste iusto, dolores voluptates repellendus soluta exercitationem quae deleniti est natus nam ipsum sunt sequi neque.</p>
        </div>
    )
}
