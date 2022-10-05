import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../../util/axios';
import Image from 'next/image';
import foodImage from '/public/food1.jpeg';
import testData from '../../testRecipe.json';

const Recipe = () => {
    const router = useRouter();
    const foodId = router.asPath;
    const [recipe, setRecipe] = useState();

    const fetchRecipeDetail = async () => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/food/${foodId}`,
            });
            if (200 <= res.status && res.status < 300) setRecipe(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchRecipeDetail();
    }, []);

    return (
        <>
            <div className="flex justify-center w-screen">
                <div className="flex flex-col items-center mt-10 w-[800px] border-[1.5px] border-[#d1d1d1] rounded-2xl">
                    <div className="flex flex-col w-full justify-center items-center mt-20">
                        <Image
                            src={foodImage}
                            width={500}
                            height={500}
                            className="rounded-3xl"
                        />
                        <div className="flex relative justify-center w-full">
                            <h1 className="mt-10 text-4xl font-medium">
                                {testData.name}
                            </h1>
                        </div>
                    </div>
                    <div className="flex mt-10 w-[70%] justify-center">
                        <p className="text-lg text-[#777]">
                            {testData.description}
                        </p>
                    </div>
                    <hr className=" w-[90%] mt-10" />
                    <div className="flex w-[90%] justify-center items-center mt-10 font-semibold text-2xl">
                        재료
                    </div>
                    <div className="flex flex-col w-1/2 mt-10">
                        {testData.food.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <li className="flex w-[95%] h-12 justify-between items-center">
                                    <div> {item.ingredient}</div>
                                    <div>{item.amount}</div>
                                </li>
                                <hr />
                            </React.Fragment>
                        ))}
                    </div>
                    <hr className=" w-[90%] mt-10" />
                    <div className="flex flex-col mt-10">
                        {testData.images.map((item) => (
                            <React.Fragment key={item.id}>
                                <Image
                                    src={item.filePath}
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col mb-20">
                                    {item.description}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex w-full justify-end mr-16">
                        <span>@writer-{testData.writer.nickname}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recipe;
