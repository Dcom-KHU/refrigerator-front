import type { NextPage } from 'next';
import styled from "styled-components";


const GlobalNavWrapper = styled.div`
box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
padding-left: 4rem;
padding-right: 4rem;
align-items: center;
display: flex;
align-items: center;
flex-grow: 1;

`
const MenuAlign = styled.div`
flex-shrink: 0!important;
display: block;

 `

const Header:NextPage = () => {
return <>
<header>

       <nav>
            <div className='TodaysRecipe'>

                <ul>
                <li>logo </li>
                <li>나의 냉장고</li>
                <li>로그인</li>
                </ul>
        
                </div>
             </nav>
        
             </header>
             

</>
}

export default Header;