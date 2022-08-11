import Image from "next/image";


const TodaysRecipe: React.FC<{menu:string}> = (props) => {
    return (
        <div className="grid place-items-center">
            <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
            <h1>오늘의 추천 레시피</h1>
            </div >
            <div className="carousel relative container mx-auto">
                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <Image src ='/food1.jpeg' width ={100} height = {100} />
                            <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view recipe</a>
                        </div>
                    </div>
                </div>
            
            <label className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label  className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
       
  </div>

   
    )
}

export default TodaysRecipe;


