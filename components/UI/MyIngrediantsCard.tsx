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

    const onClick = () => {
        if (isModifying) return;
        if (!showModal) {
            setShowModal(true);
            setIsModifying(true);
        } else {
            setIsModifying(false);
            setTimeout(() => {
                setShowModal(false);
            }, 200);
        }
    };

    const deleteHandler = () => {
        const filtered = data.filter((now) => now.id !== item.id);
        setData(filtered);
    };

    return (
        <>
            {showModal && (
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
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm text-white bg-[#237bff] hover:bg-[#0d6efd] mr-3"
                        >
                            수정
                        </button>
                        <button
                            onClick={deleteHandler}
                            className="px-2 py-1 md:px-3 md:py-2 border rounded-lg sm:rounded-xl text-xs md:text-sm text-white bg-[#237bff] hover:bg-[#0d6efd] mr-2 md:mr-0"
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
