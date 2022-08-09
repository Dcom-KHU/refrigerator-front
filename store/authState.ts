import { atom } from 'recoil';

export const isAuth = atom<boolean>({
    key: 'AccessToken',
    default: false,
});
