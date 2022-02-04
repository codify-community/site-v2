import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const HeaderStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 80px;
    background-color: #24272b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    transition: all 0.5s ease;
    z-index: 10;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavTxt = styled.p`
    color: #f3f3f3;
    text-decoration: none;
    font-size: 1.3rem;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    &:hover {
        border-bottom: 2px solid #2176ff;
        transform: scale(1.1);
    }
    @media (max-width: 450px) {
        display: flex;
    }
`;

const Header = () => {
    //const [scrollPosition, setScrollPosition] = useState(0);
    const [HeaderMode, setHeaderMode] = useState("header");
    const handleScroll = () => {
        const position = window.pageYOffset;
        //setScrollPosition(position);
        if (position > 0) {
            //setScrollPosition(position);
            setHeaderMode("header_on");
        } else {
            setHeaderMode("header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HeaderStyled className={HeaderMode}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Logo />
            </Link>
            <Nav>
                <Link
                    to="comandos/"
                    style={{ textDecoration: "none", paddingLeft: "0rem" }}
                >
                    <NavTxt>Comandos</NavTxt>
                </Link>
                <Link
                    to="ranking/"
                    style={{ textDecoration: "none", paddingLeft: "1rem" }}
                >
                    <NavTxt>Ranking</NavTxt>
                </Link>
            </Nav>
        </HeaderStyled>
    );
};

export default Header;
