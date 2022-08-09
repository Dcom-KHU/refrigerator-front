import styled from 'styled-components';
import UserProfile from '../components/user/UserProfile';
const Mypage = () => {
    return (
        <>
            <ProfileConatiner>
                <ProfileWrapper>
                    <TitleWrapper>
                        <h1>프로필 정보</h1>
                    </TitleWrapper>
                    <UserProfile />
                </ProfileWrapper>
            </ProfileConatiner>
        </>
    );
};

export default Mypage;

const ProfileConatiner = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    height: 480px;
    border-radius: 10px;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: 95%;
    height: 90px;
    & > h1 {
        margin-left: 20px;
        font-size: 1.5rem;
        font-weight: 550;
    }
    border-bottom: 3px solid #222;
`;
