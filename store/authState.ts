import { atom } from 'recoil';
import { v1 } from 'uuid';

export const isAuth = atom<boolean>({
    key: `isAuth/${v1()}`,
    default: false,
});
