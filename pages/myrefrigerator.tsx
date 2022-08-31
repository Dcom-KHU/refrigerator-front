import { NextPage } from 'next';
import MyRefSearch from '../components/UI/MyRefSearch';
import MyIngrediantsList from '../components/UI/MyIngrediantsList';
import { myIngrediants } from '../store/myIngrediants';
import { useRecoilValue } from 'recoil';

const MyRefriger: NextPage = () => {
    const data = useRecoilValue(myIngrediants);

    return (
        <>
            <div className={`w-screen h-screen bg-[#e8eaed]`}>
                <div className="flex justify-center w-full h-full">
                    <div className="flex relative flex-col justify-end items-end w-full h-full">
                        <MyRefSearch />
                        <MyIngrediantsList data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyRefriger;
