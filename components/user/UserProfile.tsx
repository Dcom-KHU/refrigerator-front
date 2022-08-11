import UserInfo from './UserInfo';
import ChangeNickName from './ChangeNickName';

const UserProfile = () => {
    return (
        <>
            <div className="flex flex-col w-[95%] mt-5">
                <ChangeNickName />
                <UserInfo />
            </div>
        </>
    );
};

export default UserProfile;
