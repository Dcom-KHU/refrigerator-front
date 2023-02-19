import React, { useState } from 'react';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { userState, isAuthedState } from '../../../store/authState';
import { signIn } from '../../../util/auth';
import { useRouter } from 'next/router';

const SignInForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const setUser = useSetRecoilState(userState);
    const setIsAuthed = useSetRecoilState(isAuthedState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') setEmail(value);
        else setPwd(value);
    };

    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const user = await signIn(email, pwd);
        if (user) {
            setUser(user);
            setIsAuthed(true);
            router.replace('/');
        }
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-center w-full mb-[50px]"
            >
                <h1 className="mt-[50px] mb-[80px] text-3xl font-semibold">
                    LOGIN
                </h1>
                <div className="flex justify-center relative w-full mb-12">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px]"
                    ></input>
                    <label
                        htmlFor="email"
                        className="absolute mt-3 left-[11%] text-sm text-[#c9c9c9] hover:cursor-auto peer-focus:text-black peer-focus:text-xs peer-focus:animate-labelUp peer-valid:text-black peer-valid:text-xs peer-valid:animate-labelUp"
                    >
                        이메일
                    </label>
                </div>
                <div className="flex justify-center relative w-full mb-12">
                    <input
                        type="password"
                        id="pwd"
                        value={pwd}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px]"
                    ></input>
                    <label
                        htmlFor="pwd"
                        className="absolute mt-3 left-[11%] text-sm text-[#c9c9c9] hover:cursor-auto peer-focus:text-black peer-focus:text-xs peer-focus:animate-labelUp peer-valid:text-black peer-valid:text-xs peer-valid:animate-labelUp"
                    >
                        비밀번호
                    </label>
                </div>
                <div className="flex justify-end w-4/5 h-auto -mt-8 mb-8 text-sm ">
                    <Link href="join">
                        <span className="hover:cursor-pointer">회원가입</span>
                    </Link>
                </div>
                <button
                    type="submit"
                    className="flex justify-center items-center relative w-4/5 h-[60px] bg-neutral-200 rounded-2xl mt-2 font-medium cursor-pointer hover:bg-black hover:text-white"
                >
                    로그인
                </button>
            </form>
        </>
    );
};
export default SignInForm;
