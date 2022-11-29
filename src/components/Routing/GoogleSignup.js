import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function GoogleSignup(){
    const location = useLocation()
    // FOR EXAMPLE -
    // http://localhost:3000/Signup/G-signup-page?q=123
    console.log(location) // object
    console.log(location.search) // ?q=123
    const searchParams = new URLSearchParams(location.search)
    console.log(searchParams.get('q')) // 123
    return <div>
        <h2>WELCOME TO GOOGLE SIGNUP</h2>
        <Link to='/Home'><button>LOG OUT</button></Link>
    </div>
} 