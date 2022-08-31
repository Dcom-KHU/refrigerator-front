import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { userState, isAuthedState } from '../../../store/authState';
import { useSetRecoilState } from 'recoil';
import axios from '../../../util/axios';
import SetUserInfo from './SetUserInfo';
import SetUserName from './SetUserName';
import { AxiosError } from 'axios';

const SignUpForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [nickName, setnickName] = useState('');

    const [emailIsValid, setEmailIsValid] = useState(false);
    const [pwdIsValid, setPwdIsValid] = useState(false);
    const [nickNameIsValid, setNickNameIsValid] = useState(false);

    const setUser = useSetRecoilState(userState);
    const setIsAuthed = useSetRecoilState(isAuthedState);
    const checkIsValid = useCallback(() => {
        return emailIsValid && pwdIsValid && nickNameIsValid;
    }, [emailIsValid, pwdIsValid, nickNameIsValid]);

    const signUp = async (
        email: string,
        password: string,
        name: string,
        nickname: string
    ) => {
        try {
            const res = await axios({
                method: 'POST',
                url: '/user/join',
                data: { email, name, nickname, password },
            });
            if (200 <= res.status && res.status < 300) {
                const {
                    email,
                    password,
                    name,
                    nickname,
                    point,
                    notificationFood,
                    notificationRefrigerator,
                    id,
                } = res.data;
                setUser({
                    email,
                    password,
                    name,
                    nickname,
                    point,
                    notificationFood,
                    notificationRefrigerator,
                    id,
                });
                router.push('/');
                setIsAuthed(true);
            } else throw new Error();
        } catch (err) {
            const error = err as AxiosError;
            if (error.response?.status == 400) {
                alert('이미 존재하는 이메일입니다.');
            }
        }
    };

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!checkIsValid()) {
            alert('올바르지 않은 형식입니다.');
            return;
        }
        signUp(email, pwd, name, nickName);
    };

    useEffect(() => {
        checkIsValid();
    }, [checkIsValid]);

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center w-full mb-[50px]"
            >
                <h1 className="mt-[50px] mb-[80px] text-3xl font-semibold">
                    회원가입
                </h1>
                <SetUserInfo
                    email={email}
                    setEmail={setEmail}
                    pwd={pwd}
                    setPwd={setPwd}
                    emailIsValid={emailIsValid}
                    setEmailIsValid={setEmailIsValid}
                    pwdIsValid={pwdIsValid}
                    setPwdIsValid={setPwdIsValid}
                />
                <SetUserName
                    name={name}
                    setName={setName}
                    nickName={nickName}
                    setNickName={setnickName}
                    nickNameIsValid={nickNameIsValid}
                    setNickNameIsValid={setNickNameIsValid}
                />
                <button
                    type="submit"
                    className="flex justify-center items-center relative w-4/5 h-[60px] bg-neutral-200 rounded-2xl mt-2 font-medium cursor-pointer hover:bg-black hover:text-white"
                >
                    가입하기
                </button>
            </form>
        </>
    );
};
export default SignUpForm;
