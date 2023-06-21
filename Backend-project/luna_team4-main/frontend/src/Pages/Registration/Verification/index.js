import {ButtonRegistrationDiv, ErrorP, InputSignInStyle, SignUpDiv} from "../Signup/Signup.style";
import RegistrationTitle from "../RegistrationTitle";
import OrangeButton from "../../../Components/Button";
import {
    VerificationDiv,
    VerificationForm,
    VerificationInnerDiv,
    VerificationLeftDiv,
    VerificationRightDiv
} from "./Verification.style";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import lunaAPI from "../../../Axios/lunaApi";

const Verification = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [userLocation, setUserLocation] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorEntry, setErrorEntry] = useState(false);
    const [errorMessage, serErrorMessage] = useState("")
    const navigate = useNavigate();

    //store typed email
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    //store typed password
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    //store typed repeat password
    const handleRepeatPasswordInput = (e) => {
        setRepeatPassword(e.target.value);
    };

    //store typed username
    const handleUserNameInput = (e) => {
        setUserName(e.target.value);
    };

    //store typed verification code
    const handleVerificationCodeInput = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleLocationInput = (e) => {
        setUserLocation(e.target.value);
    };

    //check if passwords match
    useEffect(() => {
        checkPasswordMatch();
        }, [repeatPassword, userPassword]);

    const checkPasswordMatch = () => {
        if (repeatPassword !== "" && repeatPassword !== userPassword) {
          setErrorEntry(true);
          serErrorMessage("The passwords don't match")
        } else {
          setErrorEntry(false);
          serErrorMessage("")
        }
    };

     const handleSubmitButton = (e) => {
         e.preventDefault();
         verifyUser()
    }

    const verifyUser = async () => {
        const data = {
            "email": userEmail,
            "username": userName,
            "password": userPassword,
            "password_repeat": repeatPassword,
            "validation_code": verificationCode,
            "location": userLocation
        }
        try {
            let response = await lunaAPI.post('/auth/registration/validation/',data)
            navigate("/login");
        } catch (error) {
            console.log(error)
            setErrorEntry(true)
            serErrorMessage( error.response.data['error'] ||"All fields are required")
        }
      }

    return (
        <div>
            <SignUpDiv>
                <RegistrationTitle inputText={'VERIFICATION'}/>
                    <VerificationForm onSubmit={handleSubmitButton}>
                        <VerificationDiv>
                            <VerificationInnerDiv>
                                <VerificationLeftDiv>
                                    <InputSignInStyle
                                        placeholder="E-Mail Address"
                                        type="email"
                                        value={userEmail}
                                        onChange={handleEmailInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Username"
                                        value={userName}
                                        onChange={handleUserNameInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Password"
                                        type="password"
                                        value={userPassword}
                                        onChange={handlePasswordInput}
                                    />
                                </VerificationLeftDiv>
                                <VerificationRightDiv>
                                    <InputSignInStyle
                                        placeholder="Validation code"
                                        value={verificationCode}
                                        onChange={handleVerificationCodeInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Location"
                                        value={userLocation}
                                        onChange={handleLocationInput}
                                    />
                                    <InputSignInStyle
                                        placeholder="Password repeat"
                                        type="password"
                                        value={repeatPassword}
                                        onChange={handleRepeatPasswordInput}
                                    />
                                </VerificationRightDiv>
                            </VerificationInnerDiv>
                            <ErrorP>
                                {errorEntry ? errorMessage : ""}
                            </ErrorP>
                        </VerificationDiv>
                        <ButtonRegistrationDiv>
                            <OrangeButton textInput={'Finish registration'} type={"submit"}/>
                        </ButtonRegistrationDiv>
                    </VerificationForm>
            </SignUpDiv>
        </div>
    )
}

export default Verification