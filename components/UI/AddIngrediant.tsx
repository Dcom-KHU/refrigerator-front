import { useState } from 'react';
import { isModifyingState } from '../../store/myRefrigerStates';
import { useRecoilState } from 'recoil';
import AddIngrediantModal from '../modal/AddIngrediantModal';
import Plus from '/public/plus.svg';

const AddIngrediant = () => {
    const [showModal, setShowModal] = useState(false);
    const [isAdding, setIsAdding] = useRecoilState(isModifyingState);

    const onClick = () => {
        if (isAdding) return;
        if (!showModal) {
            setShowModal(true);
            setIsAdding(true);
        } else {
            setIsAdding(false);
            setTimeout(() => {
                setShowModal(false);
            }, 200);
        }
    };

    return (
        <>
            {showModal && (
                <AddIngrediantModal //재료 추가 모달
                    isShow={isAdding}
                    setIsShow={setIsAdding}
                    setShowModal={setShowModal}
                    isModify={false}
                    id={''}
                    name={''}
                    bb={new Date().toJSON().split('T')[0]}
                />
            )}
            <div className="flex absolute justify-center items-center w-full h-14 bottom-0 rounded-b-xl">
                <div className="sticky self-center mb-5 rounded-full bg-[#ededed] hover:bg-[#e4e4e4] cursor-pointer">
                    <Plus width={45} height={45} onClick={onClick} />
                </div>
            </div>
        </>
    );
};
export default AddIngrediant;
