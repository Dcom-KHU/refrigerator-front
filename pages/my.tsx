import type { GetServerSideProps } from 'next';
import { stayLogin, logOut } from '../util/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { isAuthedState, userState, User } from '../store/authState';
import UserProfile from '../components/profile/UserProfile';

interface propType {
    user: User;
}

const Mypage = (props: propType) => {
    const router = useRouter();
    const [isAuthed, setIsAuthed] = useRecoilState(isAuthedState);
    const [user, setUser] = useRecoilState(userState);
    const resetUser = useResetRecoilState(userState);

    useEffect(() => {
        if (props.user) {
            setIsAuthed(true);
            setUser(props.user);
        } else setIsAuthed(false);
    }, []);

    const onClick = async () => {
        const res = user.id && (await logOut(user.id));
        if (res) {
            resetUser();
            setIsAuthed(false);
            router.replace('/');
        }
    };

    return (
        <>
            <section className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center md:w-[720px] md:h-[480px]  rounded-xl">
                    <div className="flex justify-between items-end w-full h-24 border-b-[3px] border-solid border-[#222]">
                        <h1 className="ml-5 mb-4 text-2xl font-semibold">
                            프로필 정보
                        </h1>
                        <button
                            onClick={onClick}
                            className="py-2 px-3 mb-3 rounded-xl border-solid border-[1px] border-[#d3d3d3]"
                        >
                            로그아웃
                        </button>
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
