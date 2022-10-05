import type { GetServerSideProps } from 'next';
import { logOut, stayLogin } from '../util/auth';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAuthedState, userState, UserType } from '../store/authState';

import Header from '../components/common/Header';
import SearchRecipe from '../components/recipe/SearchRecipe';
import TodaysRecipe from '../components/recipe/TodaysRecipe';
import Head from 'next/head';
import AddRecipeIcon from '../public/addRecipeIcon.svg'
import Link from 'next/link';
import axios from 'axios';


interface propType {
    user: UserType;
}

const Home = (props: propType) => {
    const setIsAuthed = useSetRecoilState(isAuthedState);
    const [user, setUser] = useRecoilState(userState);

    const checkUser = () => {
        if (props.user) {
            setIsAuthed(true);
            setUser(props.user);
        } else {
            console.log("asdfasdfasdf");
            user&&logOut(user.id);
            setIsAuthed(false);
        }
        console.log('user');
        console.log(props.user);
    };

    useEffect(() => {
        checkUser();
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
            
            <div className = "fixed bottom-20 right-10" >
            <Link href= '/newrecipeform'>
            <AddRecipeIcon  width={70} height={70}/>
            </Link>
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
