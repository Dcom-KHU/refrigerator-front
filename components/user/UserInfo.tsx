const UserInfo = () => {
    return (
        <>
            <div className="flex flex-col w-full h-[350px] mt-3 border-b-[1.3px] border-b-solid border-b-[#d3d3d3]">
                <h2 className="w-full h-8 my-6 font-medium text-xl">
                    로그인 정보
                </h2>
                <div className="flex flex-col justify-around w-full h-80 ml-10">
                    <span className="text-base text-[#2222227f]">
                        이메일 주소
                    </span>
                    <div className="flex items-center w-80 h-12 -mt-10 text-[#2222227f] border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                        email@email.com
                        <button className="absolute py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-[260px] text-[#222222cc]">
                            변경
                        </button>
                    </div>
                    <span className="text-base text-[#2222227f]">비밀번호</span>
                    <div className="flex items-center w-80 h-12 -mt-10 text-[#2222227f] border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                        ●●●●●●●●●
                        <button className="absolute py-2 px-3 text-sm border-[1px] border-solid border-[#d3d3d3] rounded-[10px] cursor-pointer ml-[260px] text-[#222222cc]">
                            변경
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
