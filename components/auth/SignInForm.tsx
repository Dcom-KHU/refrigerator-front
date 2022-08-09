import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { SignInBtn } from '../buttons/SignInBtn';
import { useRouter } from 'next/router';

const SignInForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') setEmail(value);
        else setPassword(value);
    };

    const onSubmit = (event: React.SyntheticEvent) => {
        //로그인 로직 짜야함
        event.preventDefault();
        router.replace('/');
    };

    return (
        <>
            <FormWrapper onSubmit={onSubmit}>
                <h1>LOGIN</h1>
                <InputArea>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
                        required
                    ></input>
                    <label htmlFor="email">이메일</label>
                </InputArea>
                <InputArea>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={onChange}
                        autoComplete="off"
                        required
                    ></input>
                    <label htmlFor="password">비밀번호</label>
                </InputArea>
                <JoinInWrapper>
                    <Link href="join">
                        <span>회원가입</span>
                    </Link>
                </JoinInWrapper>
                <SignInButton type="submit">로그인</SignInButton>
            </FormWrapper>
        </>
    );
};
export default SignInForm;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1 {
        margin: 50px 0 80px 0;
    }
    margin-bottom: 30px;
`;

const LabelUp = keyframes`
    from{transform:translateY(0)}
    to{transform:translateY(-150%)}
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 50px;
    & > input {
        width: 80%;
        height: 50px;
        border: none;
        border-bottom: 1px solid #c9c9c9;
        font-size: 1rem;
    }
    & > input:focus,
    & > input:valid {
        width: 80%;
        height: 50px;
        outline: none;
        border-bottom: 1.5px solid #000;
    }
    & > input + label {
        position: absolute;
        margin-top: 15px;
        left: 11%;
        font-size: 0.875rem;
        color: #c6c6c6;
        &:hover {
            cursor: auto;
        }
    }
    & > input:focus + label,
    & > input:valid + label {
        color: #000;
        font-size: 0.8rem;
        animation: ${LabelUp} 0.2s ease forwards;
    }
`;

const SignInButton = styled(SignInBtn)`
    background-color: #dedede;
    font-weight: 500;
    &:hover {
        cursor: pointer;
        background-color: #000000;
        color: #fff;
    }
`;

const JoinInWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 80%;
    height: auto;
    margin: -30px 30px 0 0;
    font-size: 0.875rem;
    & > span {
        cursor: pointer;
    }
`;
