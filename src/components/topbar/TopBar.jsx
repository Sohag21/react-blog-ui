import './TopBar.css'
import { RiFacebookCircleLine, RiInstagramLine, RiPinterestLine } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Avatar } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Route,
    Link
  } from "react-router-dom";


export default function TopBar() {
    const user = false;
    return (
        <div className="topBar">
            <div className="topLeft">
                <ul className="socialList">
                    <li><RiFacebookCircleLine /></li>
                    <li><RiInstagramLine /></li>
                    <li><AiFillTwitterCircle /></li>
                    <li><RiPinterestLine /></li>
                </ul>
            </div>
            <div className="topCenter">
                <ul className="navList">
                    <li className="navItem"><Link className="active" to="/">Home</Link></li>
                    <li className="navItem">About us</li>
                    <li className="navItem">Contact us</li>
                    <li className="navItem"><Link to="/create-post">Create Post</Link></li>
                    <li className="navItem">
                        { user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                        <Link to="/register">
                            <Avatar size={35} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} icon={<UserOutlined />} />
                        </Link>
                        <SearchOutlined />
                        </>
                    ): (
                        <ul className="navList">
                            <li className="navItem">
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link to="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="navItem">
                                <SearchOutlined />
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
