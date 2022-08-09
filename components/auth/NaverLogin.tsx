import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import NaverSVG from '/public/logo_naver.svg';
import { SignInBtn } from '../buttons/SignInBtn';

const NaverLogin = () => {
    const naverRef = useRef<HTMLDivElement>(null);

    const initNaverLogin = () => {
        //로그인 로직
        if (typeof window.naver != 'undefined') {
            const naverLogin = new window.naver.LoginWithNaverId({
                clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
                callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL,
                isPopup: false,
                loginButton: { color: 'white', type: 3, height: 50 },
                callbackHandle: true,
            });
            naverLogin.init();
        }
    };

    useEffect(() => {
        initNaverLogin();
    }, []);

    const onClick = () => {
        //클릭시 버튼 커스텀을 위해 naverRef가 있는 div의 첫번째 child인 anchor가 눌리도록함.
        (naverRef.current?.children[0] as HTMLAnchorElement).click();
    };

    return (
        <>
            <div
                ref={naverRef}
                id="naverIdLogin"
                style={{ display: 'none' }}
            ></div>
            <NaverLoginBtn onClick={onClick}>
                <NaverSVG
                    width={32}
                    height={32}
                    style={{
                        position: 'absolute',
                        left: '15px',
                    }}
                />
                네이버로 시작하기
            </NaverLoginBtn>
        </>
    );
};

export default NaverLogin;

const NaverLoginBtn = styled(SignInBtn)`
    border: 1px solid #d5d5d5;
    background-color: #fff;
`;
