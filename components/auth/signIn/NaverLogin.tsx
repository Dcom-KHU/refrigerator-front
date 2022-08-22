import React from 'react';
import NaverSVG from '/public/logo_naver.svg';
import Link from 'next/link';

const NaverLoginUrl = 'http://20.38.46.151:8080/oauth2/authorization/naver';

const NaverLogin = () => {
    return (
        <>
            <Link href={NaverLoginUrl}>
                <div className="flex justify-center items-center relative w-4/5 h-[60px] bg-white border-[1px] border-solid border-[#d5d5d5] rounded-2xl mt-2 font-medium cursor-pointer">
                    <NaverSVG
                        width={32}
                        height={32}
                        style={{
                            position: 'absolute',
                            left: '15px',
                        }}
                    />
                    네이버로 시작하기
                </div>
            </Link>
        </>
    );
};

export default NaverLogin;
