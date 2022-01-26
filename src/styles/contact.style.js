import styled from "styled-components";
import myBg from '../img/gray.png';

export const Bground = styled.div`
  background-image: url(${myBg});
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
`;

export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10%;
  margin-right: 30%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  padding: 10px 0;
`;

export const Input = styled.input`
  padding: 10px 15px;
  background: ${props => props.theme.contactPrimary};
  color: ${props => props.theme.contactSecondary};
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Mensagem = styled.textarea`
  background: ${props => props.theme.contactPrimary};
  color: ${props => props.theme.contactSecondary};
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  color: #101010;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.theme.buttonPrimary};
  border: none;
  border-radius: 7px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
        color: #101010;
        background: #0096D5;
        cursor: pointer;
    }    
    
    &:active {
        color: #101010;
        background: #956CAE;
    }
`;
