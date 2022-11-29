import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import './Routing.css'
import Home from "./Home"
import Login from "./Login"
import SignUp from "./Signup"
import SignupPage from "./SignupPage"
import GoogleSignup from "./GoogleSignup"
import DefaultSignup from "./DefaultSignup"

function NotFound() {
    return <div>
        Page Not Found
    </div>
}

const RoutingBase = () => {
    
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='Home' />} />
                <Route path="Home" element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<SignUp />}>
                    <Route path="Signup-page" element={<SignupPage />}/>
                    <Route path="G-Signup-page" element={<GoogleSignup />}/>
                    <Route index element={<DefaultSignup />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
}

export { RoutingBase }