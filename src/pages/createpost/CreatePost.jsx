import { MdAddAPhoto } from 'react-icons/md'
import './CreatePost.css'

export default function CreatePost() {
    return (
        <>
        <div className="createPost">
            <img src="images/b.jpg" alt="" className="createPostCoverImg" />
            <form className="createPostForm">
                <div className="createPostFormGrp">
                    <label htmlFor="createPostFormFileInput">
                        <MdAddAPhoto className="createPostFormImgIcon" />
                    </label>
                    <input type="file" id="createPostFormFileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="createPostFormInputText" />
                </div>
                <div className="createPostFormGrp">
                    <textarea placeholder="Aa..." rows="3" className="createPostFormInputText createPostFormTextarea"></textarea>
                </div>
                <button className="createPostFormPost">Post</button>
            </form>
        </div>
        </>
    )
}
