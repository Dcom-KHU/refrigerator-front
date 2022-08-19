import Plus from '/public/plus.svg';
import React, { useState, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    isModifyingState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import AddIngrediantModal from '../modal/AddIngrediantModal';

const AddIngrediant = () => {
    const [showModal, setShowModal] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isModifying, setIsModifying] = useRecoilState(isModifyingState);
    const setInvalidTrying = useSetRecoilState(invalidTryingState);
    const divRef = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (isModifying) {
            //아이템을 추가 중이었던 경우
            if (showModal) {
                setIsModifying(false);
                setIsShow(false);
                setTimeout(() => {
                    setShowModal(false);
                }, 200);
            } else {
                //무언가 수정중인 경우
                setInvalidTrying(true);
                setTimeout(() => {
                    setInvalidTrying(false);
                }, 200);
                return;
            }
        } else {
            //아이템 추가를 누른 경우
            if (!showModal) {
                setShowModal(true);
                setIsShow(true);
                setIsModifying(true);
            }
        }
    };

    return (
        <>
            {showModal && (
                <AddIngrediantModal //재료 추가 모달
                    isShow={isShow}
                    setIsShow={setIsShow}
                    setShowModal={setShowModal}
                />
            )}
            <div
                ref={divRef}
                className="flex flex-col absolute justify-center items-center w-full h-14 bottom-0 rounded-b-xl"
            >
                <div className="sticky self-center rounded-full -mt-5 bg-[#303136] hover:bg-[#3c3e44] cursor-pointer z-50">
                    <Plus width={45} height={45} onClick={onClick} />
                </div>
            </div>
        </>
    );
};
export default React.memo(AddIngrediant);
