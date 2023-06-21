import {OrangeButtonStyle} from "./OrangeButton.style";

const OrangeButton = ({textInput, onClickAction, type}) =>{

    return (
        <OrangeButtonStyle onClick={onClickAction} type={type}>
            {textInput}
        </OrangeButtonStyle>

    )
}

export default OrangeButton