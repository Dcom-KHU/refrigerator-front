import Image from "next/image";

//props에 담긴 이미지 가져오기
// const myLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
//   }
//<Image Loader ={myLoader}


const ReciepeItem : React.FC = (props) => {
    return ( 
      <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div >
                        {/* card1 */}
                        <div className="rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://i.pinimg.com/474x/d3/d6/8f/d3d68f21f68e8ad02619eb81c06a6d75.jpg"
                                alt="Mountain"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    name
                                </div>
                                <p className="text-gray-700 text-base">
                                    description
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                 category
                                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                  ingredient
                                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    ingredient
                                </span>
                            </div>
                        </div>
                    </div>
                
            </div>
    </>)
};

export default ReciepeItem;