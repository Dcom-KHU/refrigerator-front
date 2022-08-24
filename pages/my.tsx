import type { GetServerSideProps } from 'next';
import { stayLogin } from '../util/auth';
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { isAuthedState, userState, User } from '../store/authState';
import UserProfile from '../components/profile/UserProfile';

interface propType {
    user: User;
}

const Mypage = (props: propType) => {
    const setIsAuthed = useSetRecoilState(isAuthedState);
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        if (props.user) {
            setIsAuthed(true);
            setUser(props.user);
        } else setIsAuthed(false);
    }, []);

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = await stayLogin(ctx);
    if (user) {
        return {
            props: { user },
        };
    }
    return { props: {} };
};
