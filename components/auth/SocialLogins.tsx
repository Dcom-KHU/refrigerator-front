import NaverLogin from './NaverLogin';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';
const SocialLogins = () => {
    return (
        <>
            <SocialLoginsWrapper>
                <NaverLogin />
                <KakaoLogin />
            </SocialLoginsWrapper>
        </>
    );
};

export default SocialLogins;

const SocialLoginsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: -10px;
`;
