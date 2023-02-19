import Plus from '/public/plus.svg';
import React, { useState, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    isModifyingState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import AddIngrediantModal from '../modal/AddIngrediantModal';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
                className="flex absolute justify-center items-center w-full h-14 mb-5 bottom-0 rounded-b-xl"
            >
                <div className="sticky rounded-full bg-[#303136] hover:bg-[#3c3e44] cursor-pointer">
                    <Plus width={50} height={50} onClick={onClick} />
                </div>
                <div className="flex absolute justify-center items-center w-32 sm:w-48 h-10 left-[60%] sm:left-[80%] bg-gradient-to-r from-[rgba(238,174,202,1)] to-[rgba(148,187,233,1)] font-medium text-xs sm:text-base rounded-3xl cursor-pointer">
                    내 재료로 요리하기
                    <KeyboardDoubleArrowRightIcon
                        className="ml-[5px] animate-sideMove"
                        fontSize="small"
                    />
                </div>
            </div>
        </>
    );
};
export default React.memo(AddIngrediant);
