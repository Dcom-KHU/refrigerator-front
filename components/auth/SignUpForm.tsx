import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isAuth } from '../../store/authState';
import SetUserInfo from './SetUserInfo';

const SignUpForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [nickName, setnickName] = useState('');
    const [isAuthed, setIsAuthed] = useRecoilState(isAuth);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') setEmail(value);
        else setPwd(value);
    };

    const checkIsValid = () => {
        return (
            email.trim() != '' &&
            email.includes('@') &&
            pwd.length >= 6 &&
            pwd.length <= 16 &&
            /[0-9]/.test(pwd) &&
            /[a-zA-Z]/.test(pwd) &&
            nickName.length >= 2 &&
            nickName.length <= 8
        );
    };

    const signUp = async (
        email: string,
        pwd: string,
        name: string,
        nickName: string
    ) => {
        if (checkIsValid()) {
            try {
                const res = await axios.post(
                    'API 작성',
                    { email, pwd, name, nickName },
                    {
                        withCredentials: true,
                    }
                );
                const { accessToken } = res?.data;
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${accessToken}`;
                setIsAuthed(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const onSubmit = (event: React.SyntheticEvent) => {
        //회원가입 로직 짜야함
        event.preventDefault();
        if (!checkIsValid()) {
            alert('올바르지 않은 형식입니다.');
            return;
        }
        signUp(email, pwd, name, nickName);
        router.replace('/');
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center w-full mb-[50px]"
            >
                <h1 className="mt-[50px] mb-[80px] text-3xl font-semibold">
                    회원가입
                </h1>
                <div className="flex w-4/5">
                    <h3 className="font-semibold text-[13px]">이메일*</h3>
                </div>
                <div className="flex justify-center relative w-full mb-12">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                        placeholder="예) example@example.com"
                    ></input>
                </div>
                <div className="flex w-4/5">
                    <h3 className="font-semibold text-[13px]">비밀번호*</h3>
                </div>
                <div className="flex justify-center relative w-full mb-12">
                    <input
                        type="password"
                        id="pwd"
                        value={pwd}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                        placeholder="영문, 숫자 조합 6~16자"
                    ></input>
                </div>
                <SetUserInfo
                    name={name}
                    setName={setName}
                    nickName={nickName}
                    setNickName={setnickName}
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
