import React, { useState, useEffect, useCallback } from 'react';
import { userState } from '../../store/authState';
import { useRecoilState } from 'recoil';

const ChangeNickName = () => {
    const [user, setUser] = useRecoilState(userState);
    const [newName, setNewName] = useState<string>();

    const [isEditting, setIsEditting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const checkIsValid = useCallback(() => {
        if (newName && 2 <= newName.length && newName.length <= 8)
            setIsValid(true);
        else setIsValid(false);
    }, [newName]);

    useEffect(() => {
        if (user === null) return;
        setNewName(user.nickname);
    }, [user]);

    useEffect(() => {
        checkIsValid();
    }, [checkIsValid]);

    return (
        <>
            <div className="flex items-center w-full h-24 border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                {isEditting ? (
                    <>
                        <input
                            value={newName}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setNewName(e.target.value);
                            }}
                            className={`ml-10 py-3 px-2 w-1/5 border-none rounded-lg outline ${
                                isValid
                                    ? 'outline-1 outline-[#d3d3d3]'
                                    : 'outline-[1.5px] outline-[#f15746]'
                            }`}
                        ></input>
                        <button
                            onClick={() => {
                                user && setNewName(user.nickname);
                                setIsEditting(false);
                            }}
                            className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            취소
                        </button>
                        <button
                            onClick={() => {
                                isValid && setIsEditting((prev) => !prev);
                            }}
                            className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            저장
                        </button>
                    </>
                ) : (
                    <>
                        <span className="ml-10 text-lg font-semibold">
                            {user && user.nickname}
                        </span>
                        <button
                            onClick={() => {
                                isValid && setIsEditting((prev) => !prev);
                            }}
                            className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                        >
                            변경
                        </button>
                    </>
                )}
                {!isValid && (
                    <span className="ml-3 text-xs text-red-500">
                        올바른 닉네임을 입력해주세요. (2~8자)
                    </span>
                )}
            </div>
        </>
    );
};

export default ChangeNickName;
