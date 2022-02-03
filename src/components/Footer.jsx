import styled from "styled-components";
import { config } from "../config";
import logoSrc from "../assets/images/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const FooterStyled = styled.footer`
    display: flex;
    background-color: ${config.colors.tertiary};
    align-items: center;
    justify-content: center;
    padding: 40px;
    flex-direction: column;
    color: white;
`;

const LogoStatic = styled.img`
    margin: 0px 10px 10px 0;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const ContactStyled = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #8d8d8d;
`;

const Contact = ({ icon: Icon, children }) => {
    return (
        <ContactStyled>
            <IconContext.Provider value={{ style: { marginRight: "5px" } }}>
                <Icon />
            </IconContext.Provider>
            {children}
        </ContactStyled>
    );
};

const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    & li:last-child {
        margin-bottom: 0;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <InfoContainer>
                <LogoStatic src={logoSrc} alt="Logo da codify" />
                <ContactList>
                    <Contact icon={AiOutlineMail}>
                        codifycommunity@gmail.com
                    </Contact>
                    <Contact icon={IoShareSocialSharp}>
                        @codifycommunity
                    </Contact>
                </ContactList>
            </InfoContainer>
        </FooterStyled>
    );
};

export default Footer;
