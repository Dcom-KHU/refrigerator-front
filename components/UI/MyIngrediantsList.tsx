import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { myRefSearchState } from '../../store/myRefrigerStates';
import MyIngrediantsCard from './MyIngrediantsCard';
import AddIngrediant from './AddIngrediant';
import MyRefSelect from './MyRefSelect';

interface dataType {
    id: string;
    name: string;
    bb: string;
}

interface propType {
    data: dataType[];
}

const MyIngrediantsList = ({ data }: propType) => {
    const [selected, setSelected] = useState(false);
    const keyword = useRecoilValue(myRefSearchState);

    const isDangerous = (today: Date, bb: string): boolean => {
        //유통기한이 3일 이하로 남았는지 확인
        const diff = new Date(bb).getTime() - today.getTime();
        return diff / (1000 * 60 * 60 * 24) <= 3;
    };

    return (
        <>
            <div className="flex flex-col self-center w-full h-[70%]">
                <MyRefSelect selected={selected} setSelected={setSelected} />
                <ul className="flex flex-wrap justify-around sm:justify-start content-start w-full h-[95%] bg-white border-[#9d9d9d] border-[1px] border-t-0 rounded-b-xl overflow-y-scroll">
                    {!selected && //나의 냉장고 선택했을 때
                        data.map((item) =>
                            keyword != '' ? ( //search input에 값이 들어있으면
                                item.name.includes(keyword) && ( //input내에 값을 포함하는 item만 출력
                                    <li
                                        key={item.id}
                                        className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] m-3"
                                    >
                                        <MyIngrediantsCard
                                            item={item}
                                            isDanger={false}
                                        />
                                    </li>
                                )
                            ) : (
                                //input값이 없을경우 전체 출력
                                <li
                                    key={item.id}
                                    className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] m-3"
                                >
                                    <MyIngrediantsCard
                                        item={item}
                                        isDanger={false}
                                    />
                                </li>
                            )
                        )}
                    {selected && //유통기한 임박 체크 했을 때 유통기한 3일이하인것만 filter 후 map
                        data
                            .filter((items) =>
                                isDangerous(new Date(), items.bb)
                            )
                            .map((item) =>
                                keyword != '' ? (
                                    item.name.includes(keyword) && (
                                        <li
                                            key={item.id}
                                            className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] m-3"
                                        >
                                            <MyIngrediantsCard
                                                item={item}
                                                isDanger={true}
                                            />
                                        </li>
                                    )
                                ) : (
                                    <li
                                        key={item.id}
                                        className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] m-3"
                                    >
                                        <MyIngrediantsCard
                                            item={item}
                                            isDanger={true}
                                        />
                                    </li>
                                )
                            )}
                    <AddIngrediant />
                </ul>
            </div>
        </>
    );
};

export default MyIngrediantsList;
