import React, { useState, useEffect, useCallback } from 'react';
interface propType {
    email: string;
    pwd: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPwd: React.Dispatch<React.SetStateAction<string>>;
    emailIsValid: boolean;
    setEmailIsValid: React.Dispatch<React.SetStateAction<boolean>>;
    pwdIsValid: boolean;
    setPwdIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetUserInfo = ({
    email,
    pwd,
    setEmail,
    setPwd,
    emailIsValid,
    setEmailIsValid,
    pwdIsValid,
    setPwdIsValid,
}: propType) => {
    const [emailStarted, setEmailStarted] = useState(false);
    const [pwdStarted, setPwdStarted] = useState(false);

    const checkEmailIsValid = useCallback(() => {
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            ? setEmailIsValid(true)
            : setEmailIsValid(false);
    }, [email, setEmailIsValid]);

    const checkPwIsValid = useCallback(() => {
        pwd.length >= 6 &&
        pwd.length <= 16 &&
        /[0-9]/.test(pwd) &&
        /[a-zA-Z]/.test(pwd)
            ? setPwdIsValid(true)
            : setPwdIsValid(false);
    }, [pwd, setPwdIsValid]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') {
            setEmailStarted(true);
            setEmail(value);
        } else {
            setPwdStarted(true);
            setPwd(value);
        }
    };

    useEffect(() => {
        checkEmailIsValid();
        checkPwIsValid();
    }, [checkEmailIsValid, checkPwIsValid]);

    return (
        <>
            <div className="flex w-4/5 justify-between items-center">
                <h3
                    className={`font-semibold text-[13px] ${
                        emailStarted && !emailIsValid && 'text-red-500'
                    }`}
                >
                    이메일*
                </h3>
                {emailStarted && !emailIsValid && (
                    <span className="text-[10px] md:text-[5px] text-red-500">
                        올바른 이메일을 입력해주세요.
                    </span>
                )}
            </div>
            <div className="flex justify-center relative w-full mb-12">
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={onChange}
                    autoComplete="off"
                    required
                    className={`peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent ${
                        emailStarted &&
                        !emailIsValid &&
                        'border-b-red-500 border-b-[1.5px] focus:border-b-red-500 valid:border-b-red-500'
                    }`}
                    placeholder="예) example@example.com"
                ></input>
            </div>

            <div className="flex w-4/5 justify-between items-center">
                <h3
                    className={`font-semibold text-[13px] ${
                        pwdStarted && !pwdIsValid && 'text-red-500'
                    }`}
                >
                    비밀번호*
                </h3>
                {pwdStarted && !pwdIsValid && (
                    <span className="text-[10px] md:text-[5px] text-red-500">
                        영문,숫자 조합 6~16자
                    </span>
                )}
            </div>
            <div className="flex justify-center relative w-full mb-12">
                <input
                    type="password"
                    id="pwd"
                    value={pwd}
                    onChange={onChange}
                    autoComplete="off"
                    required
                    className={`peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent ${
                        pwdStarted &&
                        !pwdIsValid &&
                        'border-b-red-500 border-b-[1.5px] focus:border-b-red-500 valid:border-b-red-500'
                    }`}
                    placeholder="영문, 숫자 조합 6~16자"
                ></input>
            </div>
        </>
    );
};

export default SetUserInfo;
