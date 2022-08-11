import type { NextPage } from 'next';
import Link from 'next/link'
import StyledButton from './button';
import RecipeList from './recipelist';
import Image from 'next/image';





const SearchRecipe:NextPage = () => {
return (
<> 
<form>   
    <label htmlFor= "search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-200 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

     
        
    <div className='my-3 flex flex-row ' >
        <StyledButton title="한식"/>
        <StyledButton title="중식"/>
        <StyledButton title="양식"/>
        <StyledButton title="일식"/>
        <StyledButton title="지금 요리가능?"/>
    </div>

    <div>
       
       <RecipeList/>
    
 
    </div>

</>


);
};

export default SearchRecipe;


