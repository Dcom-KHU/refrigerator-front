import { atom } from 'recoil';
import { v1 } from 'uuid';

export interface User {
    email: string | null;
    id: number | null;
    name: string | null;
    nickname: string | null;
    notificationFood: boolean | null;
    notificationRefrigerator: boolean | null;
    password: string | null;
    point: number | null;
}

export const userState = atom<User>({
    key: `userState/${v1()}`,
    default: {
        email: null,
        id: null,
        name: null,
        nickname: null,
        notificationFood: null,
        notificationRefrigerator: null,
        password: null,
        point: null,
    },
});

export const isAuthedState = atom<boolean>({
    key: `isAuth/${v1()}`,
    default: false,
});
