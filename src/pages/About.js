import * as S from '../styles/styles.js';


export default function Home() {
    return (
        <div>
            <S.Titulos>@Lucas Alencar</S.Titulos>
            <S.MainBox>
                <S.LeftBox>
                    <S.Lista>
                        <S.itemLista>Desenvolvedor Full Stack</S.itemLista>
                        <S.itemLista>Músico / Compositor</S.itemLista>
                        <S.itemLista>Modelagem de Dados/SQL</S.itemLista>
                        <S.itemLista>Programação Musical</S.itemLista>
                    </S.Lista>
                    <S.Titulos>Línguas</S.Titulos>
                    <S.Lista>
                        <S.itemLista>Português Nativo</S.itemLista>
                        <S.itemLista>Inglês Fluente</S.itemLista>
                        <S.itemLista>Francês Fluente</S.itemLista>
                        <S.itemLista>Espanhol Intermediário</S.itemLista>
                    </S.Lista>
                    <S.Titulos>Educação</S.Titulos>
                    <S.Lista>
                        <S.itemLista>Análise e Desenvolvimento de Sistemas</S.itemLista>
                        <S.Lista>
                            <S.itemLista>2021, Unit PE - Recife, Pernambuco, Brasil</S.itemLista>
                        </S.Lista>

                        <S.itemLista>Maitrise en Composition Électroacoustique</S.itemLista>
                        <S.Lista>
                            <S.itemLista>2012, UdeM - Montreal, Québec, Canada</S.itemLista>
                        </S.Lista>

                        <S.itemLista>Licenciatura em Música</S.itemLista>
                        <S.Lista>
                            <S.itemLista>Graduação</S.itemLista>
                            <S.itemLista>2008, UFPE - Recife, Pernambuco, Brasil</S.itemLista>
                        </S.Lista>
                    </S.Lista>
                </S.LeftBox>
                <S.RightBox>
                    <S.TituloRight> Competências</S.TituloRight>
                    <S.ListaRight>
                        <S.itemLista>Java * Spring Boot</S.itemLista>
                        <S.itemLista>Angular * JS * TypeScript</S.itemLista>
                        <S.itemLista>React/Redux</S.itemLista>
                        <S.itemLista>Python * Django</S.itemLista>
                        <S.itemLista>MySQL * MariaDB * SQL Server * SQLite</S.itemLista>
                        <S.itemLista>GNU/Linux</S.itemLista>
                        <S.itemLista>Pure/Data * SuperCollider * OpenMusic</S.itemLista>
                        <S.itemLista>Pro Tools * Reaper * Audacity * Ardour</S.itemLista>
                    </S.ListaRight>
                    <S.TituloRight> Experiência</S.TituloRight>
                    <S.ListaRight>
                        <S.itemLista>Testes e Localização de Aplicativos Mobile</S.itemLista>
                        <S.itemLista>Edição, Captação e Produção Musical</S.itemLista>
                        <S.itemLista>Professor de Música</S.itemLista>
                        <S.itemLista>Composição Musical para Trilhas</S.itemLista>
                        <S.itemLista>Bootcamp Accenture/Porto Digital Full Stack</S.itemLista>
                        <S.itemLista>Academia Accenture Front-End</S.itemLista>
                    </S.ListaRight>
                </S.RightBox>
            </S.MainBox>
        </div>
    );
}