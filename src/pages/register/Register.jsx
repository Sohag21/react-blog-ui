import './Register.css'
import { BrowserRouter as Route, Link} from 'react-router-dom'


export default function Register() {
    return (
        <div className="register">
            <spna className="registerTitle">Register</spna>
            <form className="registerForm">
                <label>User Name</label>
                <input type="text" placeholder="user name" />
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" />
                <label>Password</label>
                <input type="password" placeholder="password"/>
                <button className="registerButton">Register</button>
            </form>
            <Link to="/login" className="registerLoginButton">Login</Link>
        </div>
    )
}
