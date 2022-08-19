import KakaoImg from '/public/logo_kakao.svg';
import Link from 'next/link';

const KakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

const KakaoLogin = () => {
    return (
        <>
            <Link href={KakaoLoginUrl}>
                <div className="flex justify-center items-center relative w-4/5 h-[60px] bg-white border-[1px] border-solid border-[#d5d5d5] rounded-2xl mt-3 font-medium cursor-pointer">
                    <KakaoImg
                        width={40}
                        height={40}
                        className="absolute left-3"
                    />
                    카카오로 시작하기
                </div>
            </Link>
        </>
    );
};

export default KakaoLogin;
