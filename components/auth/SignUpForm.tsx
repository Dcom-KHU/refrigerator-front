import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id == 'email') setEmail(value);
        else setPassword(value);
    };

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        //add signin request
    };

    return (
        <>
            <FormWrapper>
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
                <Link href="join">
                    <P>회원가입</P>
                </Link>
                <SignUpButton type="submit" onSubmit={onSubmit}>
                    로그인
                </SignUpButton>
            </FormWrapper>
        </>
    );
};
export default SignUpForm;

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
        color: #c6c6c6;
        &:hover {
            cursor: auto;
        }
    }
    & > input:focus + label,
    & > input:valid + label {
        color: #000;
        font-size: 0.9em;
        animation: ${LabelUp} 0.2s ease forwards;
    }
`;

const SignUpButton = styled.button`
    width: 80%;
    height: 60px;
    font-size: 0.925rem;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    &:hover {
        cursor: pointer;
        background-color: #000000;
        color: #fff;
    }
`;

const P = styled.p`
    margin-top: -35px;
    margin-left: 260px;
    font-size: 0.875rem;
    cursor: pointer;
`;
