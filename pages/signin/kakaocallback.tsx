import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isAuth } from '../../store/authState';

//로그인 시 access code를 발급 받기 위한 callback uri
const KakaoCallBack = () => {
    const router = useRouter();
    const [isAuthed, setIsAuthed] = useRecoilState(isAuth);

    useEffect(() => {
        //callback uri안에 access code 추출 후 로컬에 저장
        const AccessCode = new URL(window.location.href).searchParams.get(
            'code'
        );
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

export default KakaoCallBack;
