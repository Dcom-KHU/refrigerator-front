import React, { useState, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { myIngrediants } from '../../store/myIngrediants';
import { v1 } from 'uuid';

interface propType {
    isShow: boolean;
    setIsShow: React.Dispatch<SetStateAction<boolean>>;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
    isModify: boolean;
    id: string;
    name: string;
    bb: string;
}

//재료 추가 or 수정시 나오는 모달
const AddIngrediantModal = (props: propType) => {
    const [data, setData] = useRecoilState(myIngrediants);
    const [name, setName] = useState(props.name);
    const [bb, setBB] = useState(props.bb);
    const [quantity, setQuantity] = useState('');

    const Reset = () => {
        setName('');
        setBB('');
        setQuantity('');
    };

    const onSubmit = () => {
        try {
            if (name.trim() == '') throw new Error('잘못된 이름입니다.');
            if (quantity.trim() == '') throw new Error('잘못된 수량입니다.');
            //추가버튼 눌렀을 때
            if (!props.isModify) {
                const id = v1();
                const newIngrediant = {
                    id,
                    name,
                    bb,
                    quantity,
                };
                //새로운 재료 데이터에 추가
                setData([...data, newIngrediant]);
            } else {
                //수정 버튼 눌렀을 때
                const newData = data.map((item) =>
                    props.id === item.id ? { id: props.id, name, bb } : item
                );
                setData(newData);
            }
            Reset();
            props.setIsShow(false);
        } catch (err) {
            alert(err);
        }
    };

    const unMount = () => {
        //모달 사라질 때 애니메이션용 setTimeout
        props.setIsShow(false);
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
                        className="relative w-1/5 py-3 rounded-2xl outline-none text-center focus:placeholder-transparent"
                    ></input>
                    <input
                        value={bb}
                        type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setBB(e.target.value);
                        }}
                        placeholder="유통기한"
                        className="relative w-1/3 py-3 rounded-2xl outline-none text-center cursor-pointer focus:placeholder-transparent"
                    ></input>
                    <input
                        value={quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setQuantity(e.target.value);
                        }}
                        placeholder="수량"
                        required
                        className="relative w-1/5 py-3 rounded-2xl outline-none text-center focus:placeholder-transparent"
                    ></input>
                </div>
                <div className="flex justify-center items-end mt-4 -mb-10 text-white">
                    <button
                        onClick={unMount}
                        className="px-2 py-1 mr-2 border-none bg-[#237bff] rounded-xl hover:bg-[#0d6efd]"
                    >
                        취소
                    </button>
                    <button
                        onClick={onSubmit}
                        className="px-2 py-1 ml-2 border-none bg-[#237bff] rounded-xl hover:bg-[#0d6efd]"
                    >
                        {props.isModify ? '완료' : '추가'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddIngrediantModal;
