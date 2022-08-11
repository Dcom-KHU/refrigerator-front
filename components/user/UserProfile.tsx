import UserInfo from './UserInfo';
import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [name, setName] = useState('닉네임');
    const [newName, setNewName] = useState(name);
    const [isEditting, setIsEditting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const onClick = () => {
        if (isValid) {
            setIsEditting((prev) => !prev);
            setName(newName);
        }
    };

    const cancel = () => {
        setNewName(name);
        setIsEditting(false);
    };

    useEffect(() => {
        1 < newName.length && newName.length < 9
            ? setIsValid(true)
            : setIsValid(false);
    }, [newName, isValid, setIsValid]);

    return (
        <>
            <div className="flex flex-col w-[95%] mt-5">
                <div className="flex items-center w-full h-24 border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                    {isEditting ? (
                        <>
                            <input
                                value={newName}
                                onChange={onChange}
                                className={`ml-10 py-3 px-2 w-1/5 border-none rounded-lg outline ${
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
                            <span className="ml-10 text-lg font-semibold">
                                {name}
                            </span>
                            <button
                                onClick={onClick}
                                className="py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-4 text-[#222222cc]"
                            >
                                변경
                            </button>
                        </>
                    )}

                    {!isValid && (
                        <span className="ml-3 text-xs text-red-500">
                            올바른 이름을 입력해주세요.(2~8자)
                        </span>
                    )}
                </div>
                <UserInfo />
            </div>
        </>
    );
};

export default UserProfile;
