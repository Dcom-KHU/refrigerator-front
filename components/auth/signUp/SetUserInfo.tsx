import React from 'react';

interface propType {
    email: string;
    pwd: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPwd: React.Dispatch<React.SetStateAction<string>>;
}

const SetUserInfo = (props: propType) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') props.setEmail(value);
        else props.setPwd(value);
    };

    return (
        <>
            <div className="flex w-4/5">
                <h3 className="font-semibold text-[13px]">이메일*</h3>
            </div>
            <div className="flex justify-center relative w-full mb-12">
                <input
                    type="text"
                    id="email"
                    value={props.email}
                    onChange={onChange}
                    autoComplete="off"
                    required
                    className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                    placeholder="예) example@example.com"
                ></input>
            </div>
            <div className="flex w-4/5">
                <h3 className="font-semibold text-[13px]">비밀번호*</h3>
            </div>
            <div className="flex justify-center relative w-full mb-12">
                <input
                    type="password"
                    id="pwd"
                    value={props.pwd}
                    onChange={onChange}
                    autoComplete="off"
                    required
                    className="peer w-4/5 h-12 text-base border-b border-b-solid border-b-[#c9c9c9] focus:outline-none focus:border-b-black focus:border-b-[1.5px] valid:outline-none valid:border-b-black valid:border-b-[1.5px] placeholder-gray-400 placeholder:font-light focus:placeholder-transparent"
                    placeholder="영문, 숫자 조합 6~16자"
                ></input>
            </div>
        </>
    );
};

export default React.memo(SetUserInfo);
