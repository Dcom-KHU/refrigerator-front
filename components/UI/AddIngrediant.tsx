import Plus from '/public/plus.svg';
import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isModifyingState } from '../../store/myRefrigerStates';
import AddIngrediantModal from '../modal/AddIngrediantModal';

const AddIngrediant = () => {
    const [showModal, setShowModal] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isModifying, setIsModifying] = useRecoilState(isModifyingState);
    const divRef = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (isModifying) {
            if (showModal) {
                setIsModifying(false);
                setIsShow(false);
                setTimeout(() => {
                    setShowModal(false);
                }, 200);
            } else return;
        } else {
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
                <div className="sticky self-center rounded-full -mt-5 bg-[#ededed] hover:bg-[#e4e4e4] cursor-pointer">
                    <Plus width={45} height={45} onClick={onClick} />
                </div>
            </div>
        </>
    );
};
export default React.memo(AddIngrediant);
