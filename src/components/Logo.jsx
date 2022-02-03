import styled from "styled-components";
import logoSrc from "../assets/images/logo.gif";

const LogoStyled = styled.img`
    width: ${(props) => props.size || "48px"};
    height: ${(props) => props.size || "48px"};
    border-radius: ${(props) =>
        props.size ? `${parseInt(props.size) / 2}px` : "24px"};
`;

const Logo = (props) => {
    return (
        <LogoStyled {...props} src={logoSrc} alt="Logo da codify" {...props} />
    );
};

export default Logo;
