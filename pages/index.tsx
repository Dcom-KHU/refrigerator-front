import type { NextPage } from 'next';
import Header from '../components/common/Header';
import SearchRecipe from '../components/recipe/SearchRecipe';
import TodaysRecipe from '../components/recipe/TodaysRecipe';
import Head from 'next/head';
import AddRecipeIcon from '../public/addRecipeIcon.svg'
import Link from 'next/link';



const Home: NextPage = ({data}:any) => {
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
            
            <div className = "fixed bottom-20 right-10" >
            <h1>레시피등록</h1>
            <Link href= '/newrecipeform'>
            <AddRecipeIcon  width={70} height={70}/>
            </Link>

            </div>
        </div>
    );
};

export default Home;


// 해당 페이지 렌더링 시 항상 실행
export async function getServerSideProps(context:any) {
    // api를 통해 받은 data 정보
    const res = await fetch("http://20.38.46.151:8080/food/info/foodName");
    const posts = await res.json();
    return {
      props: {posts},

      //	page component의 Props로 전달되는 객체
    }
  }
