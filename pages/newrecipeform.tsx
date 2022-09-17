import axios from 'axios';
import { NextPage } from 'next';
import { useRef , useState} from 'react';


const NewRecipeForm:NextPage = (props) => {

    const [mainImage, setMainImage] = useState<File>();
    const [images, setImages] = useState<File[]>([]);


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

        

    

        //입력 받은 값을 각 변수에 할당
        // const enteredName = nameInputRef.current!.value;
        // const enteredCategory = categoryInputRef.current!.value;
        // const enteredImages = imagesInputRef.current!.value;
        // //photoFile = document.getElementById("photo");
        // //frm.append("photo", photoFile.files[0]);
        // const enteredImageDescriptions = JSON.stringify(imageDescriptionsInputRef.current!.value);
        // const enteredIngredient = JSON.stringify(ingredientInputRef.current!.value);
        // const enteredIngredientAmount = JSON.stringify(ingredientAmountInputRef.current!.value);
        // const enteredDescription = descriptionInputRef.current!.value;

        //등록하고자 하는 정보(입력받은 값들) : recipeData
        // const recipeData = {
        //     name: enteredName,
        //     category: enteredCategory,
        //     image: enteredImages,
        //     imageDescription: enteredImageDescriptions,
        //     ingredient: enteredIngredient,
        //     ingredientAmount: enteredIngredientAmount,
        //     description: enteredDescription,
        // };
        // console.log(recipeData);

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

        
        // try {
        //     const res = await axios.post(
        //         url , 
        //         formRecipeData,
        //         {
        //             headers: {
        //                 'userId': userId,
        //                 'Content-Type': 'multipart/form-data'}

        //         }    
        //     );
        // } catch (e) {
        //     console.log(e);
        // }
    }


        // // button 함수
        // function onFileUpload(e:any) {
        //     e.preventDefault();
        //     let file = e.target.files[0];
        //   }

        //클릭 횟수만큼 해당 컴포넌트 개수를 늘리도록
        //사진과 설명을 하나의 컴포넌트로 ( 배열 )
   
    return (
        <>
            <form name="RecipeRegisterForm" onSubmit={submitHandler}>
            <h1>새로운 레시피 등록</h1>   
                <div className='items-center mx-3' >
                         <div className="relative z-0 mb-6 w-full group">
                             <input ref={nameInputRef} type="text" name="name" id="name_" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">음식이름</label>
                         </div>

                        <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor='mainImage_input' >Upload Main Image</label>
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                     type="file" id="mainImage_input"
                            name="images"
                            accept="image/*"ref={mainImageRef}/>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                    </div>

               
                    <div className="relative z-0 mb-6 w-full group">
                        <input  ref={categoryInputRef}
                            type="text"
                            name="category" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">카테고리</label>
                     </div>

                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor='file_input' >Upload file</label>
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                     type="file" id="file_input"
                            name="images"
                            accept="image/*"  onChange={onChangeImg}/>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                        <input   ref={imageDescriptionsInputRef}
                            type="text"
                            name="imageDescriptions" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이미지 설명</label>
                     </div>
                    
                    <div className="relative z-0 mb-6 w-full group">
                        <input   ref={ingredientInputRef}
                            type="text"
                            name="ingredient" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">재료</label>
                     </div>

                     <div className="relative z-0 mb-6 w-full group">
                        <input     ref={ingredientAmountInputRef}
                            type="text"
                            name="ingredientAmount" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">재료별 양</label>
                     </div>

                
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">레시피 설명</label>
                    <input ref={descriptionInputRef} id="message" name='description'  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."/>설명
                </div> 
                <button className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' type='submit'>등록</button> 
            </form>
        </>
    );

};

export default NewRecipeForm;



// const uploadFile = async (file:any) => {
//     const formData = new FormData()
//     formData.append('file', file)

//     const res = await fetch('http://20.38.46.151:8080/foodImage/attach/{foodImageId}')
// }





