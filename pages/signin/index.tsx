import type { NextPage } from 'next';
import SignInForm from '../../components/auth/signIn/SignInForm';
import SocialLogins from '../../components/auth/signIn/SocialLogins';

const SignIn: NextPage = () => {
    return (
        <>
            <section className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center w-[450px] h-[600px] bg-white">
                    <SignInForm />
                    <SocialLogins />
                </div>
            </section>
        </>
    );
};

export default SignIn;
