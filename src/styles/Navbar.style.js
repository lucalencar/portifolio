import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { FaSoundcloud, FaGithubAlt, FaLinkedin } from 'react-icons/fa';


export const Navbar = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNav ? "100vh" : "80px")};
    background-color: ${props => props.theme.primaryNav};
    display: flex;
    flex-direction: column;
    margin: 0px;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftNav = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 3%;
`;

export const RightNav = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavbarInner = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: ${props => props.theme.secondaryNav};
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    line-height: 80px; 
    display: block; 
    
    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
    
    &:active {
        color: #C5AE5C;
    }

    @media (max-width: 700px) {
        display: none;
    }`;

export const NavbarLinkExtended = styled(Link)`
color: #DDCF9D;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
`;

export const LogoTheme = styled(BsSun)`
    margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
    
    &:active {
        color: ${props => props.theme.navClick};
    }
`;

export const OpenButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const SoundCloud = styled(FaSoundcloud)`
    margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
    
    &:active {
        color: ${props => props.theme.navClick};
    }
`;

export const GitHub = styled(FaGithubAlt)`
    margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
    
    &:active {
        color: ${props => props.theme.navClick};
    }
`;

export const Linkedin = styled(FaLinkedin)`
    margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
    
    &:active {
        color: ${props => props.theme.navClick};
    }
`;

export const Imagem = styled.img`
    height: auto;
    width: auto;
    max-height: 90px;
    max-width: 250px;
    opacity: 0.9;
`;
