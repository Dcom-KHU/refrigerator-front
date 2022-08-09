import styled from 'styled-components';
import UserInfo from './UserInfo';
import React, { useState, useEffect } from 'react';
const UserProfile = () => {
    const [name, setName] = useState('닉네임');
    const [newName, setNewName] = useState(name);
    const [isEditting, setIsEditting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const onClick = () => {
        if (isValid) {
            setIsEditting((prev) => !prev);
            setName(newName);
        }
    };

    const cancel = () => {
        setNewName(name);
        setIsEditting(false);
    };

    useEffect(() => {
        1 < newName.length && newName.length < 9
            ? setIsValid(true)
            : setIsValid(false);
    }, [newName, isValid, setIsValid]);

    return (
        <>
            <ProfileContainer>
                <UserNickName isValid={isValid}>
                    {isEditting ? (
                        <>
                            <input value={newName} onChange={onChange}></input>
                            <UserInfoBtn onClick={cancel}>취소</UserInfoBtn>
                            <UserInfoBtn onClick={onClick}>저장</UserInfoBtn>
                        </>
                    ) : (
                        <>
                            <span> {name}</span>
                            <UserInfoBtn onClick={onClick}>변경</UserInfoBtn>
                        </>
                    )}

                    {!isValid && <Err>올바른 이름을 입력해주세요.(2~8자)</Err>}
                </UserNickName>
                <UserInfo />
            </ProfileContainer>
        </>
    );
};

export default UserProfile;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 20px;
`;

const UserNickName = styled.div<{ isValid: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 2rem;
    border-bottom: 1.3px solid #d3d3d3;
    & > input {
        margin-left: 40px;
        padding: 15px 14px;
        width: 20%;
        font-size: 1.1rem;
        border: none;
        border-radius: 10px;
        outline: ${(props) => (props.isValid ? '1px' : '1.5px')} solid
            ${(props) => (props.isValid ? '#d3d3d3' : '#f15746')};
    }
    & > span:first-child {
        margin-left: 40px;
        font-size: 1.7rem;
        font-weight: 600;
    }
`;

export const UserInfoBtn = styled.button`
    padding: 8px 12px;
    margin-left: 15px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    color: rgba(34, 34, 34, 0.8);
`;
const Err = styled.span`
    margin-left: 10px;
    color: red;
    font-size: 0.8rem;
`;
