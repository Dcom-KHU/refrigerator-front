
import axios from 'axios';
import { RecipeType } from '../../types/recipetype';
import ReciepeItem from './RecipeItem';

/*레시피 리스트 처리 */
const APIkey = 'apikeyexample';

/*
const [recipes, setRecipes] = useState([ ])
useEffect ( () => {
   ( async () => {
    const {results} = await (
    await fetch(`url${APIkey}`)).json();
    setRecipes(results)})();
 }  ,[]);
*/


//recipes에 서버에서 받아온 정보를 담고

const RecipeList: React.FC = () => {
    // const foodName:string = recipes.name 

    return (
        <>
            <div>
         
                <ReciepeItem  />
                    
            </div>
        </>
    );
};
//map REcipeItem
//       {recipes.map((recipe) => 
//key={recipe.id} name={recipe.name} description={recipe.description} ingredient={recipe.ingredient}

export default RecipeList;


export async function getServerSideProps(context:any) {
    const res  = await axios.get('http://20.38.46.151:8080/food/1')
    const recipes = res.data
    console.log(recipes)

    return {props: {recipes}}
}


// id:number = {recipe.id}
// description:string = {recipe.description}
// category:string = {recipe.category}