import { atom } from 'recoil';
import { v1 } from 'uuid';

interface User {
    email: string;
    password: string;
    name: string;
    nickname: string;
    point: number;
}

export const userState = atom<User>({
    key: `userState/${v1()}`,
    default: {
        email: '',
        password: '',
        name: '',
        nickname: '',
        point: -1,
    },
});

export const isAuthedState = atom<boolean>({
    key: `isAuth/${v1()}`,
    default: false,
});
