import { Link, Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function SignUp() {
    return <Navbar>
        <div>
            <h1>This is SignUp Page</h1>
            <div className="signup-btn">
                <Link to='signup-page'><button>CLICK TO SIGNUP</button></Link>
            </div>
            <div className="G-signup-btn">
                <Link to='G-signup-page'><button>GOOGLE SIGNUP</button></Link>
            </div>
        </div>
            <Outlet />
    </Navbar>
}