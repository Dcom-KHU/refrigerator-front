import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { myIngrediants } from '../../store/myIngrediants';
import { isModifyingState } from '../../store/myRefrigerStates';

interface ingrediant {
    id: string;
    name: string;
    bb: string;
}

interface propType {
    item: ingrediant;
    isDanger: boolean;
}

const MyIngrediantsCard = ({ item, isDanger }: propType) => {
    const [data, setData] = useRecoilState(myIngrediants);
    const [newName, setNewName] = useState(item.name);
    const [newBB, setNewBB] = useState(item.bb);
    const divRef = useRef<HTMLDivElement>(null);
    //현재 재료가 수정중인지 확인
    const [thisModifying, setThisModifying] = useState(false);
    //수정중일 때 다른 재료 수정 못하게 하도록 전역 recoil state 만듦
    const [isModifying, setIsModifying] = useRecoilState(isModifyingState);

    //특정 인덱스의 아이템 교체
    const replaceItemAtIndex = <T,>(
        arr: T[],
        index: number,
        newValue: T
    ): T[] => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

    const completeHandler = () => {
        //삭제 버튼일 경우
        if (!thisModifying) {
            //0.2초간 삭제 애니메이션 후 삭제
            (divRef.current as HTMLDivElement).className += ' animate-liDel';
            setTimeout(() => {
                const filtered = data.filter((now) => now.id !== item.id);
                setData(filtered);
            }, 300);
        } else {
            //수정 버튼일 경우
            const index = data.findIndex((oldItem) => oldItem.id === item.id);
            const newData = replaceItemAtIndex(data, index, {
                ...item,
                name: newName,
                bb: newBB,
            });
            setData(newData);
            setIsModifying(false);
            setThisModifying(false);
        }
    };

    const onClick = () => {
        //다른 재료가 수정중이면 return
        if (isModifying && !thisModifying) return;
        //현재 재료가 수정중이면 취소 처리
        else if (isModifying && thisModifying) {
            setThisModifying(false);
            setIsModifying(false);
            setNewName(item.name);
            setNewBB(item.bb);
        }
        //다른 재료가 수정중이지 않으면 현재 재료를 수정 상태로 바꿔줌
        else if (!isModifying) {
            setThisModifying(true);
            setIsModifying(true);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (e.target.id == 'name') setNewName(value);
        else setNewBB(value);
    };

    return (
        <>
            <div
                ref={divRef}
                className={`flex justify-between items-center w-full h-full border-[1.5px] border-t-0 ${
                    thisModifying &&
                    'border-[#a0a0a0] border-[1.5px] border-t-[1.5px] rounded-xl'
                }`}
            >
                <div className="flex justify-center w-1/4 md:1/5 ml-2 lg:ml-10 md:ml-4 text-xs sm:text-base">
                    {thisModifying ? (
                        <input
                            id="name"
                            value={newName}
                            onChange={onChange}
                            className="w-1/2 h-10 border-2 border-blue-500 rounded-md text-center"
                        ></input>
                    ) : (
                        `${item.name}`
                    )}
                </div>
                <div
                    className={`flex justify-end w-2/5 mr-5 md:mr-2 text-sm ${
                        isDanger && 'text-red-400'
                    }`}
                >
                    {thisModifying ? (
                        <input
                            id="bb"
                            type="date"
                            value={newBB}
                            onChange={onChange}
                            className="w-1/2 h-10 border-2 border-blue-500 rounded-md text-center"
                        ></input>
                    ) : (
                        `${item.bb}`
                    )}
                </div>
                <div className="flex justify-end items-center w-1/2 md:w-1/3">
                    <div className="flex justify-center w-3/4 z-10">
                        <button
                            onClick={onClick}
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm bg-[#f1f1f1] hover:bg-[#f6f6f6] mr-3"
                        >
                            {thisModifying ? '취소' : '수정'}
                        </button>
                        <button
                            onClick={completeHandler}
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm bg-[#f1f1f1] hover:bg-[#f6f6f6] mr-2 md:mr-0"
                        >
                            {thisModifying ? '완료' : '삭제'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyIngrediantsCard;
