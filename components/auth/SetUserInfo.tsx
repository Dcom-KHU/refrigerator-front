import React from 'react';

interface propType {
    name: string;
    nickName: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setNickName: React.Dispatch<React.SetStateAction<string>>;
}
const SetUserInfo = (props: propType) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'name') props.setName(value);
        else props.setNickName(value);
    };

    return (
        <>
            <div className="flex justify-around w-full">
                <div className="flex flex-col items-center relative w-2/5 mb-12">
                    <div className="flex w-4/5">
                        <h3 className="font-semibold text-[13px]">이름*</h3>
                    </div>
                    <input
                        type="text"
                        id="name"
                        value={props.name}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                        placeholder="예) 김철수"
                    ></input>
                </div>
                <div className="flex flex-col items-center relative w-2/5 mb-12">
                    <div className="flex w-4/5">
                        <h3 className="font-semibold text-[13px]">닉네임*</h3>
                    </div>
                    <input
                        type="text"
                        id="nickName"
                        value={props.nickName}
                        onChange={onChange}
                        autoComplete="off"
                        required
                        className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                        placeholder="2~8자"
                    ></input>
                </div>
            </div>
        </>
    );
};

export default React.memo(SetUserInfo);
