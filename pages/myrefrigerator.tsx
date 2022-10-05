import { useEffect, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import MyRefSearch from '../components/myRef/MyRefSearch';
import MyIngrediantsList from '../components/myRef/MyIngrediantsList';
import { myIngrediants } from '../store/myIngrediants';
import { useRecoilState } from 'recoil';
import { isAuthedState, userState } from '../store/authState';
import { fetchIngredients } from '../util/myRefriger';
import { stayLogin } from '../util/auth';
import { UserType } from '../store/authState';

interface propType {
    user: UserType;
}

const MyRefriger = (props: propType) => {
    const [data, setData] = useRecoilState(myIngrediants);
    const [isAuthed, setIsAuthed] = useRecoilState(isAuthedState);
    const [user, setUser] = useRecoilState(userState);

    const fetchAllIngredients = async () => {
        const data = await fetchIngredients(user);
        if (data) setData(data);
    };

    useEffect(() => {
        const user = props.user;
        if (user) {
            setUser(user);
            setIsAuthed(true);
            fetchAllIngredients();
        } else setIsAuthed(false);
    }, [user]);

    return (
        <>
            <div className="w-screen h-screen bg-[#e8eaed]">
                <div className="flex justify-center w-full h-full">
                    <div className="flex relative flex-col justify-end items-end w-[95%] h-full">
                        <MyRefSearch />
                        <MyIngrediantsList data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyRefriger;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = await stayLogin(ctx);
    if (user) {
        return {
            props: { user },
        };
    }
    return { props: {} };
};
