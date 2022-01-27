import styled from "styled-components";

export const Cards = styled.div`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    padding: 8px 0 100px 0;
    margin: 0 0 0 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (208px);
    grid-template-columns: repeat(4, 208px);
    justify-content: center;
    grid-gap: 50px; 
`;

export const Card = styled.div`
    background-color: ${props => props.theme.BoxPrimary};
    color: ${props => props.theme.BoxSecondary};
    -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px; 
    &:hover {
    -webkit-transition: all .2s;
    transition: all .2s; 
    background-color: ${props => props.theme.BoxHoverPrimary};
    color: ${props => props.theme.BoxHoverSecondary}; 
    cursor: pointer;
    opacity: 0.7;
    }
`;

export const CardText = styled.div`
    padding: 30px;
    font-size: 18px; 
    font-weight: bold;
`;

export const CardLanguage = styled.div`
    font-size: 15px; 
    opacity: 0.6;
`;

export const CardButtons = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50px 50px 1fr;
    grid-template-columns: 50px 50px 1fr;
    padding: 15px;
`;

export const CardButton = styled.div`
    display: -ms-grid;
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 15px;
    height: 30px;
    color: ${props => props.theme.BoxButtonSecondary};
    background: ${props => props.theme.BoxButtonPrimary};
    border: 1px solid black;
    border-radius: 5px;

    &:hover {
    -webkit-transition: all .2s;
    transition: all .2s; 
    background-color: ${props => props.theme.BoxButtonHover};
    color: ${props => props.theme.BoxButtonHoverSecondary}; 
    cursor: pointer;
}
`;

export const CardBottomText = styled.div`
    text-align: right;
    margin: 0;
    padding-top: 5px;
    font-size: 15px;
    opacity: 0.6; 
    color: ${props => props.theme.BoxSecondary};
`;
