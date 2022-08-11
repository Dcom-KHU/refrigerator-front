import { NextPage } from 'next';
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RecipeType } from '../types/recipetype';


/*레시피 리스트 처리 */
const APIkey = 'apikeyexample'

/*
const [recipes, setRecipes] = useState([ ])
useEffect ( () => {
   ( async () => {
    const {results} = await (
    await fetch(`url${APIkey}`)).json();
    setRecipes(results)})();
 }  ,[]);
*/

 const recipes : RecipeType[] = 
    [
        {
            "id": 1,
            "writer": {
                "id": 1,
                "nickname": "김민기"
            },
            "name": "민기표 계란 후라이",
            "description": "HTML 문서",
            "category": "KOREAN",
            "food": [
                {
                    "ingredient": "계란",
                    "amount": "계란 한 알",
                }
            ] 
        },
        {
            "id": 2,
            "writer": {
                "id": 1,
                "nickname": "박민재"
            },
            "name": "민재표 돌돌말이 김밥",
            "description": "HTML 문서",
            "category": "KOREAN",
            "food": [
                {
                    "ingredient": "계란",
                    "amount": "계란 한 알",
                }
            ] 
        },
        {
            "id": 3,
            "writer": {
                "id": 1,
                "nickname": "이재혁"
            },
            "name": "재혁이표 까르보나라",
            "description": "HTML 문서",
            "category": "WESTERN",
            "food": [
                {
                    "ingredient": "치즈",
                    "amount": "계란 한 알",
                }
            ] 
        },
    ]



const RecipeList :React.FC = () => {
    return (
        <>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {recipes.map((recipe) => (
                <div>
                {/* card1 */}
                  <div className="rounded overflow-hidden shadow-lg" key = {recipe.id}>
                    <img className="w-full" src="https://i.pinimg.com/474x/d3/d6/8f/d3d68f21f68e8ad02619eb81c06a6d75.jpg" alt="Mountain"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{recipe.name}</div>
                      <p className="text-gray-700 text-base">
                            {recipe.description}                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe.category}</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                  </div>

                </div>
            ))} 
            </div>

        </>
        
    )
    
}

export default RecipeList;


