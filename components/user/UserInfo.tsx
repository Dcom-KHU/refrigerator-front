import styled from 'styled-components';
import { UserInfoBtn } from './UserProfile';

const UserInfo = () => {
    return (
        <>
            <LoginInfoContainer>
                <LoginInfoText>로그인 정보</LoginInfoText>
                <LoginInfoLineWrapper>
                    <span>이메일 주소</span>
                    <LoginInfoLine>
                        email@email.com{' '}
                        <UserInfoBtn
                            style={{
                                position: 'absolute',
                                marginLeft: '260px',
                            }}
                        >
                            변경
                        </UserInfoBtn>
                    </LoginInfoLine>
                    <span>비밀번호</span>
                    <LoginInfoLine>
                        ●●●●●●●●●
                        <UserInfoBtn
                            style={{
                                position: 'absolute',
                                marginLeft: '260px',
                            }}
                        >
                            변경
                        </UserInfoBtn>
                    </LoginInfoLine>
                </LoginInfoLineWrapper>
            </LoginInfoContainer>
        </>
    );
};

export default UserInfo;

const LoginInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    margin-top: 10px;
    border-bottom: 1.3px solid #d3d3d3;
`;

const LoginInfoText = styled.h2`
    width: 100%;
    height: 30px;
    margin-top: 25px;
    margin-left: 20px;
    font-weight: 500;
    font-size: 1.1rem;
`;

const LoginInfoLineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 320px;
    margin-left: 40px;
    & > span {
        font-size: 0.8rem;
        color: rgba(34, 34, 34, 0.5);
    }
`;

const LoginInfoLine = styled.div`
    display: flex;
    align-items: center;
    width: 320px;
    height: 50px;
    margin-top: -40px;
    border-bottom: 1.3px solid #d3d3d3;
    color: rgba(34, 34, 34, 0.5);
    font-size: 1.1rem;
`;
