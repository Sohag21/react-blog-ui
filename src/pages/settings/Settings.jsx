import SideBar from '../../components/sidebar/SideBar'
import './Settings.css'
import { IoMdPersonAdd } from 'react-icons/io'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPp">
                        <img src="images/user.jpg" alt="" className="settingsUser" />
                        <label htmlFor="settingsPpInput">
                            <IoMdPersonAdd className="settingsAddPpIcon" />
                        </label>
                        <input type="file" id="settingsPpInput" style={{display:"none"}} />
                    </div>
                    <label>User Name</label>
                    <input type="text" placeholder="Sohag" />
                    <label>Email</label>
                    <input type="email" placeholder="sohag@mail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Submit</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
