import type { NextPage } from 'next';
import Link from 'next/link'
import StyledButton from './button';
import RecipeList from './recipelist';
import Image from 'next/image';





const SearchRecipe:NextPage = () => {
return (
<> 
   
    <div className='mx-1 flex flex-row' >
    
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
        <input  type ='text' placeholder='레시피검색' />
        <StyledButton title="검색"/>
   
    </div>
    

    <div className='mx-1 flex flex-row ' >
        <StyledButton title="한식"/>
        <StyledButton title="중식"/>
        <StyledButton title="양식"/>
        <StyledButton title="일식"/>
        <StyledButton title="지금 요리가능?"/>
    </div>

    <div>
       
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <Image src= '/food2.jpeg' width = {500}  height = {500}/>   
            <Link href={'/detail'}>음식이름</Link>
    
 
</div>
    </div>
</>
);
};

export default SearchRecipe;


