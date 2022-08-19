import type { NextPage } from 'next';
import Header from '../components/header';
import SearchRecipe from '../components/searchrecipe';
import TodaysRecipe from '../components/todaysrecipe';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Recipes</title>
            </Head>

            <Header />

            <div className="grid place-items-center">
                <TodaysRecipe menu="menu" />
                <SearchRecipe />
            </div>
        </div>
    );
};

export default Home;
