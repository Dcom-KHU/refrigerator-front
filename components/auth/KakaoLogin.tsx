import KakaoImg from '/public/logo_kakao.svg';
import styled from 'styled-components';
import { SignInBtn } from '../buttons/SignInBtn';
import Link from 'next/link';

const KakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

const KakaoLogin = () => {
    return (
        <>
            <Link href={KakaoLoginUrl}>
                <KakaoLoginBtn>
                    <KakaoImg width={40} height={40} />
                    카카오로 시작하기
                </KakaoLoginBtn>
            </Link>
        </>
    );
};

export default KakaoLogin;

const KakaoLoginBtn = styled(SignInBtn)`
    background-color: #fff;
    border: 1px solid #d5d5d5;
    & > svg {
        position: absolute;
        left: 12px;
    }
`;
