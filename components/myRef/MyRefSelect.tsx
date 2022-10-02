import React from 'react';
interface propType {
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyRefSelect = (props: propType) => {
    return (
        <>
            <div className="flex w-full h-12 text-xs md:text-base">
                <div
                    onClick={() => {
                        props.setSelected(false);
                    }}
                    className={`flex justify-center items-center w-1/2 rounded-t-2xl border-[#9d9d9d] border-[1px] border-b-0 cursor-pointer hover:bg-[#efefef] ${
                        !props.selected && 'bg-white hover:bg-[#fff] text-black'
                    } `}
                >
                    <h2 className="font-semibold">내 재료</h2>
                </div>
                <div
                    onClick={() => {
                        props.setSelected(true);
                    }}
                    className={`flex justify-center items-center w-1/2 rounded-t-2xl border-[#9d9d9d] border-[1px] border-b-0 cursor-pointer hover:bg-[#efefef] ${
                        props.selected && 'bg-white hover:bg-[#fff]'
                    }`}
                >
                    <h2 className="font-semibold text-red-500">
                        유통기한 임박
                    </h2>
                </div>
            </div>
        </>
    );
};

export default React.memo(MyRefSelect);
