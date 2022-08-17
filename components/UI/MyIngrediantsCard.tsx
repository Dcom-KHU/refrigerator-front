import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { myIngrediants } from '../../store/myIngrediants';
import { isModifyingState } from '../../store/myRefrigerStates';
import AddIngrediantModal from '../modal/AddIngrediantModal';

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
    const [isModifying, setIsModifying] = useRecoilState(isModifyingState);
    const [showModal, setShowModal] = useState(false);

    //리스트에 재료정보 수정
    const onClick = () => {
        if (isModifying) return; //수정중이면 return
        if (!showModal) {
            setShowModal(true);
            setIsModifying(true);
        } else {
            //모달이 사라질 때 animation을 주기위한 로직
            setIsModifying(false);
            setTimeout(() => {
                setShowModal(false);
            }, 200);
        }
    };
    //리스트에서 재료 삭제
    const deleteHandler = () => {
        if (isModifying) return;
        const filtered = data.filter((now) => now.id !== item.id);
        setData(filtered);
    };

    return (
        <>
            {showModal && ( //재료 수정 모달
                <AddIngrediantModal
                    isShow={isModifying}
                    setIsShow={setIsModifying}
                    setShowModal={setShowModal}
                    isModify={true}
                    id={item.id}
                    name={item.name}
                    bb={item.bb}
                />
            )}
            <div className="flex justify-between items-center w-full h-full border-[1.5px] border-t-0">
                <div className="flex justify-center w-1/4 md:1/5 ml-2 lg:ml-10 md:ml-4 text-xs sm:text-base">
                    {item.name}
                </div>
                <div
                    className={`flex justify-end w-2/5 mr-5 md:mr-2 text-sm ${
                        isDanger && 'text-red-400'
                    }`}
                >
                    {item.bb}
                </div>
                <div className="flex justify-end items-center w-1/2 md:w-1/3">
                    <div className="flex sm:justify-end w-1/4">1</div>
                    <div className="flex justify-center w-3/4 z-10">
                        <button
                            onClick={onClick}
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm bg-[#f1f1f1] hover:bg-[#f6f6f6] mr-3"
                        >
                            수정
                        </button>
                        <button
                            onClick={deleteHandler}
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm bg-[#f1f1f1] hover:bg-[#f6f6f6] mr-2 md:mr-0"
                        >
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyIngrediantsCard;
