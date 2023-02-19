import ChangeNickName from './ChangeNickName';
import UserInfo from './UserInfo';

const UserProfile = () => {
    return (
        <>
            <div className="flex flex-col w-full mt-5">
                <ChangeNickName />
                <UserInfo />
            </div>
        </>
    );
};

export default UserProfile;
