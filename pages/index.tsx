import type { NextPage } from 'next';
import Header from '../components/common/Header';
import SearchRecipe from '../components/recipe/SearchRecipe';
import TodaysRecipe from '../components/recipe/TodaysRecipe';
import Head from 'next/head';
import AddRecipeIcon from '../public/addRecipeIcon.svg'
import Link from 'next/link';
import axios from 'axios';



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
            <Link href= '/newrecipeform'>
            <AddRecipeIcon  width={70} height={70}/>
            </Link>

            </div>
        </div>
    );
};

export default Home;




    axios.get('http://20.38.46.151:8080/food/1')
    .then(function(response){
    const recipe = response.data
    console.log('recipe')
    console.log(recipe.name)
})

async function getRecipes() {
    try {
      const response = await axios.get('http://20.38.46.151:8080/food/1');
      console.log(response)
    }
    catch (error) {
      console.log(error);
    }
  }