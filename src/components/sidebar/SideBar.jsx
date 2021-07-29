import './SideBar.css'
import { RiFacebookCircleLine, RiInstagramLine, RiPinterestLine } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">About me</span>
                <img src="images/user.jpg" alt="" className="sideBarImg" />
                <p className="sideBarText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo accusamus tenetur quibusdam explicabo ducimus veritatis inventore dolorem, reprehenderit error fugiat.</p>
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">categories</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">technology</li>
                    <li className="sideBarListItem">life</li>
                    <li className="sideBarListItem">music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">sports</li>
                    <li className="sideBarListItem">cinema</li>
                </ul>
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">follow us</span>
                <ul className="sideBarListSocial">
                    <li className="sideBarListItem"><RiFacebookCircleLine /></li>
                    <li className="sideBarListItem"><RiInstagramLine /></li>
                    <li className="sideBarListItem"><RiPinterestLine /></li>
                    <li className="sideBarListItem"><AiFillTwitterCircle /></li>
                </ul>
            </div>
        </div>
    )
}
