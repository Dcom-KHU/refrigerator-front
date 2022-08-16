import { useState, useEffect } from 'react';
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
    const [dangerList, setDangerList] = useState<dataType[]>([]);

    const keyword = useRecoilValue(myRefSearchState);

    const isDangerous = (now: Date, bb: string): boolean => {
        //유통기한이 3일 이하로 남았는지 확인
        const diff = new Date(bb).getTime() - now.getTime();
        return diff / (1000 * 60 * 60 * 24) <= 3;
    };

    useEffect(() => {
        const now = new Date();
        //유통기한이 3일 이하로 남은 것들만 fiter해서 dagerList에 넣음
        const newLst = data.filter((items) => isDangerous(now, items.bb));
        setDangerList(newLst);
    }, [data, setDangerList]);

    return (
        <>
            <div className="flex flex-col self-center relative w-[99%] h-3/4">
                <MyRefSelect selected={selected} setSelected={setSelected} />
                <ul className="flex flex-col items-center w-full h-full rounded-b-xl overflow-y-scroll">
                    {!selected && //나의 냉장고 선택했을 때
                        data.map((item) =>
                            keyword != '' ? ( //search input에 값이 들어있으면
                                item.name.includes(keyword) && ( //input내에 값을 포함하는 item만 출력
                                    <li
                                        key={item.id}
                                        className="w-full min-h-[50px] md:min-h-[100px]"
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
                                    className="w-full min-h-[50px] md:min-h-[100px]"
                                >
                                    <MyIngrediantsCard
                                        item={item}
                                        isDanger={false}
                                    />
                                </li>
                            )
                        )}
                    {selected && //유통기한 임박 체크 했을 때
                        dangerList.map((item) =>
                            keyword != '' ? (
                                item.name.includes(keyword) && (
                                    <li
                                        key={item.id}
                                        className="w-full min-h-[50px] md:min-h-[100px]"
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
                                    className="w-full min-h-[50px] md:min-h-[100px]"
                                >
                                    <MyIngrediantsCard
                                        item={item}
                                        isDanger={true}
                                    />
                                </li>
                            )
                        )}
                </ul>
                <AddIngrediant />
            </div>
        </>
    );
};

export default MyIngrediantsList;
