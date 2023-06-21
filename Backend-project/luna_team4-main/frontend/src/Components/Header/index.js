import {
    HeaderButtonLeft, HeaderButtonRight,
    HeaderButtonsDiv,
    HeaderDiv,
    HeaderLeftDiv,
    HeaderLinksDiv,
    HeaderRightDiv
} from "./Header.style";
import logo from "../../Assets/logo.svg"
import {NavLink, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import {ErrorP} from "../../Pages/Registration/Signup/Signup.style";

const Header = () => {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const getToken = () =>{
        const userToken = localStorage.getItem('token')
        if (userToken){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }


    const handleClickSignUp = () => {
        navigate(`/registration`)
    }
    const handleClickLogin = () => {
        navigate(`/login`)
    }

    const handleClickLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setIsLoggedIn(false)
        navigate(`/login`)
    }

    useEffect(()=>{
        getToken()
    },[localStorage.getItem('token'),isLoggedIn])

    return (
        <HeaderDiv>
            <HeaderLeftDiv >
                <img src={logo}/>
            </HeaderLeftDiv >
            <HeaderRightDiv>
                <HeaderLinksDiv>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "#646363",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "3px solid #E47D31",
                          height: "100%",
                            boxSizing: "border-box",
                        }
                      : { textDecoration: "none",
                            color: "#646363",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to="/search"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "#646363",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "3px solid #E47D31",
                          height: "100%",
                            boxSizing: "border-box",
                        }
                      : { textDecoration: "none",
                            color: "#646363",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Search</p>
                    </NavLink>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) =>
                        isActive
                        ? {
                          fontWeight: 700,
                            color: "#646363",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "3px solid #E47D31",
                          height: "100%",
                            boxSizing: "border-box",
                        }
                      : { textDecoration: "none",
                            color: "#646363",
                          display: "flex",
                          alignItems: "center",
                          height: "100%",}
                      }
                        >
                        <p>Profile</p>
                    </NavLink>
                </HeaderLinksDiv>
                <HeaderButtonsDiv>
                    <HeaderButtonLeft onClick={handleClickSignUp}>
                        SIGNUP
                    </HeaderButtonLeft>
                    <HeaderButtonRight>
                        {isLoggedIn ?
                            <p onClick={handleClickLogout}>{"LOGOUT"}</p>:
                            <p onClick={handleClickLogin}>{"LOGIN"}</p>}
                    </HeaderButtonRight>
                </HeaderButtonsDiv>
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;