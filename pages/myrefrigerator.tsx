import { NextPage } from 'next';
import MyRefSearch from '../components/UI/MyRefSearch';
import MyIngrediantsList from '../components/UI/MyIngrediantsList';
import { myIngrediants } from '../store/myIngrediants';
import { useRecoilValue } from 'recoil';
const MyRefriger: NextPage = () => {
    const data = useRecoilValue(myIngrediants);

    return (
        <>
            <div className="flex flex-col justify-center items-end w-screen h-screen bg-[#ededed]">
                <div className="flex justify-center items-end w-screen h-[95%] ">
                    <div className="flex flex-col justify-center items-center w-[90%] lg:w-3/5 h-[90%]">
                        <MyRefSearch />
                        <MyIngrediantsList data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyRefriger;
