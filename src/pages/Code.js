import * as S from '../styles/Code.style';
import useRepository from '../hooks/useRepository';
import * as F from '../styles/styles';

export default function Code() {

    const { repoList, repoAno } = useRepository();

    return (
        <F.MainBox>
            <F.BottomBox>
                <F.Titulos>@Git Repositories</F.Titulos>
                <S.Cards>
                    {repoList.map((repo, index) => (
                        <S.Card>
                            <S.CardText key={index}>
                                {repo.name}
                                <S.CardLanguage key={index}>{repo.language}</S.CardLanguage>
                            </S.CardText>
                            <S.CardButtons>
                                <S.CardButton onClick={() => window.open(repo.html_url, "_blank")}>
                                    View
                                </S.CardButton>
                                <S.CardBottomText key={index}>
                                    {repoAno(repo.created_at)}
                                </S.CardBottomText>
                            </S.CardButtons>
                        </S.Card>
                    ))}
                </S.Cards>
            </F.BottomBox>
        </F.MainBox>
    );

}
