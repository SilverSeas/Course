import facebook from "../../Assets/facebook.svg"
import twitter from "../../Assets/twitter.svg"
import google from "../../Assets/googleplus.svg"
import instagram from "../../Assets/instagram.svg"
import {
    FooterDisclaimerDiv,
    FooterDiv,
    FooterImagesDiv,
    FooterLeftDiv,
    FooterLogoImg,
    FooterLowDiv,
    FooterRightDiv,
    FooterUpperDiv
} from "./Footer.style";
const Footer= () => {

    return (
        <FooterDiv>
            <FooterUpperDiv>
                <FooterLeftDiv>
                        <p>About Us</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>iOS</p>
                        <p>Android</p>
                </FooterLeftDiv>
                <FooterRightDiv>
                    <FooterImagesDiv>
                        <FooterLogoImg src={facebook}/>
                        <FooterLogoImg src={twitter}/>
                        <FooterLogoImg src={google}/>
                        <FooterLogoImg src={instagram}/>
                    </FooterImagesDiv>
                </FooterRightDiv>
            </FooterUpperDiv>
            <FooterLowDiv>
                <FooterDisclaimerDiv>
                    <p>
                        © Copyright Luna 2018
                    </p>
                </FooterDisclaimerDiv>
            </FooterLowDiv>
        </FooterDiv>
    )
};

export default Footer;