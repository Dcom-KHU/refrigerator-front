import React, { useState, SetStateAction } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { myIngrediants } from '../../store/myIngrediants';
import {
    isModifyingState,
    justAddedState,
    invalidTryingState,
} from '../../store/myRefrigerStates';
import { v1 } from 'uuid';
interface propType {
    isShow: boolean;
    setIsShow: React.Dispatch<SetStateAction<boolean>>;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

//재료 추가 or 수정시 나오는 모달
const AddIngrediantModal = (props: propType) => {
    const [data, setData] = useRecoilState(myIngrediants);
    const setIsModifying = useSetRecoilState(isModifyingState);
    const [name, setName] = useState('');
    const [bb, setBB] = useState(new Date().toJSON().split('T')[0]);
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
        //모달 사라질 때 애니메이션용 setTimeout
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
            } flex absolute flex-col justify-around items-center w-2/3 h-1/3 top-16 left-[16%] border-[0.5px] border-[#8a8a8a] rounded-3xl bg-[#ededed] shadow-3xl z-50`}
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
                        className="relative w-1/3 py-3 rounded-2xl outline-none text-center focus:placeholder-transparent"
                    ></input>
                    <input
                        value={bb}
                        type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setBB(e.target.value);
                        }}
                        placeholder="유통기한"
                        className="relative w-1/2 py-3 rounded-2xl outline-none text-center cursor-pointer focus:placeholder-transparent"
                    ></input>
                </div>
                <div className="flex justify-center items-end mt-4 -mb-10">
                    <button
                        onClick={unMount}
                        className="px-2 py-1 mr-2 border-none bg-[#cecece] rounded-xl hover:text-white"
                    >
                        취소
                    </button>
                    <button
                        onClick={onSubmit}
                        className="px-2 py-1 mr-2 border-none bg-[#cecece] rounded-xl hover:text-white"
                    >
                        추가
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddIngrediantModal;
