import type { NextPage } from 'next';
import SignUpForm from '../components/auth/SignUpForm';

const Join: NextPage = () => {
    return (
        <>
            <section className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center w-[450px] h-[600px] bg-white">
                    <SignUpForm />
                </div>
            </section>
        </>
    );
};

export default Join;
