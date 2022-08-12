import axios from 'axios';
import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

interface User {
    id: number;
    email: string;
    pwd: string;
    name: string;
    nickName: string;
    point: number;
    accessToken: string;
}

export const isAuth = atom<boolean>({
    key: `isAuth/${v1()}`,
    default: false,
});

export const userState = atom<User>({
    key: `userState/${v1()}`,
    default: {
        id: -1,
        email: 'test@test.com',
        pwd: 'testPwd1',
        name: '테스트이름',
        nickName: '테스트닉네임',
        point: 0,
        accessToken: '',
    },
});
