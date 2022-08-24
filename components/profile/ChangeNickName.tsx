import { useState, useEffect, useCallback } from 'react';
import type { GetServerSideProps } from 'next';
import { stayLogin } from '../../util/auth';
import { userState } from '../../store/authState';
import { useRecoilState } from 'recoil';

const ChangeNickName = () => {
    const [user, setUser] = useRecoilState(userState);
    const [newName, setNewName] = useState(user.nickname);
    const [isEditting, setIsEditting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const checkIsValid = useCallback(() => {
        newName && 2 <= newName!.length && newName!.length <= 8
            ? setIsValid(true)
            : setIsValid(false);
    }, [newName]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const onClick = () => {
        if (isValid) {
            setIsEditting((prev) => !prev);
        }
    };

    const cancel = () => {
        setNewName(user.nickname);
        setIsEditting(false);
    };

    useEffect(() => {
        setNewName(user.nickname);
        checkIsValid();
    }, [checkIsValid, user]);

    return (
        <>
            <div className="flex items-center w-full h-24 border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                {isEditting ? (
                    <>
                        <input
                            value={newName as string}
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
                            {user.nickname}
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
                        올바른 닉네임을 입력해주세요. (2~8자)
                    </span>
                )}
            </div>
        </>
    );
};

export default ChangeNickName;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    stayLogin(ctx);
    return { props: {} };
};
