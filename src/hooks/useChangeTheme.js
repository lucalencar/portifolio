import { useState } from 'react';

export default function useTheme() {

  const themeLight = {
    primary: '#DDCF9D',
    secondary: 'black',
    primaryNav: '#0096D5',
    secondaryNav: 'black',
    hover: '#64CFCF',
    hoverItem: '#5B595A',
    contactPrimary: '#121212',
    contactSecondary: '#DDCF9D',
    buttonPrimary: '#956CAE',
    iconPrimary: '#121212',
    navClick: '#EA6E9A',
    BoxPrimary: '#202020',
    BoxSecondary: '#DDCF9D',
    BoxButtonPrimary: '#DDCF9D',
    BoxButtonSecondary: '#121212',
    BoxButtonHover: '#0096D5',
    BoxButtonHoverSecondary: '#121212',
    BoxHoverPrimary: '#121212',
    BoxHoverSecondary: '#f4f4f4',
    TituloPrimary: '#7A4D95',
    InputHover: '#0096D5',
  }

  const themeDark = {
    primary: '#303030',
    secondary: '#DDCF9D',
    primaryNav: '#121212',
    secondaryNav: '#DDCF9D',
    hover: '#EA6E9A',
    hoverItem: '#EA6E9A',
    contactPrimary: '#DDCF9D',
    contactSecondary: '#101010',
    buttonPrimary: '#EA6E9A',
    iconPrimary: '#DDCF9D',
    navClick: '#B0D5DB',
    BoxPrimary: '#DDCF9D',
    BoxSecondary: '#121212',
    BoxButtonPrimary: '#121212',
    BoxButtonSecondary: '#f4f4f4',
    BoxButtonHover: '#EA6E9A',
    BoxButtonHoverSecondary: '#121212',
    BoxHoverPrimary: '#606060',
    BoxHoverSecondary: '#121212',
    TituloPrimary: '#0096D5',
    InputHover: '#0096D5',
  }

  const [theme, setTheme] = useState(themeDark);

  const changeTheme = () => {
    if (theme.primary === '#DDCF9D') {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }

  return {
    theme, changeTheme
  };
}
