import React, { useState, SetStateAction } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    isModifyingState,
    justAddedState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import { userState } from '../../store/authState';
import { addIngredient, fetchIngredients } from '../../util/myRefriger';
import { myIngrediants } from '../../store/myIngrediants';

interface propType {
    isShow: boolean;
    setIsShow: React.Dispatch<SetStateAction<boolean>>;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

//재료 추가 or 수정시 나오는 모달
const AddIngrediantModal = (props: propType) => {
    const [name, setName] = useState('');
    const [expiredDate, setExpiredDate] = useState(
        new Date().toJSON().split('T')[0]
    );
    const user = useRecoilValue(userState);
    const setData = useSetRecoilState(myIngrediants);
    const setIsModifying = useSetRecoilState(isModifyingState);
    const setJustAdded = useSetRecoilState(justAddedState);
    const setInvalidTrying = useSetRecoilState(invalidTryingState);

    const Reset = () => {
        setName('');
        setExpiredDate(new Date().toJSON().split('T')[0]);
    };

    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (await addIngredient(name, expiredDate, user!.id)) {
            setData(await fetchIngredients(user));
            Reset();
            props.setIsShow(false);
            setIsModifying(false);
            setJustAdded(true);
            setTimeout(() => {
                props.setShowModal(false);
            }, 200);
        }
    };

    const unMount = () => {
        //모달 사라질 때 애니메이션용
        Reset();
        props.setIsShow(false);
        setIsModifying(false);
        setInvalidTrying(false);
        setTimeout(() => {
            props.setShowModal(false);
        }, 200);
    };

    return (
        <div
            className={`${
                props.isShow ? 'animate-fadeIn' : 'animate-fadeOut'
            } flex absolute flex-col justify-around items-center w-[70%] sm:w-1/2 h-[150px] sm:left-[25%] top-[35%] border-solid border-[1.5px] border-[#8a8a8a] rounded-3xl bg-white shadow-3xl z-50`}
        >
            <form onSubmit={onSubmit}>
                <div className="flex justify-around items-center -mt-4">
                    <input
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setName(e.target.value);
                        }}
                        placeholder="재료명"
                        required
                        className="relative w-1/3 py-3 rounded-2xl border-[#8a8a8a] border-[1px] outline-none text-center focus:placeholder-transparent"
                    ></input>
                    <input
                        value={expiredDate}
                        type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setExpiredDate(e.target.value);
                        }}
                        placeholder="유통기한"
                        className="relative w-1/2 py-3 rounded-2xl border-[#8a8a8a] border-[1px] outline-none text-center cursor-pointer focus:placeholder-transparent"
                    ></input>
                </div>
                <div className="flex justify-center items-end mt-4 -mb-10 text-white">
                    <button
                        onClick={unMount}
                        className="px-2 py-1 mr-2 border-none bg-[#303136] rounded-xl hover:bg-[#3e3f45]"
                    >
                        취소
                    </button>
                    <button
                        onClick={onSubmit}
                        className="px-2 py-1 mr-2 border-none bg-[#303136] rounded-xl hover:bg-[#3e3f45]"
                    >
                        추가
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddIngrediantModal;
