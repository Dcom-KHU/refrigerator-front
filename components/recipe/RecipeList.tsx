
import axios from 'axios';
import { it } from 'node:test';
import { useEffect } from 'react';
import { RecipeType } from '../../types/recipetype';
import ReciepeItem from './RecipeItem';

interface propType{
    recipeList:any
}
// 레시피 리스트 보여주는 컴포넌트
const RecipeList = (props:propType) => {

  
    return (
        <>
            <div>
                {props.recipeList.length > 0 &&
                props.recipeList.map((it:any)=>(
                    <ReciepeItem id={it.id} name={it.name} description={it.description} writer={it.writer} category={it.category}
                    ingredientAmount={it.ingredientAmount} ingredient={it.ingredient} />
                ))} 
                    
            </div>
        </>
    );
};

RecipeList.defaultProps= {
    recipeList : [],
};
//map REcipeItem
//       {recipes.map((recipe) => 
//key={recipe.id} name={recipe.name} description={recipe.description} ingredient={recipe.ingredient}

export default RecipeList;



// id:number = {recipe.id}
// description:string = {recipe.description}
// category:string = {recipe.category}