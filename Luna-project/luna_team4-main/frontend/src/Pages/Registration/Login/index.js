import {ButtonRegistrationDiv, ErrorP, InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {LoginDiv, LoginInnerDiv} from "./Login.style";
import {useState} from "react";
import lunaAPI from "../../../Axios/lunaApi";
import {useDispatch} from "react-redux";
import {updateUserData} from "../../../Redux/Slices/user";
import {useNavigate} from "react-router-dom";
import {VerificationForm} from "../Verification/Verification.style";
import header from "../../../Components/Header";

const Login = () => {

    const [userUsername, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorEntry, setErrorEntry] = useState(false);
    const [errorMessage, serErrorMessage] = useState("")

      //store typed email
    const handleUsernameInput = (e) => {
        setEmail(e.target.value);
    };

    //store typed password
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitButton = (e) => {
         e.preventDefault();
         registerUser()
    }

    const registerUser = async () => {
        const data = {
            "username": userUsername,
            "password" : userPassword
        }

        try {
            let response = await lunaAPI.post('/auth/token/',data)
            setErrorEntry(false)
            serErrorMessage("")
            localStorage.setItem("token", response.data.access);
        } catch (error) {
            console.log(error)
            setErrorEntry(true)
            serErrorMessage("Please enter valid Username and Password")
        }
        try {
            let response2 = await lunaAPI.get('users/me/',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            }
            )
            localStorage.setItem("id", response2.data.id);
            dispatch(updateUserData(response2.data))
        } catch (error) {
            console.log(error)
        }
        if (!errorEntry){
            navigate("/profile");
        }
    }

    return (
        <div>
            <SignUpDiv>
                <RegistrationTitle inputText={'LOGIN'}/>
                <LoginDiv>
                    <VerificationForm onSubmit={handleSubmitButton}>
                        <LoginInnerDiv>
                            <InputSignInStyle
                                placeholder="Username"
                                value={userUsername}
                                onChange={handleUsernameInput}
                            />
                            <InputSignInStyle
                                placeholder="Password"
                                type="password"
                                value={userPassword}
                                onChange={handlePasswordInput}
                            />
                        </LoginInnerDiv>
                        <ErrorP>
                                {errorEntry ? errorMessage : ""}
                        </ErrorP>
                        <ButtonRegistrationDiv>
                            <OrangeButton textInput={'Login'} type={"submit"}/>
                        </ButtonRegistrationDiv>
                    </VerificationForm>
                </LoginDiv>
            </SignUpDiv>
        </div>
    )
}

export default Login