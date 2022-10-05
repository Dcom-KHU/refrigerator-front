import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import StyledButton from '../common/Button';
import RecipeList from './RecipeList';
import axios from 'axios';
import { prependOnceListener } from 'process';

const SearchRecipe: NextPage = () => {

    const recipeId = 1;

    //api로 레시피 all받아와서 props로 전달
    const [loadRecipes, setLoadRecipes ] = useState({});
    // useEffect( ()=> {
    //     axios.get('http://localhost:8080/food/1')
    //     .then(function(response){
    //     const recipe = response.data
    //     setLoadRecipes(recipe)})}    
    // ,[])
    
    // axios.get('http://20.38.46.151:8080/food/1')
    // .then(function(response){
    // const recipe = response.data
    // console.log('recipe');
    // console.log(recipe);
    // setLoadRecipes(recipe)
    //     console.log(loadRecipes)})
   


  //클릭한 버튼의 title을 state에 저장
    const [content, setContent] = useState();

    const handleClickButton = (e:any) =>{
        const {title} = e.target;
        setContent(title)

    }

    // const filterRecipeLists= () =>{
    //     loadRecipes.filter()
    // }    
     

//카테고리별로 api겟해오기
    async function handleClickedCategory(category:string) {
        try {
          const response = await axios.get(category);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      
    // const onClickCategory = (props) => {
    //     //클릭한 버튼이 
    //     if 누른버튼 내용 === 리스트의 카테고리 
    //     return (해당 리스트)

    // }
    // //serversideRendering으로 쿼리로 데이터를 검색한다

    return (
        <>
            <form>
                <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                    Your Email
                </label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-red-200 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="my-3 flex flex-row ">
                <StyledButton title="한식"/>
                <StyledButton title="중식" />
                <StyledButton title="양식" />
                <StyledButton title="일식" />
                <StyledButton title="지금 요리가능?" />
            </div>

            <div>
                <RecipeList recipeList={loadRecipes} />
                
            </div>
        </>
    );
};

//foodId를 가진것을 바탕으로 쿼리를 날려주면 됨
//지금 요리가능을 클릭하면  /food/refrigeratorFood api호출 


export default SearchRecipe;

async function getData() {
    try {
      const response = await axios.get(
        "http://20.38.46.151:8080/" ,
        config
      );
      console.log("success!", response);

    } catch (error) {
      console.log(error);
    }
  }
  
  const userId = 1;
  
  const config = {
    headers: {
      userId,
    },
  };
