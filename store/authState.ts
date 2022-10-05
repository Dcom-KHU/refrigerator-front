import { atom } from 'recoil';
import { v1 } from 'uuid';

export interface UserType {
    email: string;
    id: number;
    name: string;
    nickname: string;
    notificationFood: boolean;
    notificationRefrigerator: boolean;
    password: string;
    point: number;
}

export const userState = atom<UserType | null>({
    key: `userState/${v1()}`,
    default: null,
});

export const isAuthedState = atom<boolean>({
    key: `isAuth/${v1()}`,
    default: false,
});
