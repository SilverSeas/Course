import OrangeButton from "../../../Components/Button";
import {
    SignUpDiv,
    InputSignInStyle,
    RegistrationContentDiv, ButtonRegistrationDiv, ErrorP
} from "./Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import lunaAPI from "../../../Axios/lunaApi";
import CategoryList from "../../Search/CategoryList";

const Registration = () => {
    const navigate = useNavigate();
    const [userEmail, setEmail] = useState("");
    const [errorEntry, setErrorEntry] = useState(false);
    const [errorMessage, serErrorMessage] = useState("")
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        registerUser()
    };

    const registerUser = async () => {
        const data = {
            "email": userEmail
        }
        try {
            let response = await lunaAPI.post('/auth/registration/',data)
            setErrorEntry(false)
            navigate("/registration-message");
        } catch (error) {
            console.log(error)
            setErrorEntry(true)
            serErrorMessage(error.response.data['email'] || error.response.data['error'])
        }
      }

    return (
            <SignUpDiv>
                <RegistrationTitle inputText={'REGISTRATION'}/>
                <RegistrationContentDiv>
                    <form>
                        <InputSignInStyle
                            placeholder="E-Mail Address"
                            type="email"
                            value={userEmail}
                            onChange={handleEmailInput}
                        ></InputSignInStyle >

                    </form>
                        {errorEntry ?
                            <ErrorP>{errorMessage}</ErrorP>:
                        ""}
                    <ButtonRegistrationDiv>
                        <OrangeButton textInput={'Register'} onClickAction={handleRegisterClick}/>
                    </ButtonRegistrationDiv>
                </RegistrationContentDiv>
            </SignUpDiv>
    )
}

export default Registration