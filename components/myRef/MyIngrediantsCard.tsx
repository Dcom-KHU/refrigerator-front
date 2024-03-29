import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ingredient } from '../../types/recipetype';

import {
    justAddedState,
    isModifyingState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import TrashSVG from '/public/trash.svg';
import Edit from '/public/edit.svg';
import { deleteIngredient, modifyIngredient } from '../../util/myRefriger';
import { userState } from '../../store/authState';

interface propType {
    item: ingredient;
    isDanger: boolean;
}

const MyIngrediantsCard = ({ item, isDanger }: propType) => {
    const user = useRecoilValue(userState);

    const [newName, setNewName] = useState(item.name);
    const [newExpiredDate, setNewExpiredDate] = useState(item.expiredDate);
    //아이템이 방금추가됐는지 확인하는 state, 애니메이션용
    const [justAdded, setJustAdded] = useRecoilState(justAddedState);
    //수정/추가 중일 때 또 다른 수정/추가 요청을 감지하는 state, 애니메이션용
    const [invalidTrying, setInvalidTrying] =
        useRecoilState(invalidTryingState);
    //css용 ref
    const divRef = useRef<HTMLDivElement>(null);
    //현재 재료가 수정중인지 확인하는 state
    const [thisModifying, setThisModifying] = useState(false);
    //수정중인 재료가 있는지 확인하는 전역 recoil state
    const [isModifying, setIsModifying] = useRecoilState(isModifyingState);

    const ModifyOrCancle = () => {
        //다른 재료가 수정중이면 invalidTrying true로 만듦
        if (isModifying && !thisModifying) {
            setInvalidTrying(true);
            return;
        }
        //현재 재료가 수정중이면 취소 처리
        else if (isModifying && thisModifying) {
            setThisModifying(false);
            setIsModifying(false);
            setNewName(item.name);
            setNewExpiredDate(item.expiredDate);
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
        else setNewExpiredDate(value);
    };

    const completeHandler = async () => {
        //삭제 버튼 눌렀을 때
        if (!thisModifying) {
            //무언가 수정 중이면 invalidTrying을 true로 set하고 return
            if (isModifying) {
                setInvalidTrying(true);
                return;
            }
            //0.2초간 삭제 애니메이션 후 삭제
            (divRef.current as HTMLDivElement).className += ' animate-fadeOut';
            setTimeout(async () => {
                await deleteIngredient(item.id, user!.id);
                console.log(item.id);
            }, 200);
        } else {
            //수정 버튼 눌렀을 때
            await modifyIngredient(
                item.id,
                item.name,
                item.expiredDate,
                user!.id
            ).then((res) => {
                setIsModifying(false);
                setThisModifying(false);
            });
        }
    };

    const checkJustAdded = useCallback(() => {
        //방금 추가됐으면
        if (justAdded) {
            //애니메이션 0.2초간 적용 후 삭제
            const temp = (divRef.current as HTMLDivElement).className;
            (divRef.current as HTMLDivElement).className += ' animate-fadeIn';
            setTimeout(() => {
                (divRef.current as HTMLDivElement).className = temp;
                setJustAdded(false);
            }, 300);
        }
    }, [justAdded, setJustAdded]);

    const checkInvalidTrying = useCallback(() => {
        //자신이 수정중일 때 다른 재료 수정요청이 감지되면 흔들리는 css animation 적용 후 삭제
        if (invalidTrying && thisModifying) {
            const temp = (divRef.current as HTMLDivElement).className;
            (divRef.current as HTMLDivElement).className +=
                ' animate-vibration';
            setTimeout(() => {
                (divRef.current as HTMLDivElement).className = temp;
                setInvalidTrying(false);
            }, 300);
        }
    }, [invalidTrying, setInvalidTrying, thisModifying]);

    useEffect(() => {
        checkJustAdded();
        checkInvalidTrying();
        console.log(item);
    }, [checkInvalidTrying]);

    return (
        <>
            <div
                ref={divRef}
                className="flex flex-col justify-center content-center items-center w-full h-full mt-2 rounded-3xl bg-[#e8eaed]"
            >
                <div className="flex justify-center items-center w-full h-1/3 text-xs sm:text-base font-medium">
                    {thisModifying ? (
                        <input
                            id="name"
                            value={newName}
                            onChange={onChange}
                            autoComplete="off"
                            className="w-4/5 h-4/5 rounded-lg lg:rounded-2xl text-center outline-none border-2 border-blue-500"
                        ></input>
                    ) : (
                        `${item.name}`
                    )}
                </div>
                <div
                    className={`flex justify-center items-end w-full h-1/4 text-[10px] md:text-sm ${
                        isDanger && 'text-red-400'
                    }`}
                >
                    {thisModifying ? (
                        <input
                            id="expiredDate"
                            type="date"
                            value={newExpiredDate}
                            onChange={onChange}
                            autoComplete="off"
                            className="w-[90%] h-[90%] rounded-lg lg:rounded-2xl text-center outline-none border-2 border-blue-500"
                        ></input>
                    ) : (
                        <>
                            <span>{item.expiredDate.split('T')[0]}</span>
                            <span className="text-[11px] ml-1">까지</span>
                        </>
                    )}
                </div>
                <div className="flex justify-center items-end w-full h-1/3">
                    <div className="flex justify-center items-end w-3/4 z-10">
                        <button
                            onClick={ModifyOrCancle}
                            className="px-[5px] py-[3px] border-[1.5px] rounded-lg sm:rounded-xl text-[10px] md:text-sm bg-white hover:bg-[#f6f6f6] mr-1"
                        >
                            {thisModifying ? (
                                '취소'
                            ) : (
                                <Edit width={19} fill="#454545" />
                            )}
                        </button>
                        <button
                            onClick={completeHandler}
                            className="px-[5px] py-[3px] border-[1.5px] rounded-lg sm:rounded-xl text-[10px] md:text-sm bg-white hover:bg-[#f6f6f6] ml-1"
                        >
                            {thisModifying ? '완료' : <TrashSVG width={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(MyIngrediantsCard);
