import { NavLink } from "react-router-dom";

export default function Navbar({children}) {
    return <div>
        <nav className="navbar">
            <ul>
                <li><NavLink className={({isActive}) => {
                    return isActive ? 'active-class' : ''
                }} to='/Home' >Home</NavLink></li>

                <li><NavLink className={({isActive}) => {
                    return isActive ? 'active-class' : ''
                }} to='/Login' >Login</NavLink></li>

                <li><NavLink className={({isActive}) => {
                    return isActive ? 'active-class' : ''
                }} to='/Signup' >SignUp</NavLink></li>
            </ul>
        </nav>
            {children}
    </div>
}