import styled from "styled-components";


export const Box = styled.div`

display: flex;
flex-direction: column;
flex: 1 1 0;
align-items: left;
padding-left: 3%;
justify-content: top;
background-color: ${props => props.theme.primary};
color: ${props => props.theme.secondary};
`;

export const MainBox = styled.div`
  height: 100%;
  display: flex;
`;

export const LeftBox = styled.div`
  flex: 1 1 0;
  width: 50vw;
  height: 100vh;
`;

export const RightBox = styled.div`
  flex: 1 1 0;
  width: 50vw;
  height: 100vh;

`;


export const Lista = styled.ul`
font-size: 14px;
`;

export const ListaRight = styled(Lista)`
  text-align: right;
  padding-right: 3%;
`;

export const itemLista = styled.li`
    &:hover {
        color: ${props => props.theme.hoverItem};
        cursor: pointer;
    }    
`;

export const Titulos = styled.h3`
color: ${props => props.theme.TituloPrimary};
`;

export const Texto = styled.div`
font-size: 15px;
text-align: justify;
`;

export const TituloRight = styled(Titulos)`
  text-align: right;
  padding-right: 3%;
`;

