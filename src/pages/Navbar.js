import React, { useState } from 'react';
import * as S from '../styles/Navbar.style';
import self from '../img/self.jpg';

export default function Navbar({ onChangeTheme }) {

    const [changeNavbar, setChangeNavbar] = useState(false);

    const changeBar = () => {
        setChangeNavbar((current) => !current);
    }


    return (
        <div>
            <S.Navbar extendNav={changeNavbar}>
                <S.NavbarInner>
                    <S.LeftNav>
                        <S.NavbarLinkContainer>
                        <S.Imagem src={self}/>
                            <S.NavbarLink to="/"> Portifolio</S.NavbarLink>
                            <S.NavbarLink to="/about"> About</S.NavbarLink>
                            <S.NavbarLink to="/code"> Code</S.NavbarLink>
                            <S.NavbarLink to="/contact"> Contact</S.NavbarLink>
                            <S.OpenButton onClick={changeBar}>{changeNavbar ? <> &#10005; </> : <> &#8801; </>} </S.OpenButton>
                        </S.NavbarLinkContainer>
                    </S.LeftNav>
                    <S.RightNav>
                        <S.Linkedin onClick={() => window.open("https://www.linkedin.com/in/lucalencar/", "_blank")}/>
                        <S.GitHub onClick={() => window.open("https://github.com/lucalencar/", "_blank")}/>
                        <S.SoundCloud onClick={() => window.open("https://soundcloud.com/cinerum", "_blank")}/>
                        <S.LogoTheme onClick={onChangeTheme}></S.LogoTheme>
                    </S.RightNav>
                </S.NavbarInner>
                {changeNavbar && (
                    <S.NavbarExt>
                        <S.NavbarLinkExtended to="/"> Home</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/about"> About</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/code"> Code</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/contact"> Contact</S.NavbarLinkExtended>
                    </S.NavbarExt>
                )}
            </S.Navbar>
        </div>
    );
}