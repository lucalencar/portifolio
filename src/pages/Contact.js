import * as S from '../styles/styles';
import * as C from '../styles/contact.style';

export default function Contact() {
    return (
        <S.MainBox>
            <S.Titulos>@Send Email</S.Titulos>
            <S.LeftBox>
            <C.FormDiv>
        <C.Form action="mailto:lucalencar@gmail.com" method="GET">
          <C.Label>Nome</C.Label>
          <C.Input type="Nome" name="nome" />

          <C.Label>Email</C.Label>
          <C.Input type="email" name="email" />

          <C.Label>Mensagem</C.Label>
          <C.Mensagem type="message" rows="5" name="message" />

          <C.Button type="submit" value="send">Enviar</C.Button>
        </C.Form>
      </C.FormDiv>
            </S.LeftBox>
            <S.RightBox ><C.Bground></C.Bground></S.RightBox>
        </S.MainBox>
    );
}