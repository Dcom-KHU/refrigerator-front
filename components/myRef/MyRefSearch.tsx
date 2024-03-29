import React from 'react';
import { useRecoilState } from 'recoil';
import { myRefSearchState } from '../../store/myRefrigerStates';
import SearchSVG from '/public/search.svg';

const MyRefSearch = () => {
    const [keyword, setKeyword] = useRecoilState(myRefSearchState);

    return (
        <>
            <div className="flex justify-center items-center w-[99%] ms:w-full h-24">
                <form className="flex relative items-center w-72">
                    <input
                        value={keyword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setKeyword(e.target.value);
                        }}
                        className="peer w-full bg-white px-10 py-2 rounded-3xl outline-none border-[1.5px] focus:placeholder-transparent"
                        placeholder="search"
                    ></input>
                    <SearchSVG
                        width={20}
                        className={`absolute left-3 peer-focus:fill-[#303136] ${
                            keyword != '' && 'peer-valid:fill-[#303136]'
                        }`}
                    />
                </form>
            </div>
        </>
    );
};

export default React.memo(MyRefSearch);
