import React, { useState, SetStateAction } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { myIngrediants } from '../../store/myIngrediants';
import {
    isModifyingState,
    justAddedState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import { v1 } from 'uuid';
import axios from '../../util/axios';
interface propType {
    isShow: boolean;
    setIsShow: React.Dispatch<SetStateAction<boolean>>;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

//재료 추가 or 수정시 나오는 모달
const AddIngrediantModal = (props: propType) => {
    const [data, setData] = useRecoilState(myIngrediants);
    const [name, setName] = useState('');
    const [bb, setBB] = useState(new Date().toJSON().split('T')[0]);
    const setIsModifying = useSetRecoilState(isModifyingState);
    const setJustAdded = useSetRecoilState(justAddedState);
    const setInvalidTrying = useSetRecoilState(invalidTryingState);

    const Reset = () => {
        setName('');
        setBB(new Date().toJSON().split('T')[0]);
    };

    const onSubmit = () => {
        try {
            if (name.trim() == '') throw new Error('잘못된 이름입니다.');
            //추가버튼 눌렀을 때
            const id = v1();
            const newIngrediant = {
                id,
                name,
                bb,
            };
            const res = axios({
                method: 'POST',
                data: { name, bb },
            });
            //새로운 재료 데이터에 추가
            setData([...data, newIngrediant]);
            Reset();
            props.setIsShow(false);
            setIsModifying(false);
            setJustAdded(true);
            setTimeout(() => {
                props.setShowModal(false);
            }, 200);
        } catch (err) {
            alert(err);
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
                        value={bb}
                        type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setBB(e.target.value);
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
