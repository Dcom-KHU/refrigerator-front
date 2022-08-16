import { NextPage } from 'next';
import MyRefSearch from '../components/UI/MyRefSearch';
import MyIngrediantsList from '../components/UI/MyIngrediantsList';
import { myIngrediants } from '../store/myIngrediants';
import { useRecoilValue } from 'recoil';
const MyRefriger: NextPage = () => {
    const data = useRecoilValue(myIngrediants);

    return (
        <>
            <div className="flex justify-center items-end w-screen h-screen -mt-10">
                <div className="flex flex-col justify-between items-center w-[90%] lg:w-3/5 h-3/4 rounded-xl bg-[#ededed] shadow-xl">
                    <MyRefSearch />
                    <MyIngrediantsList data={data} />
                </div>
            </div>
        </>
    );
};

export default MyRefriger;
