import React from 'react';

interface propType {
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyRefSelect = (props: propType) => {
    return (
        <>
            <div className="flex w-full h-12">
                <div
                    onClick={() => {
                        props.setSelected(false);
                    }}
                    className={`flex justify-center items-center w-1/2 rounded-t-2xl border-[1.5px] border-b-0 cursor-pointer hover:bg-[#f4f4f4] ${
                        !props.selected && 'bg-white'
                    } `}
                >
                    <h2 className="font-semibold">나의 냉장고</h2>
                </div>
                <div
                    onClick={() => {
                        props.setSelected(true);
                    }}
                    className={`flex justify-center items-center w-1/2 rounded-t-2xl border-[1.5px] border-b-0 cursor-pointer hover:bg-[#f4f4f4] ${
                        props.selected && 'bg-white'
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
