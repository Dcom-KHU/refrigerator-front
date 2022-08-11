import { userState } from '../../store/authState';
import { useRecoilState } from 'recoil';
import React, { useState, useEffect } from 'react';

const ChangePwd = () => {
    const [user, setUser] = useRecoilState(userState);
    const [newPwd, setNewPwd] = useState(user.pwd);
    const [isEditting, setIsEditting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const pwdDot = user.pwd
        .split('')
        .map(() => '●')
        .join('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPwd(event.target.value);
    };

    const cancel = () => {
        setNewPwd(user.pwd);
        setIsEditting(false);
    };

    const onClick = () => {
        if (isValid) {
            setIsEditting((prev) => !prev);
            setUser({ ...user, pwd: newPwd });
        }
    };

    useEffect(() => {
        6 <= newPwd.length ? setIsValid(true) : setIsValid(false);
    }, [newPwd, isValid, setIsValid]);

    return (
        <>
            <div className="flex items-center w-80 h-12 -mt-10 text-[#2222227f] border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                {isEditting ? (
                    <>
                        <input
                            value={newPwd}
                            onChange={onChange}
                            className={`py-1 px-2 w-2/5 border-none rounded-lg outline ${
                                isValid
                                    ? 'outline-1 outline-[#d3d3d3]'
                                    : 'outline-[1.5px] outline-[#f15746]'
                            }`}
                        ></input>
                        <button
                            onClick={cancel}
                            className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            취소
                        </button>
                        <button
                            onClick={onClick}
                            className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            저장
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-lg font-semibold">{pwdDot}</span>
                        <button
                            onClick={onClick}
                            className="absolute left-[45%] py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            변경
                        </button>
                    </>
                )}
            </div>
            {!isValid && (
                <span className="text-xs text-red-500 -mt-12 -mb-5">
                    비밀번호는 6자리 이상이어야 합니다.
                </span>
            )}
        </>
    );
};

export default ChangePwd;
