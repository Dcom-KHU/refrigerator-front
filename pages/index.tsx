import type { NextPage } from 'next';
import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { isAuth } from '../store/authState';
declare global {
    interface Window {
        //window의 naver, Kakao를 가져오기 위해 선언
        naver: any;
        Kakao: any;
    }
}

const Home: NextPage = () => {
    const [isAuthed, setIsAuthed] = useRecoilState(isAuth);

    const checkAuthed = useCallback(() => {
        const token = localStorage.getItem('loginToken');
        if (token) setIsAuthed(true);
        else setIsAuthed(false);
    }, [setIsAuthed]);

    useEffect(() => {
        //로그인 상태인지 확인
        checkAuthed();
        //Oauth로그인 후 access code 찍어보는 코드 / 나중에 지울예정
        isAuthed ? console.log('Authed') : console.log('not Authed');
        console.log('token :', localStorage.getItem('loginToken'));
    }, [isAuthed, setIsAuthed, checkAuthed]);

    return (
        <>
            <h1>:D</h1>
        </>
    );
};

export default Home;
