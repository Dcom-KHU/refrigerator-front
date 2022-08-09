import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isAuth } from '../../store/authState';

//로그인 시 access code를 발급 받기 위한 callback uri
const NaverCallBack = () => {
    const router = useRouter();
    const [isAuthed, setIsAuthed] = useRecoilState(isAuth);

    useEffect(() => {
        const AccessCode = window.location.href.split('=')[1].split('&')[0];
        //callback uri안에 access code 추출 후 로컬에 저장
        localStorage.setItem('loginToken', JSON.stringify(AccessCode));
        setIsAuthed(true);
        router.replace('/');
    }, [isAuthed, setIsAuthed]);

    return (
        <>
            <h1>Loading...</h1>
        </>
    );
};

export default NaverCallBack;
