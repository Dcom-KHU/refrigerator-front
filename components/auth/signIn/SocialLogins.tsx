import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';
const SocialLogins = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full -mt-[10px]">
                <NaverLogin />
                <KakaoLogin />
            </div>
        </>
    );
};

export default SocialLogins;
