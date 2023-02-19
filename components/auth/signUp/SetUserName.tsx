import React, { useState, useEffect, useCallback } from 'react';

interface propType {
    name: string;
    nickName: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setNickName: React.Dispatch<React.SetStateAction<string>>;
    nickNameIsValid: boolean;
    setNickNameIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetUserName = ({
    name,
    nickName,
    setName,
    setNickName,
    nickNameIsValid,
    setNickNameIsValid,
}: propType) => {
    const [inputStarted, setInputStarted] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'name') setName(value);
        else {
            setInputStarted(true);
            setNickName(value);
        }
    };

    const checkNickNameIsValid = useCallback(() => {
        2 <= nickName.length && nickName.length <= 8
            ? setNickNameIsValid(true)
            : setNickNameIsValid(false);
    }, [nickName, setNickNameIsValid]);

    useEffect(() => {
        checkNickNameIsValid();
    }, [checkNickNameIsValid]);

    return (
        <>
            <div className="flex justify-around w-full">
                <div className="flex flex-col items-center relative w-2/5 mb-12">
                    <div className="flex w-4/5">
                        <h3 className="font-semibold text-[13px]">이름*</h3>
                    </div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                        placeholder="예) 김철수"
                    ></input>
                </div>
                <div className="flex flex-col items-center relative w-2/5 mb-12">
                    <div className="flex w-4/5 justify-between items-center">
                        <h3
                            className={`font-semibold text-[13px] ${
                                inputStarted &&
                                !nickNameIsValid &&
                                'text-red-500'
                            }`}
                        >
                            닉네임*
                        </h3>
                        {inputStarted && !nickNameIsValid && (
                            <span className="text-[10px] md:text-[5px] text-red-500">
                                2~8자
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="nickName"
                        value={nickName}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className={`peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent ${
                            inputStarted &&
                            !nickNameIsValid &&
                            'border-b-red-500 border-b-[1.5px] focus:border-b-red-500 valid:border-b-red-500'
                        }`}
                        placeholder="2~8자"
                    ></input>
                </div>
            </div>
        </>
    );
};

export default SetUserName;
