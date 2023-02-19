import { userState } from '../../store/authState';
import { useRecoilState } from 'recoil';
import ChangePwd from './ChangePwd';
const UserInfo = () => {
    const [user, setUser] = useRecoilState(userState);

    return (
        <>
            <div className="flex flex-col w-full h-[350px] mt-3 border-b-[1.3px] border-b-solid border-b-[#d3d3d3]">
                <h2 className="w-full h-8 my-6 ml-5 font-medium text-xl">
                    로그인 정보
                </h2>
                <div className="flex flex-col justify-around w-[95%] h-80 ml-10">
                    <span className="text-base text-[#2222227f]">
                        이메일 주소
                    </span>
                    <div className="flex items-center w-52 lg:w-80 h-12 -mt-10 text-[#2222227f] border-b-[1.3px] border-solid border-b-[#d3d3d3]">
                        {user && user.email}
                    </div>
                    <span className="text-base text-[#2222227f]">비밀번호</span>
                    <ChangePwd />
                </div>
            </div>
        </>
    );
};

export default UserInfo;
