import './Login.css'
import { BrowserRouter as Route, Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <spna className="loginTitle">Login</spna>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" />
                <label>Password</label>
                <input type="password" placeholder="***"/>
                <button className="loginButton">Login</button>
            </form>
            <Link to="/register" className="loginRegisterButton">Register</Link>
        </div>
    )
}
