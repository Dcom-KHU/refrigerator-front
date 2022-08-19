import UserProfile from '../components/profile/UserProfile';

const Mypage = () => {
    return (
        <>
            <section className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center md:w-[720px] md:h-[480px]  rounded-xl">
                    <div className="flex items-end w-full h-24 border-b-[3px] border-solid border-[#222]">
                        <h1 className="ml-5 mb-4 text-2xl font-semibold">
                            프로필 정보
                        </h1>
                    </div>
                    <UserProfile />
                </div>
            </section>
        </>
    );
};

export default Mypage;