import axios from 'axios';
import { NextPage } from 'next';
import { useRef , useState} from 'react';
import Header from '../components/common/Header';
import AddListsIcon from '../public/addLists.svg'


const NewRecipeForm:NextPage = (props) => {

    const [mainImage, setMainImage] = useState<File>();
    const [images, setImages] = useState<File[]>([]);
    const [addCookingProcess, setAddCookingProcess] = useState(false);
    const [toggle, setToggle] = useState(false);
    

    const addCookingHandler = () =>{
        setAddCookingProcess( true);
    }

    const clickedToggle = () => {
        setToggle((prev) => !prev);
    }


    //입력받은 값들을 변수에 담기
    const nameInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);
    const imagesInputRef = useRef<HTMLInputElement>(null);
    const imageDescriptionsInputRef = useRef<HTMLInputElement>(null);
    const ingredientInputRef = useRef<HTMLInputElement>(null);
    const ingredientAmountInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);
    const mainImageRef = useRef<HTMLInputElement>(null);

    const url = 'http://20.38.46.151:8080/food/register'
    const userId = 1

    // const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
        
    //     if(e.target.files){
    //       const uploadFile = e.target.files[0]
    //       //console.log(uploadFile)
    //       //앞에서 formdata 생성
    //       formRecipeData.append('files',uploadFile)
    //     }
    //   }

      const onChangeImg = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0]
        setImages(file)
      }

    //   const onChangeMainImg = (e: any) => {
    //     e.preventDefault();
    //     let main = e.target.files[0]
    //     setMainImage(main)
    //   }


 
    async function submitHandler(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredName = nameInputRef.current!.value;
        const enteredCategory = categoryInputRef.current!.value;
        const enteredDescription = descriptionInputRef.current!.value;
        //const enteredImages = imagesInputRef.current!.value;
        const enteredImageDescriptions = JSON.stringify(imageDescriptionsInputRef.current!.value);
        const enteredIngredient =  JSON.stringify(ingredientInputRef.current!.value);
        const enteredIngredientAmount = JSON.stringify(ingredientAmountInputRef.current!.value);


        const formRecipeData = new FormData()

        formRecipeData.append("name", enteredName);
        formRecipeData.append('category', enteredCategory)
        formRecipeData.append('description', enteredDescription)
        for (let i = 0; i < images.length; i++) {
            formRecipeData.append('images', images[i]);
        }
        formRecipeData.append('imageDescriptions', enteredImageDescriptions )
        formRecipeData.append('ingredient', enteredIngredient )
        formRecipeData.append('ingredientAmount', enteredIngredientAmount)

        if (mainImageRef.current!.files !== null ) {
            const enteredMainImage = mainImageRef.current!.files?.item(0) as File
            formRecipeData.append('mainImage', enteredMainImage);
        }

    
        //file image upload 를 state로 빼고 state를 활용해서 데이터 올리도록
       
        const config = {
            headers: {
              "Content-Type": "multipart/form-data",
              userId: 1,
            },
          };
        
          axios.post(url, formRecipeData, 
            config
          )
          .then(function (response) {
            console.log("success!")
            console.log(response);
          })

    }


        // // button 함수
        // function onFileUpload(e:any) {
        //     e.preventDefault();
        //     let file = e.target.files[0];
        //   }

        //클릭 횟수만큼 해당 컴포넌트 개수를 늘리도록
        //사진과 설명을 하나의 컴포넌트로 ( 배열 )
        //container mx-auto my-10 box-border h-90 w-90 items-center 
   
    return (

  
    
    <div>
          <Header/>
          
          <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <div className='my-10'>
            <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <button className=" shadow bg-gray-200 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type='button'>
                                이전
            </button>
            
            <form name="RecipeRegisterForm" onSubmit={submitHandler}>
            
            {/* 제목 */}
            <h2 className="my-3 font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">새로운 레시피 등록</h2>
            <div className='items-center mx-3' >
                <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                음식 이름
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <div className="relative z-0 mb-6 w-full group">
                         <input ref={nameInputRef} type="text" name="name" id="name_" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="음식 이름" required />
                         </div>
                    </div>
                </div>

                {/* 음식 설명 */}
                <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                음식 설명
                        </label>
                    </div>
                 <div className="md:w-2/3">
                    <input   ref={descriptionInputRef} id="message" name='description' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="음식 설명" required />
                 </div>
                </div>

                {/* 카테고리 설정 */}
                <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                카테고리
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <select className="form-select block w-full focus:bg-white" id="my-select" ref={categoryInputRef}
                            type="text"
                            name="category">
                                <option value="KOREAN">한식</option>
                                <option value="WESTERN">양식</option>
                                <option value="JAPANESE">일식</option>
                                <option value="CHINESE">일식</option>
                            </select>

                            <p className="py-2 text-sm text-gray-400">음식의 종류를 선택해 주세요.</p>
                        </div>
                    </div>


               {/* 메인 사진 업로드 */}
               <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                메인 이미지
                            </label>
                        </div>
                        
                        <div className="md:w-2/3">
                            <input className="mb-3 md:mb-0 pr-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                 type="file" id="mainImage_input"
                            name="images"
                            accept="image/*"ref={mainImageRef}/>   
                        </div>
                    </div>
                   
                  {/* 재료 및 재료 별 양 */}
                  <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                재료 및 양
                            </label>
                            </div>
                        
                        <div className="md:w-2/3">
                            <table className="table-fixed md:w-3/3">
                            <thead>
                                <tr>
                                <th>재료</th>
                                <th>양</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input  ref={ingredientInputRef} type="text" name="ingredient" placeholder='재료를 입력하세요'></input></td>
                                    <td><input ref={ingredientAmountInputRef} type="text" name="ingredientAmount" placeholder='양을 입력하세요'></input></td>
                                    </tr>
                            {/* 클릭하면 tr창이 하나씩 더  생기도록 구현 */}
                            </tbody>
                        </table> 
                        <AddListsIcon className='flex items-center' width={30} height={30} onClick={addCookingHandler}/>

                        </div>
                    </div>

                   {/* 레시피 설명 업로드 */}
                   <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                레시피 세부 내용
                            </label>
                        </div>
    
                        <div className="md:w-2/3">
                            {!addCookingProcess && <AddListsIcon className='flex items-center' width={30} height={30} onClick={addCookingHandler}/> }
                            {addCookingProcess && 
                            <div>
                                <input className="mb-3 md:mb-0 pr-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                 type="file" id="recipeImage_input" name="images" accept="image/*"ref={mainImageRef} onChange={onChangeImg}/> 
                        
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">각 단계에 해당하는 이미지를 첨부해 주세요</div>
                        
                                <div className="relative z-0 mb-6 w-full group">
                                    <input ref={imageDescriptionsInputRef} type="text" name="imageDescriptions"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="레시피 설명"/>
                                    <AddListsIcon className='flex items-center' width={30} height={30} onClick={addCookingHandler}/>
                                </div> 
                            </div>
                             }
                         </div>
                        </div>       
                    </div>            

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="space-x-4 md:w-2/3">
                            <button className="shadow bg-red-300 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='submit' onClick={clickedToggle}>
                                {!toggle? "등록" : "수정" }
                            </button>
                            <button className=" shadow bg-red-200 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='button'>
                                취소
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    
    );

};

export default NewRecipeForm;

// const uploadFile = async (file:any) => {
//     const formData = new FormData()
//     formData.append('file', file)

//     const res = await fetch('http://20.38.46.151:8080/foodImage/attach/{foodImageId}')
// }





