import { useState, useEffect, useCallback, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { myRefSearchState, justAddedState } from '../../store/myRefrigerStates';
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
    //재료 추가시 애니메이션용 ref
    const ulRef = useRef<HTMLUListElement>(null);
    //재료 추가시 애니메이션용 state
    const [justAdded, setJustAdded] = useRecoilState(justAddedState);
    const keyword = useRecoilValue(myRefSearchState);

    const isDangerous = (today: Date, bb: string): boolean => {
        //유통기한이 3일 이하로 남았는지 확인
        const diff = new Date(bb).getTime() - today.getTime();
        return diff / (1000 * 60 * 60 * 24) <= 3;
    };

    //방금 아이템이 추가됐다면 0.4초간 애니메이션 적용 후 삭제
    const checkJustAdded = useCallback(() => {
        if (justAdded) {
            const temp = (ulRef.current as HTMLUListElement).className;
            (ulRef.current as HTMLUListElement).className +=
                ' child:animate-liAdd';
            setTimeout(() => {
                (ulRef.current as HTMLUListElement).className = temp;
                setJustAdded(false);
            }, 200);
        }
    }, [justAdded, setJustAdded]);

    useEffect(() => {
        checkJustAdded();
    }, [checkJustAdded]);

    return (
        <>
            <div className="flex relative flex-col self-center w-[99%] h-3/4">
                <MyRefSelect selected={selected} setSelected={setSelected} />
                <ul
                    ref={ulRef}
                    className="flex flex-col items-center w-full h-full bg-white border-x-[1.5px] rounded-b-xl overflow-y-scroll"
                >
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
