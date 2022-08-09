import type { NextPage } from 'next';
import styled from 'styled-components';
import SignInForm from '../../components/auth/SignInForm';
import SocialLogins from '../../components/auth/SocialLogins';

const SignIn: NextPage = () => {
    return (
        <>
            <SignInContainer>
                <SignInWrapper>
                    <SignInForm />
                    <SocialLogins />
                </SignInWrapper>
            </SignInContainer>
        </>
    );
};

export default SignIn;

const SignInContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const SignInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 600px;
    border-radius: 10px;
    background-color: #fff;
    & > h1 {
        font-size: 2.5rem;
    }
`;
