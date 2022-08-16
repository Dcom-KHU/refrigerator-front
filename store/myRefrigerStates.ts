import { atom } from 'recoil';
import { v1 } from 'uuid';

//나의 냉장고에서 검색중인 값의 state
export const myRefSearchState = atom<string>({
    key: `myRefSearchState/${v1()}`,
    default: '',
});

export const isModifyingState = atom<boolean>({
    key: `isModifying/${v1()}`,
    default: false,
});
