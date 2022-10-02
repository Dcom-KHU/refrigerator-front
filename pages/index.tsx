import type { GetServerSideProps } from 'next';
import SearchRecipe from '../components/searchrecipe';
import TodaysRecipe from '../components/todaysrecipe';
import Head from 'next/head';
import { logOut, stayLogin } from '../util/auth';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAuthedState, userState, UserType } from '../store/authState';

interface propType {
    user: UserType;
}

const Home = (props: propType) => {
    const setIsAuthed = useSetRecoilState(isAuthedState);
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        if (props.user) {
            setIsAuthed(true);
            setUser(props.user);
        } else {
            user && logOut(user.id);
            setIsAuthed(false);
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Recipes</title>
            </Head>
            <div className="grid place-items-center">
                <TodaysRecipe menu="menu" />
                <SearchRecipe />
            </div>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = await stayLogin(ctx);
    if (user) {
        return {
            props: { user },
        };
    }
    return {
        props: {},
    };
};
