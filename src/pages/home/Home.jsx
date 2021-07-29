import Banner from '../../components/banner/Banner'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './Home.css'

export default function Home() {
    return (
        <>
        <Banner />
        <div className="home">
            <Posts />
            <SideBar />
        </div>
        </>
    )
}
